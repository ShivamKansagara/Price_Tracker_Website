const express = require('express');
const puppeteer = require('puppeteer');
const mongoose = require('mongoose');

var electronics = require('../models/model_electonics')
// var organizerdb = require('../model/model_organizer')
// var trackdb = require('../model/model_track')
// var homedb = require('../model/model_home')
// var teamdb = require('../model/model_team')
// var leaderdb = require('../model/model_leaderboard')
// var uvtrackdb = require('../model/model_uvtrack')
// var admindb = require('../model/model_admin')
//const axios = require("axios");
// const bcrypt = require('bcrypt');S


// Initialize Express app
const app = express();
app.use(express.json());

// Scrape Amazon
async function scrapeAmazon(productName) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the Amazon search results page
  await page.goto(
    `https://www.amazon.in/s?k=${encodeURIComponent(productName)}`
  );

  // Wait for the search results to load
  await page.waitForSelector(".sg-col-inner");

  // Extract the product information
  const productElements = await page.$$(".sg-col-inner");

  const amazonResults = await Promise.all(
    productElements.map(async (el) => {
      const nameElement = await el.$(
        ".a-size-medium.a-color-base.a-text-normal"
      );
      const name = nameElement
        ? await page.evaluate((element) => element.textContent, nameElement)
        : "";

      const priceElement = await el.$(".a-price-whole");
      const price = priceElement
        ? await page.evaluate(
            (element) =>
              parseInt(element.textContent.replace(/[^0-9]/g, ""), 10),
            priceElement
          )
        : 0;

      //const reviewsElement = await el.$('.a-size-base.s-underline-text');
      const reviewsElement = await el.$(".a-icon-alt");
      const reviews = reviewsElement
        ? await page.evaluate((element) => element.textContent, reviewsElement)
        : "";

      const linkElement = await el.$(".a-link-normal.a-text-normal");
      const link = linkElement
        ? await page.evaluate((element) => element.href, linkElement)
        : "";

      const imageElement = await el.$(".s-image");
      const image = imageElement
        ? await page.evaluate((element) => element.src, imageElement)
        : "";

      // Check if the product name contains the provided search keyword (case-insensitive)
      const keyword = new RegExp(productName, "i");
      if (keyword.test(name)) {
        return { name, price, reviews, link, image };
      }

      return null; // Return null for non-matching results
    })
  );

  await browser.close();

  // Filter out null results (non-matching)
  const filteredData = amazonResults
    .filter((result) => result !== null) // Filter out null results
    .filter((result, index, self) => {
      const isDuplicate =
        self.findIndex((r) => r.name === result.name) !== index;
      return !isDuplicate;
    });
    console.log(filteredData)
  return filteredData;
}

// Scrape Flipkart
async function scrapeFlipkart(productName) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.flipkart.com/search?q=${encodeURIComponent(productName)}`);
    // Wait for the search results to load
    await page.waitForSelector('._1AtVbE.col-12-12');
  
    // Extract phone names, prices, reviews, and product links
    const productData = await page.$$eval('._1AtVbE.col-12-12', (elements) => {
      return elements.map((el) => {
        const nameElement = el.querySelector('._4rR01T');
        const name = nameElement ? nameElement.textContent : '';
        const priceElement = el.querySelector('._30jeq3._1_WHN1');
        const price = priceElement ? parseFloat(priceElement.textContent.replace(/[^\d.]/g, '')) : 0;
        const reviewsElement = el.querySelector('._3LWZlK');
        const reviews = reviewsElement ? reviewsElement.textContent : '';
        const linkElement = el.querySelector('._1fQZEK');
        const link = linkElement ? linkElement.href : '';
        const imageElement = el.querySelector('._396cs4');
        const image = imageElement ? imageElement.src : '';
  
        // Filter out results with empty fields or null values
        if (name && price && reviews && link && image) {
          return { name, price, reviews, link, image };
        }
        return null;
      });
    });
  
    await browser.close();
    // Filter and display the scraped data
    const filteredData = productData
      .filter((result) => result !== null) // Filter out null results
      .filter((result, index, self) => {
        const isDuplicate = self.findIndex((r) => r.name === result.name) !== index;
        return !isDuplicate;
      });

      console.log(filteredData)

      return filteredData;
  
  }

exports.search_electronics = async (req, res) => {
    try {
      // Validate request
      if (!req.body) {
        return res.status(400).send({ message: "Content can not be empty" });
      }
  
      const { productName } = req.body;
  
      // Check if the productName is provided
      if (!productName) {
        return res.status(400).send({ message: "Product name is required" });
      }
  
      // Scrape Amazon and Flipkart
      const amazonResults = await scrapeAmazon(productName);
      const flipkartResults = await scrapeFlipkart(productName);

      // Merge and sort the results by price
      const results = [...amazonResults, ...flipkartResults].sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  
      // Store the results in the database
      //await electronics.insertMany(results);
      res.status(200).json(results);
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    }
  };


// exports.search_electronics = async (req, res) => {
//   try {
//     const { productName } = req.body;

//     if (!productName) {
//       return res.status(400).send({ message: 'Product name is required' });
//     }

//     // Check if documents exist for the given search term
//     //const existingDocuments = await electronics.find({ name: productName });

//     // if (existingDocuments.length > 0) {
//     //   return res.status(200).json(existingDocuments);
//     // }

//     // Perform web scraping if no existing documents
//     const amazonResults = await scrapeAmazon(productName);
//     const flipkartResults = await scrapeFlipkart(productName);

//     const results = [...amazonResults, ...flipkartResults].sort(
//       (a, b) => parseFloat(a.price) - parseFloat(b.price)
//     );

//     // Store the results in the collection
//     // await electronics.insertMany(results);

//     // res.status(200).send(results);
//     const { collectionName, dynamicCollection } = createDynamicCollection(productName);

//     // Store the results in the dynamic collection
//     await dynamicCollection.insertMany(results);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// };