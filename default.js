import { products } from './constants/data.js'
import productSchema from './model/productSchema.js'

const DefaultData = async () => {
  try {
    await productSchema.insertMany(products);
    console.log('Data is imported successfully');
  } catch (error) {
    console.log('Error while inserting the default data', error.message);
  }
}

export default DefaultData