const express = require("express");
const puppeteer = require("puppeteer");
const mongoose = require("mongoose");

var electronics = require("../models/model_electonics");
var userdb = require("../models/model_user");
// var trackdb = require('../model/model_track')
// var homedb = require('../model/model_home')
// var teamdb = require('../model/model_team')
// var leaderdb = require('../model/model_leaderboard')
// var uvtrackdb = require('../model/model_uvtrack')
// var admindb = require('../model/model_admin')
//const axios = require("axios");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Initialize Express app
// const app = express();
// app.use(express.json());

// Scrape Amazon

// async function scrapeAmazon(productName) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Navigate to the Amazon search results page
//   await page.goto(
//     `https://www.amazon.in/s?k=${encodeURIComponent(productName)}`
//   );

//   // Wait for the search results to load
//   await page.waitForSelector(".sg-col-inner");

//   // Extract the product information
//   const productElements = await page.$$(".sg-col-inner");

//   const amazonResults = await Promise.all(
//     productElements.map(async (el) => {
//       const nameElement = await el.$(
//         ".a-size-medium.a-color-base.a-text-normal"
//       );
//       const name = nameElement
//         ? await page.evaluate((element) => element.textContent, nameElement)
//         : "";

//       const priceElement = await el.$(".a-price-whole");
//       const price = priceElement
//         ? await page.evaluate(
//             (element) =>
//               parseInt(element.textContent.replace(/[^0-9]/g, ""), 10),
//             priceElement
//           )
//         : 0;

//       //const reviewsElement = await el.$('.a-size-base.s-underline-text');
//       const reviewsElement = await el.$(".a-icon-alt");
//       const reviews = reviewsElement
//         ? await page.evaluate((element) => element.textContent, reviewsElement)
//         : "";

//       const linkElement = await el.$(".a-link-normal.a-text-normal");
//       const link = linkElement
//         ? await page.evaluate((element) => element.href, linkElement)
//         : "";

//       const imageElement = await el.$(".s-image");
//       const image = imageElement
//         ? await page.evaluate((element) => element.src, imageElement)
//         : "";

//       // Check if the product name contains the provided search keyword (case-insensitive)
//       const keyword = new RegExp(productName, "i");
//       if (keyword.test(name)) {
//         return { name, price, reviews, link, image };
//       }

//       return null; // Return null for non-matching results
//     })
//   );

//   await browser.close();

//   // Filter out null results (non-matching)
//   const filteredData = amazonResults
//     .filter((result) => result !== null) // Filter out null results
//     .filter((result, index, self) => {
//       const isDuplicate =
//         self.findIndex((r) => r.name === result.name) !== index;
//       return !isDuplicate;
//     });
//     console.log(filteredData)
//   return filteredData;
// }

// Scrape Flipkart
// async function scrapeFlipkart(productName) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(`https://www.flipkart.com/search?q=${encodeURIComponent(productName)}`);
//     // Wait for the search results to load
//     await page.waitForSelector('._1AtVbE.col-12-12');

//     // Extract phone names, prices, reviews, and product links
//     const productData = await page.$$eval('._1AtVbE.col-12-12', (elements) => {
//       return elements.map((el) => {
//         const nameElement = el.querySelector('._4rR01T');
//         const name = nameElement ? nameElement.textContent : '';
//         const priceElement = el.querySelector('._30jeq3._1_WHN1');
//         const price = priceElement ? parseFloat(priceElement.textContent.replace(/[^\d.]/g, '')) : 0;
//         const reviewsElement = el.querySelector('._3LWZlK');
//         const reviews = reviewsElement ? reviewsElement.textContent : '';
//         const linkElement = el.querySelector('._1fQZEK');
//         const link = linkElement ? linkElement.href : '';
//         const imageElement = el.querySelector('._396cs4');
//         const image = imageElement ? imageElement.src : '';

//         // Filter out results with empty fields or null values
//         if (name && price && reviews && link && image) {
//           return { name, price, reviews, link, image };
//         }
//         return null;
//       });
//     });

//     await browser.close();
//     // Filter and display the scraped data
//     const filteredData = productData
//       .filter((result) => result !== null) // Filter out null results
//       .filter((result, index, self) => {
//         const isDuplicate = self.findIndex((r) => r.name === result.name) !== index;
//         return !isDuplicate;
//       });

//       console.log(filteredData)

//       return filteredData;

//   }

// async function scrapeAmazon(productName, category) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   console.log(productName);
//   // Navigate to the Amazon search results page
//   await page.goto(
//     `https://www.amazon.in/s?k=${encodeURIComponent(productName)}`
//   );

//   // Wait for the search results to load
//   await page.waitForSelector(".sg-col-inner");

//   const productElements = await page.$$(".sg-col-inner");

//   // Define category-specific CSS selectors
//   const categorySelectors = {
//     electronics: {
//       name: ".a-size-medium.a-color-base.a-text-normal",
//     },
//     fashion: {
//       company: ".a-size-base-plus.a-color-base",
//       tshirtName: ".a-size-base-plus.a-color-base.a-text-normal",
//     },
//   };

//   const selectors = categorySelectors[category];

//   // Extract the product information
//   const amazonResults = await Promise.all(
//     productElements.map(async (el) => {
//       let nameElement;
//       let name = "";

//       if (category === "electronics") {
//         nameElement = await el.$(selectors.name);
//         name = nameElement
//           ? await page.evaluate((element) => element.textContent, nameElement)
//           : "";
//       } else if (category === "fashion") {
//         const companyElement = await el.$(selectors.company);
//         const tshirtNameElement = await el.$(selectors.tshirtName);

//         const company = companyElement
//           ? await page.evaluate((element) => element.textContent, companyElement)
//           : "";
//         const tshirtName = tshirtNameElement
//           ? await page.evaluate((element) => element.textContent, tshirtNameElement)
//           : "";

//         name = `${company} ${tshirtName}`;
//       }

//       const priceElement = await el.$(".a-price-whole");
//       const price = priceElement
//         ? await page.evaluate(
//             (element) =>
//               parseInt(element.textContent.replace(/[^0-9]/g, ""), 10),
//             priceElement
//           )
//         : 0;

//       const linkElement = await el.$(".a-link-normal.a-text-normal");
//       const link = linkElement
//         ? await page.evaluate((element) => element.href, linkElement)
//         : "";

//       const imageElement = await el.$(".s-image");
//       const image = imageElement
//         ? await page.evaluate((element) => element.src, imageElement)
//         : "";

//       const reviewsElement = await el.$(".a-icon-alt");
//       const reviews = reviewsElement
//         ? await page.evaluate((element) => element.textContent, reviewsElement)
//         : "";

//       // Check if the product name contains the provided search keyword (case-insensitive)
//       const keyword = new RegExp(productName, "i");
//       if (keyword.test(name) && isWordUnique(name)) {
//         return { name, price, link, image, reviews };
//       }

//       return null; // Return null for non-matching results
//     })
//   );

//   await browser.close();

//   // Filter out null results (non-matching)
//   const filteredData = amazonResults
//     .filter((result) => result !== null) // Filter out null results
//     .filter((result, index, self) => {
//       const isDuplicate =
//         self.findIndex((r) => r.name === result.name) !== index;
//       return !isDuplicate;
//     });

//   console.log(filteredData);
//   return filteredData;
// }

function isWordUnique(str) {
  if (str.length == 0) return false;
  const words = str.toLowerCase().split(/\W+/); // Split the string into an array of words
  const wordCount = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // If the word is already present in the wordCount object, it is repeated
    if (wordCount[word]) {
      return false; // Word is not unique
    }

    // Increment the count for the word
    wordCount[word] = 1;
  }

  return true; // All words are unique
}

async function scrapeAmazon(productName, category) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the Amazon search results page
  await page.goto(
    `https://www.amazon.in/s?k=${encodeURIComponent(productName)}`
  );
  //console.log(productName)
  // Wait for the search results to load
  await page.waitForSelector(".sg-col-inner");

  const productElements = await page.$$(".sg-col-inner");

  // Define category-specific CSS selectors
  const categorySelectors = {
    electronics: {
      name: ".a-size-medium.a-color-base.a-text-normal",
    },
    fashion: {
      company: ".a-size-base-plus.a-color-base",
      tshirtName: ".a-size-base-plus.a-color-base.a-text-normal",
    },
  };

  const selectors = categorySelectors[category];

  // Extract the product information
  const amazonResults = await Promise.all(
    productElements.map(async (el) => {
      let nameElement;
      let name = "";

      if (category === "electronics") {
        nameElement = await el.$(selectors.name);
        name = nameElement
          ? await page.evaluate((element) => element.textContent, nameElement)
          : "";
      } else if (category === "fashion") {
        const companyElement = await el.$(selectors.company);
        const tshirtNameElement = await el.$(selectors.tshirtName);

        const company = companyElement
          ? await page.evaluate(
              (element) => element.textContent,
              companyElement
            )
          : "";
        const tshirtName = tshirtNameElement
          ? await page.evaluate(
              (element) => element.textContent,
              tshirtNameElement
            )
          : "";

        name = `${company} ${tshirtName}`;
      }

      const priceElement = await el.$(".a-price-whole");
      const price = priceElement
        ? await page.evaluate(
            (element) =>
              parseInt(element.textContent.replace(/[^0-9]/g, ""), 10),
            priceElement
          )
        : 0;

      const linkElement = await el.$(".a-link-normal.a-text-normal");
      const link = linkElement
        ? await page.evaluate((element) => element.href, linkElement)
        : "";

      const imageElement = await el.$(".s-image");
      const image = imageElement
        ? await page.evaluate((element) => element.src, imageElement)
        : "";

      const reviewsElement = await el.$(".a-icon-alt");
      const reviews = reviewsElement
        ? await page.evaluate((element) => element.textContent, reviewsElement)
        : "";
      //console.log(name)
      // Check if the product name contains the provided search keyword (case-insensitive)
      const keyword = new RegExp(productName, "i");
      if (isWordUnique(name) && price!==0 && name && price && link && image && reviews) {
        return { name, price, link, image, reviews };
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

  console.log(filteredData);
  return filteredData;
}

// async function scrapeFlipkart(productName, category) {
//   const n = productName;
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(
//     `https://www.flipkart.com/search?q=${encodeURIComponent(productName)}`
//   );
//   // Wait for the search results to load
//   //console.log("vyom");
//   await page.waitForSelector("._1AtVbE.col-12-12");
//   // Define category-specific CSS selectors
//   const categorySelectors = {
//     electronics: {
//       name: "._4rR01T",
//       price: "._30jeq3._1_WHN1",
//       reviews: "._3LWZlK",
//       link: "._1fQZEK",
//       image: "._396cs4",
//     },
//     fashion: {
//       brand: "._2WkVRV",
//       product: ".IRpwTa",
//       price: "._30jeq3",
//       reviews: "._3LWZlK._3uSWvT",
//       link: "._2UzuFa",
//       image: "._2r_T1I",
//     },
//   };

//   const selectors = categorySelectors[category];
//   //console.log(category,productName);
//   // Extract product names, prices, reviews, and links
//   const productData = await page.$$eval(
//     "._1AtVbE.col-12-12",
//     (elements, selectors, category) => {
//       return elements.map((el) => {
//         // const nameElement = el.querySelector(selectors.name);
//         // const name = nameElement ? nameElement.textContent : '';
//         let name = "";
//         // console.log(selectors.brand)
//         if (category === "fashion") {
//           const brandElement = el.querySelector(selectors.brand);
//           const productElement = el.querySelector(selectors.product);
//           const brand = brandElement ? brandElement.textContent : "";
//           const product = productElement ? productElement.textContent : "";
//           name = `${brand} ${product}`;
//         } else {
//           const nameElement = el.querySelector(selectors.name);
//           name = nameElement ? nameElement.textContent : "";
//         }

//         const priceElement = el.querySelector(selectors.price);
//         const price = priceElement
//           ? parseFloat(priceElement.textContent.replace(/[^\d.]/g, ""))
//           : 0;
//         // const reviewsElement = el.querySelector(selectors.reviews);
//         // const reviews = reviewsElement ? reviewsElement.textContent : '';
//         const linkElement = el.querySelector(selectors.link);
//         const link = linkElement ? linkElement.href : "";
//         const imageElement = el.querySelector(selectors.image);
//         const image = imageElement ? imageElement.src : "";

//         // Filter out results with empty fields or null values
//         if (name && price && link && image ) {
//           return { name, price, link, image };
//         }
//         return null;
//       });
//     },
//     selectors,
//     category
//   );

//   // Extract product names, prices, reviews, and links

//   // Scrape reviews from the product details page
//   const productReviews = [];
//   for (const product of productData) {
//     if (product) {
//       //console.log("vyom");
//       const productPage = await browser.newPage();
//       await productPage.goto(product.link);
//       await productPage.waitForSelector("._1AtVbE.col-12-12");

//       const reviewElements = await productPage.$$(selectors.reviews);
//       const reviews = [];
//       for (const reviewEl of reviewElements) {
//         const reviewText = await productPage.evaluate(
//           (element) => element.textContent,
//           reviewEl
//         );
//         reviews.push(reviewText);
//       }

//       if (reviews && reviews.length > 0) {
//         product.reviews = reviews[0];
//         productReviews.push(product);
//       }

//       await productPage.close();
//     }
//     //return productReviews;
//   }

//   // const productReviews = [];
//   // for (const product of productData) {
//   //   if (product) {
//   //     const productPage = await browser.newPage();
//   //     await productPage.goto(product.link);
//   //     await productPage.waitForSelector('._1AtVbE.col-12-12');

//   //     const reviewElements = await productPage.$$(selectors.reviews);
//   //     let firstReview = null;
//   //     for (const reviewEl of reviewElements) {
//   //       const reviewText = await productPage.evaluate(element => element.textContent.trim(), reviewEl);
//   //       const rating = parseFloat(reviewText.match(/[\d.]+/)); // Extract the first number from the review text
//   //       if (!isNaN(rating)) {
//   //         firstReview = rating;
//   //         break;
//   //       }
//   //     }

//   //     product.reviews = firstReview !== null ? firstReview.toString() : ''; // Assign the first review rating or an empty string
//   //     productReviews.push(product);

//   //     await productPage.close();
//   //   }
//   // }

//   await browser.close();

//   // Filter and display the scraped data
//   const filteredData = productReviews
//     .filter((result) => result.reviews.length > 0) // Filter out products without reviews
//     .filter((result, index, self) => {
//       const isDuplicate =
//         self.findIndex((r) => r.name === result.name) !== index;
//       return !isDuplicate;
//     });

//   console.log(filteredData);

//   return filteredData;
// }

async function scrapeFlipkart(productName, category) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    `https://www.flipkart.com/search?q=${encodeURIComponent(productName)}`
  );
  // Wait for the search results to load
  await page.waitForSelector("._1AtVbE.col-12-12");

  // Define category-specific CSS selectors
  const categorySelectors = {
    electronics: {
      container: "._1AtVbE.col-12-12",
      name: "._4rR01T",
      price: "._30jeq3._1_WHN1",
      link: "._1fQZEK",
      image: "._396cs4",
    },
    fashion: {
      container: "._1AtVbE.col-12-12",
      brand: "._2WkVRV",
      product: ".IRpwTa",
      price: "._30jeq3",
      link: "._2UzuFa",
      image: "._2r_T1I",
    },
  };

  const selectors = categorySelectors[category];

  // Extract product names, prices, reviews, and links
  const productData = await page.evaluate((selectors, productName) => {
    const elements = Array.from(document.querySelectorAll(selectors.container));

    return elements.map((el) => {
      let name = "";
      if (selectors.brand) {
        const brandElement = el.querySelector(selectors.brand);
        const productElement = el.querySelector(selectors.product);
        const brand = brandElement ? brandElement.textContent : "";
        const product = productElement ? productElement.textContent : "";
        name = `${brand} ${product}`;
      } else {
        const nameElement = el.querySelector(selectors.name);
        name = nameElement ? nameElement.textContent : "";
      }

      const priceElement = el.querySelector(selectors.price);
      const price = priceElement
        ? parseFloat(priceElement.textContent.replace(/[^\d.]/g, ""))
        : 0;

      const linkElement = el.querySelector(selectors.link);
      const link = linkElement ? linkElement.href : "";
      const imageElement = el.querySelector(selectors.image);
      const image = imageElement ? imageElement.src : "";

      // const queryWords = productName.toLowerCase().split(" ");
      // const nameWords = name.toLowerCase().split(" ");

      // const matches = queryWords.every((word) => nameWords.includes(word));
      if (name && price && link && image) {
        return { name, price, link, image };
      }
      return null;
    });
  }, selectors, productName);

  // Scrape reviews from the product details page
  // const productReviews = [];
  // for (const product of productData) {
  //   if (product) {
  //     const productPage = await browser.newPage();
  //     await productPage.goto(product.link);
  //     await productPage.waitForSelector("._1AtVbE.col-12-12");

  //     const reviewElements = await productPage.$$(selectors.reviews);
  //     const reviews = [];
  //     for (const reviewEl of reviewElements) {
  //       const reviewText = await productPage.evaluate(
  //         (element) => element.textContent,
  //         reviewEl
  //       );
  //       reviews.push(reviewText);
  //     }

  //     if (reviews && reviews.length > 0) {
  //       product.reviews = reviews[0];
  //       productReviews.push(product);
  //     }

  //     await productPage.close();
  //   }
  // }

  await browser.close();

  // Filter and display the scraped data
  const filteredData = productData
    .filter((result) => result!==null) // Filter out products without reviews
    .filter((result, index, self) => {
      const isDuplicate =
        self.findIndex((r) => r.name === result.name) !== index;
      return !isDuplicate;
    });

  console.log(filteredData);

  return filteredData;
}


exports.search_electronics = async (req, res) => {
  try {
    // Validate request
    if (!req.body) {
      return res.status(400).send({ message: "Content can not be empty" });
    }

    const { productName, category } = req.body;
    //console.log(productName);
    //console.log("shivam");
    // Check if the productName is provided
    if (!productName || !category) {
      //console.log("vyom");
      return res.status(400).send({ message: "Product name is required" });
    }

    const isWhitespace = /^\s*$/.test(productName);
    if (isWhitespace) {
      return res.status(400).send({ message: "Product name is required" });
    }
    //console.log("kansagara");
    // Scrape Amazon and Flipkart
    const amazonResults = await scrapeAmazon(productName, category);
    const flipkartResults = await scrapeFlipkart(productName, category);

    // Merge and sort the results by price
    const results = [...amazonResults, ...flipkartResults].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );

    // Store the results in the database
    //await electronics.insertMany(results);
    if (results.length === 0) {
      return res.status(200).send({ message: "Not found" });
    }
    res.status(200).json(results);
  } catch (error) {
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

exports.register = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: "Content cannot be empty" });
    }
    const { username, password, email } = req.body;

    const exist_user = await userdb.findOne({ username: username });
    if (exist_user) {
      return res.status(400).send({ message: "Username already exist" });
    }

    const exist_email = await userdb.findOne({ email: email });
    if (exist_email) {
      return res.status(400).send({ message: "Email already exist" });
    }

    const user = new userdb(req.body);
    await user.save(user).then(async (data) => {
      res.status(200).send(data);
    });
  } catch (error) {
    return res.status(500).send({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: "Content can not be empty" });
    }

    const { username, password } = req.body;

    // check if user exists
    const user = await userdb.findOne({ username: username });

    // console.log(username_,password_)
    if (!user) return res.status(400).send({ message: "User not found" });

    // check if password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).send({ message: "Invalid Password" });

    // create and assign a token
    let tokenData = {
      username: user.username,
    };

    const token = await jwt.sign(tokenData, "secret", { expiresIn: "1h" });
    //console.log("token created");

    res.status(200).json({
      status: true,
      success: "SendData",
      token: token,
    });
  } catch (err) {
    return res.status(500).send({ message: "error" });
  }
};
