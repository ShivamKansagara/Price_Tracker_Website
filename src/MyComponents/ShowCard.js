import React from 'react'
import "./Card.css"
import axios from 'axios';
import Searchbar from "./Searchbar"
export default function ShowCard() {
  const products = [
    {
      "name": "Redmi Note 12 (Lunar Black, 6GB RAM, 64GB Storage)",
      "price": 14490,
      "reviews": "",
      "link": "https://www.amazon.in/Redmi-Note-Lunar-Black-Storage/dp/B0C2VH4DPM/ref=sr_1_12?keywords=redmi+note+12&qid=1687802353&sr=8-12",
      "image": "https://m.media-amazon.com/images/I/51Hd6dpPypL._AC_UY218_.jpg"
    },
    {
      "name": "Redmi Note 12 (Sunrise Gold, 6GB RAM, 64GB Storage)",
      "price": 14500,
      "reviews": "",
      "link": "https://www.amazon.in/Redmi-Note-Sunrise-Gold-Storage/dp/B0C1GJYYY1/ref=sr_1_11?keywords=redmi+note+12&qid=1687802353&sr=8-11",
      "image": "https://m.media-amazon.com/images/I/21+sb3igQHL._AC_UY218_.jpg"
    },
    {
      "name": "Redmi Note 12 (Ice Blue, 6GB RAM, 64GB Storage)",
      "price": 14749,
      "reviews": "3.2 out of 5 stars",
      "link": "https://www.amazon.in/Redmi-Note-Blue-64GB-Storage/dp/B0C1GKQ79V/ref=sr_1_8?keywords=redmi+note+12&qid=1687802353&sr=8-8",
      "image": "https://m.media-amazon.com/images/I/51zL-gwGaRL._AC_UY218_.jpg"
    },
    {
      "name": "(Renewed)Redmi Note 12 5G Frosted Green 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Sn",
      "price": 14999,
      "reviews": "5.0 out of 5 stars",
      "link": "https://www.amazon.in/Renewed-Redmi-Frosted-Green-AMOLED/dp/B0BYZ71KRF/ref=sr_1_13?keywords=redmi+note+12&qid=1687802353&sr=8-13",
      "image": "https://m.media-amazon.com/images/I/7127gCOEcJL._AC_UY218_.jpg"
    },
    {
      "name": "(Renewed) Redmi Note 12 5G Matte Black 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Sna",
      "price": 14999,
      "reviews": "2.0 out of 5 stars",
      "link": "https://www.amazon.in/Renewed-Redmi-Matte-Black-AMOLED/dp/B0BZSNY5YW/ref=sr_1_14?keywords=redmi+note+12&qid=1687802353&sr=8-14",
      "image": "https://m.media-amazon.com/images/I/71xHEHgoEjL._AC_UY218_.jpg"
    },
    {
      "name": "REDMI Note 12 (Ice Blue, 64 GB)",
      "price": 14999,
      "reviews": "4.1",
      "link": "https://www.flipkart.com/redmi-note-12-ice-blue-64-gb/p/itmee415766dfc1a?pid=MOBGNYHZYZ4CNTCM&lid=LSTMOBGNYHZYZ4CNTCMLMYGRK&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_1&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGNYHZYZ4CNTCM.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/u/t/5/note-12-mzb0e2kin-redmi-original-imagz62rkfazphz2.jpeg?q=70"
    },
    {
      "name": "REDMI Note 12 (Lunar Black, 64 GB)",
      "price": 14999,
      "reviews": "4.1",
      "link": "https://www.flipkart.com/redmi-note-12-lunar-black-64-gb/p/itm6756d6e7a86be?pid=MOBGNYHZJGGE3ZHM&lid=LSTMOBGNYHZJGGE3ZHMWSTXBO&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_2&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGNYHZJGGE3ZHM.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/v/l/n/note-12-mzb0e2oin-redmi-original-imagz62ukgxzczzv.jpeg?q=70"
    },
    {
      "name": "REDMI Note 12 (Sunrise Gold, 64 GB)",
      "price": 14999,
      "reviews": "4.1",
      "link": "https://www.flipkart.com/redmi-note-12-sunrise-gold-64-gb/p/itm5d170187bcbf0?pid=MOBGNYHZ7ZGHES2V&lid=LSTMOBGNYHZ7ZGHES2VQILAET&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_5&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGNYHZ7ZGHES2V.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/s/2/z/note-12-mzb0e6fin-redmi-original-imagz62gzggajgz4.jpeg?q=70"
    },
    {
      "name": "(Renewed)Redmi Note 12 5G Mystique Blue 6GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Sn",
      "price": 15999,
      "reviews": "",
      "link": "https://www.amazon.in/Renewed-Redmi-Mystique-128GB-AMOLED/dp/B0BYZ7TS1S/ref=sr_1_15?keywords=redmi+note+12&qid=1687802353&sr=8-15",
      "image": "https://m.media-amazon.com/images/I/51Pr29sfvfL._AC_UY218_.jpg"
    },
    {
      "name": "REDMI Note 12 (Ice Blue, 128 GB)",
      "price": 16949,
      "reviews": "4.1",
      "link": "https://www.flipkart.com/redmi-note-12-ice-blue-128-gb/p/itm2da5f94ce4dc4?pid=MOBGNYHZSVSHGUWF&lid=LSTMOBGNYHZSVSHGUWFLNU5RE&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_6&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGNYHZSVSHGUWF.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/u/t/5/note-12-mzb0e2kin-redmi-original-imagz62rkfazphz2.jpeg?q=70"
    },
    {
      "name": "Redmi Note 12 5G Matte Black 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
      "price": 16999,
      "reviews": "3.8 out of 5 stars",
      "link": "https://www.amazon.in/Redmi-AMOLED-Snapdragon%C2%AE-Triple-Camera/dp/B0BQ3MMPX6/ref=sr_1_3?keywords=redmi+note+12&qid=1687802353&sr=8-3",
      "image": "https://m.media-amazon.com/images/I/81ZZPvIWnYL._AC_UY218_.jpg"
    },
    {
      "name": "Redmi Note 12 5G Mystique Blue 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
      "price": 16999,
      "reviews": "3.8 out of 5 stars",
      "link": "https://www.amazon.in/Redmi-Mystique-AMOLED-Snapdragon%C2%AE-Triple/dp/B0BQ3PJJDQ/ref=sr_1_5?keywords=redmi+note+12&qid=1687802353&sr=8-5",
      "image": "https://m.media-amazon.com/images/I/81MZRUuHJIL._AC_UY218_.jpg"
    },
    {
      "name": "Redmi Note 12 5G Frosted Green 4GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
      "price": 16999,
      "reviews": "3.8 out of 5 stars",
      "link": "https://www.amazon.in/Redmi-Frosted-AMOLED-Snapdragon%C2%AE-Triple/dp/B0BQ3RC28F/ref=sr_1_10?keywords=redmi+note+12&qid=1687802353&sr=8-10",
      "image": "https://m.media-amazon.com/images/I/81sTK4zipDL._AC_UY218_.jpg"
    },
    {
      "name": "REDMI Note 12 (Lunar Black, 128 GB)",
      "price": 16999,
      "reviews": "4.1",
      "link": "https://www.flipkart.com/redmi-note-12-lunar-black-128-gb/p/itm6ba19bad63915?pid=MOBGNYHZEHBAZQN7&lid=LSTMOBGNYHZEHBAZQN7QY1WDZ&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_3&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGNYHZEHBAZQN7.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/v/l/n/note-12-mzb0e2oin-redmi-original-imagz62ukgxzczzv.jpeg?q=70"
    },
    {
      "name": "REDMI Note 12 (Sunrise Gold, 128 GB)",
      "price": 16999,
      "reviews": "4.1",
      "link": "https://www.flipkart.com/redmi-note-12-sunrise-gold-128-gb/p/itm4e485ddec3bbf?pid=MOBGNYHZ7WRZ2RGT&lid=LSTMOBGNYHZ7WRZ2RGTPK1VQE&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_4&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGNYHZ7WRZ2RGT.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/s/2/z/note-12-mzb0e6fin-redmi-original-imagz62gzggajgz4.jpeg?q=70"
    },
    {
      "name": "Redmi Note 12 5G Mystique Blue 6GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
      "price": 18999,
      "reviews": "3.8 out of 5 stars",
      "link": "https://www.amazon.in/Redmi-Mystique-AMOLED-Snapdragon%C2%AE-Triple/dp/B0BQ3PYMCZ/ref=sr_1_1?keywords=redmi+note+12&qid=1687802353&sr=8-1",
      "image": "https://m.media-amazon.com/images/I/81MZRUuHJIL._AC_UY218_.jpg"
    },
    {
      "name": "Redmi Note 12 5G Matte Black 6GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
      "price": 18999,
      "reviews": "3.8 out of 5 stars",
      "link": "https://www.amazon.in/Redmi-AMOLED-Snapdragon%C2%AE-Triple-Camera/dp/B0BQ3MT8P2/ref=sr_1_4?keywords=redmi+note+12&qid=1687802353&sr=8-4",
      "image": "https://m.media-amazon.com/images/I/81ZZPvIWnYL._AC_UY218_.jpg"
    },
    {
      "name": "Redmi Note 12 5G Frosted Green 6GB RAM 128GB ROM | 1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
      "price": 18999,
      "reviews": "3.8 out of 5 stars",
      "link": "https://www.amazon.in/Redmi-Frosted-AMOLED-Snapdragon%C2%AE-Triple/dp/B0BQ3Q5NDH/ref=sr_1_6?keywords=redmi+note+12&qid=1687802353&sr=8-6",
      "image": "https://m.media-amazon.com/images/I/81sTK4zipDL._AC_UY218_.jpg"
    },
    {
      "name": "REDMI Note 12 5G (Frosted Green, 128 GB)",
      "price": 18999,
      "reviews": "4.2",
      "link": "https://www.flipkart.com/redmi-note-12-5g-frosted-green-128-gb/p/itmf01eca068b2be?pid=MOBGHNFJPXZQED9Q&lid=LSTMOBGHNFJPXZQED9QOM01NJ&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_7&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGHNFJPXZQED9Q.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/r/i/note-12-5g-mzb0ei8in-redmi-original-imagpgr9gpmjjnwa.jpeg?q=70"
    },
    {
      "name": "REDMI Note 12 5G (Matte Black, 128 GB)",
      "price": 18999,
      "reviews": "4.2",
      "link": "https://www.flipkart.com/redmi-note-12-5g-matte-black-128-gb/p/itmce9f4bcbb7fdc?pid=MOBGHNFJYJ5YNYFF&lid=LSTMOBGHNFJYJ5YNYFFJPNMHK&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_8&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGHNFJYJ5YNYFF.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/z/1/q/-original-imaghsd2eqryyjry.jpeg?q=70"
    },
    {
      "name": "REDMI Note 12 5G (Mystique Blue, 128 GB)",
      "price": 18999,
      "reviews": "4.2",
      "link": "https://www.flipkart.com/redmi-note-12-5g-mystique-blue-128-gb/p/itmaea3f0fd78b50?pid=MOBGHNFJAST9V6XR&lid=LSTMOBGHNFJAST9V6XRMOFRBY&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_10&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGHNFJAST9V6XR.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/g/w/note-12-5g-mzb0eiain-redmi-original-imagpgr9ngapjhxq.jpeg?q=70"
    },
    {
      "name": "Redmi Note 12 5G (Frosted Green,8GB RAM, 256GB Storage)",
      "price": 20999,
      "reviews": "3.8 out of 5 stars",
      "link": "https://www.amazon.in/Redmi-Frosted-Green-256GB-Storage/dp/B0BZWGCY2L/ref=sr_1_2?keywords=redmi+note+12&qid=1687802353&sr=8-2",
      "image": "https://m.media-amazon.com/images/I/81sTK4zipDL._AC_UY218_.jpg"
    },
    {
      "name": "Redmi Note 12 5G (Matte Black,8GB RAM, 256GB Storage)",
      "price": 20999,
      "reviews": "3.8 out of 5 stars",
      "link": "https://www.amazon.in/Redmi-Matte-Black-256GB-Storage/dp/B0BZWCJDRB/ref=sr_1_7?keywords=redmi+note+12&qid=1687802353&sr=8-7",
      "image": "https://m.media-amazon.com/images/I/81ZZPvIWnYL._AC_UY218_.jpg"
    },
    {
      "name": "Redmi Note 12 5G (Mystique Blue,8GB RAM, 256GB Storage)",
      "price": 20999,
      "reviews": "3.8 out of 5 stars",
      "link": "https://www.amazon.in/Redmi-Note-Mystique-256GB-Storage/dp/B0BZWBSNJN/ref=sr_1_9?keywords=redmi+note+12&qid=1687802353&sr=8-9",
      "image": "https://m.media-amazon.com/images/I/81MZRUuHJIL._AC_UY218_.jpg"
    },
    {
      "name": "Redmi Note 12 Pro 5G (Onyx Black, 6GB RAM, 128GB Storage)",
      "price": 23149,
      "reviews": "3.9 out of 5 stars",
      "link": "https://www.amazon.in/Redmi-Note-Black-128GB-Storage/dp/B0BS3S3QXP/ref=sr_1_16?keywords=redmi+note+12&qid=1687802353&sr=8-16",
      "image": "https://m.media-amazon.com/images/I/51OHDJAoJsL._AC_UY218_.jpg"
    },
    {
      "name": "REDMI Note 12 Pro 5G (Stardust Purple, 128 GB)",
      "price": 23999,
      "reviews": "4.3",
      "link": "https://www.flipkart.com/redmi-note-12-pro-5g-stardust-purple-128-gb/p/itm26c8ff9d1f226?pid=MOBGH2UVWWDA4MS6&lid=LSTMOBGH2UVWWDA4MS6M7LVCT&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_13&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGH2UVWWDA4MS6.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/r/o/o/-original-imaghkvuzxkcna4n.jpeg?q=70"
    },
    {
      "name": "REDMI Note 12 Pro 5G (Glacier Blue, 128 GB)",
      "price": 23999,
      "reviews": "4.3",
      "link": "https://www.flipkart.com/redmi-note-12-pro-5g-glacier-blue-128-gb/p/itm8fbee21008560?pid=MOBGH2UVZHHQGRRP&lid=LSTMOBGH2UVZHHQGRRPHUPSMM&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_16&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGH2UVZHHQGRRP.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/j/o/-original-imaghkvue4yjecju.jpeg?q=70"
    },
    {
      "name": "REDMI Note 12 Pro 5G (Onyx Black, 128 GB)",
      "price": 23999,
      "reviews": "4.3",
      "link": "https://www.flipkart.com/redmi-note-12-pro-5g-onyx-black-128-gb/p/itmbc9fd7adaa32a?pid=MOBGH2UVMHEPGSHM&lid=LSTMOBGH2UVMHEPGSHMZTFAGO&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_17&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGH2UVMHEPGSHM.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/b/r/f/-original-imaghkvuhzwge3za.jpeg?q=70"
    },
    {
      "name": "REDMI Note 12 Pro 5G (Stardust Purple, 256 GB)",
      "price": 26999,
      "reviews": "4.2",
      "link": "https://www.flipkart.com/redmi-note-12-pro-5g-stardust-purple-256-gb/p/itmb3d6f68dfb5d2?pid=MOBGH2UVFMVF8PHG&lid=LSTMOBGH2UVFMVF8PHGSDDKSJ&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_15&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGH2UVFMVF8PHG.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/r/o/o/-original-imaghkvuzxkcna4n.jpeg?q=70"
    },
    {
      "name": "REDMI Note 12 Pro 5G (Glacier Blue, 256 GB)",
      "price": 26999,
      "reviews": "4.2",
      "link": "https://www.flipkart.com/redmi-note-12-pro-5g-glacier-blue-256-gb/p/itm62978004cf8a8?pid=MOBGH2UVHWEZKFX2&lid=LSTMOBGH2UVHWEZKFX2Y1VWDD&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_20&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGH2UVHWEZKFX2.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/j/o/-original-imaghkvue4yjecju.jpeg?q=70"
    },
    {
      "name": "REDMI Note 12 Pro+ 5G (Obsidian Black, 256 GB)",
      "price": 29999,
      "reviews": "4.3",
      "link": "https://www.flipkart.com/redmi-note-12-pro-5g-obsidian-black-256-gb/p/itm91af760b68910?pid=MOBGH2UVUGR9N5FW&lid=LSTMOBGH2UVUGR9N5FWMEJHWA&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_14&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGH2UVUGR9N5FW.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/z/a/b/-original-imaghkvv2u8jxajh.jpeg?q=70"
    },
    {
      "name": "REDMI Note 12 Pro+ 5G (Iceberg Blue, 256 GB)",
      "price": 29999,
      "reviews": "4.3",
      "link": "https://www.flipkart.com/redmi-note-12-pro-5g-iceberg-blue-256-gb/p/itmc41b2b02af0da?pid=MOBGH2UVGCGZZT2V&lid=LSTMOBGH2UVGCGZZT2VTHFSHD&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_19&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGH2UVGCGZZT2V.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/h/h/z/-original-imaghkvufhjsnw7q.jpeg?q=70"
    },
    {
      "name": "REDMI Note 12 Pro+ 5G (Arctic White, 256 GB)",
      "price": 29999,
      "reviews": "4.3",
      "link": "https://www.flipkart.com/redmi-note-12-pro-5g-arctic-white-256-gb/p/itm715c45001499f?pid=MOBGH2UVGHVFKYFF&lid=LSTMOBGH2UVGHVFKYFFXUZARK&marketplace=FLIPKART&q=redmi+note+12&store=tyy%2F4io&srno=s_1_21&otracker=search&iid=2fe261d9-f05f-4430-8d22-5ba50546ae8b.MOBGH2UVGHVFKYFF.SEARCH&ssid=s7hbssqaxs0000001687802358516&qH=b7132bb2fcf8e40f",
      "image": "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/2/x/-original-imaghkvuqvdctjmx.jpeg?q=70"
    }
  ];
  
  const handleClick = (link) =>{
    window.location.href = link;
  };
  return (
    <>
    <div className="container"><Searchbar></Searchbar></div>
    <div className="container">
  <div className="row">
    {products.map((product) => (
      <div key={product.link} className="card-container">
        <div className='card-image'>
          <img className="card-image" src={product.image} alt="Spinning glass cube" />
          </div>
        <div className="card-content">
          <h2 className='card-title'>
            <a href="#">Equilibrium</a>
          </h2>
          <p className="card-description">{product.name}</p>
          <div className="flex-row">
            <div className="coin-base">
              <img src="https://i.postimg.cc/T1F1K0bW/Ethereum.png" alt="Ethereum" className="small-image" />
              <h2 className='card-price'>{product.price}</h2>
            </div>
            <div className="time-left">
              <img src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png" alt="clock" className="small-image" />
              <p>{product.reviews}</p>
            </div>
          </div>
        </div>
        <div className="card-attribute">
          <img src="https://i.postimg.cc/SQBzNQf1/image-avatar.png" alt="avatar" className="small-avatar" />
          
          <button className='btn btn-danger' onClick={() => handleClick(product.link)}>click me</button>
          <p></p>
        </div>
      </div>
    ))}
  </div>
</div>   
    </>
  )
}