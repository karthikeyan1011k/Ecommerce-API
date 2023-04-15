
# Ecommerce API
Its an Ecommerce API to manage product inventory

## i=i =I deploy my Ecoomerce API in render and that link is https://ecommerce-api-cn.onrender.com/products/







## How to setup

Repo link https://github.com/karthikeyan1011k/Ecommerce-API


> ***Install project with npm***       

```bash
  cd Ecommerce-API
  npm install
  npm install nodemon

```

***Start APP***

```bash 
npm start
```

## Routes and their responses


### method GET
API to list products
- http://localhost:6509/product

### method DELETE 
API to delete products
- http://localhost:6509/product/:id

### method POST
API to add products to the database
- http://localhost:6509/product/create

### method POST
API to update quantity of a product (can be incremented or decremented)
- http://localhost:6509/product/:id/update_quantity/?number=[number of qty]
## ***Tasks Performs***

- Show a list of all product. 
- Add Product
- Remove Product
- Update Product Quantity 





