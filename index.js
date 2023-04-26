const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const productData = [
    {
        id: '1',
        product_name: 'product_1',
        product_image: '/images/product_1.webp'
    },
    {
        id: '2',
        product_name: 'product_2',
        product_image: '/images/product_2.webp'
    },
    {
        id: '3',
        product_name: 'product_3',
        product_image: '/images/product_3.webp'
    },
]
app.get('/api/products', (req, res, next) => {
    try {
        res.status(200).json(productData)
    } catch (error) {
        res.status(404).json(error)
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App is running on port ${port}`))