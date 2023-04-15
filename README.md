# Ecommerce-API

How to setup 
Repo link https://github.com/karthikeyan1011k/Ecommerce-API

Install project with npm

  cd EcommerceAPI_CN
  npm install
  npm install nodemon
  
  
Start APP
npm start

Routes and their responses
method GET
API to list products

http://localhost:8080/product
method DELETE
API to delete products

http://localhost:8080/product/:id
method POST
API to add products to the database

http://localhost:8080/product/create
method POST
API to update quantity of a product (can be incremented or decremented)

http://localhost:8080/product/:id/update_quantity/?number=[number of qty]
