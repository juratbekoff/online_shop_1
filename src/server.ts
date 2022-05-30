import productService from './service/product.service'


//import
import express from 'express';
import path from 'path';

//Express 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}));




async function main() {
  await productService.findByCategory(2)
}

main()


//Route registration
app.get('/', (req,res) => {
res.send('hi')
})




app.listen(3000, () => {
    console.log('Server is running ...');
})








