const mongoose = require("mongoose");

var electronics_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  reviews: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
// const createDynamicCollection = (searchTerm) => {
//   const collectionName = searchTerm.toLowerCase().replace(/[^a-zA-Z0-9]/g, "_");
//   const dynamicCollection = mongoose.model(collectionName, electronicsSchema);
//   return { collectionName, dynamicCollection };
// };

// module.exports = createDynamicCollection;
//creating collection
const electronics = mongoose.model('electronics', electronics_schema); //(<collectionname>, <collectionshema>)

module.exports = electronics;
