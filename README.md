# S.K. Games

# Steps

3. Create React App
4. Create Git Repository
5. List Products
   1. create products array
   2. add product images
   3. render products
   4. style products
6. Add page routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen
7. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
8. Fetch Products From Backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
9. Manage State by Reducer Hook
   1. define reducer
   2. update fetch data
   3. get state from useReducer
10. Add bootstrap UI framework
    1. npm install react-bootstrap bootstrap
    2. update App.js
11. Create product and rating component
    1. create rating component
    2. create product component
    3. use rating component in product component
12. Create product Details Page
    1. fetch product from backend
    2. create 3 colums for image, info and action
13. Create loading and message component
    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define getError function
14. Implement add to cart
    1. create react context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler
15. Complete add to cart function
    1. check exist item in the cart
    2. check count in stock in backend
16. Create cart page
    1. display item list
    2. create action columns
17. Complete cart page
    1. click handler for add/delete item
    2. click handler for remove item
    3. click handler for checkout
18. Create sign in page
    1. create sign in form
    2. add email and password
    3. add sign in button
19. Connect to MongoDB database
    1. create atlas mongodb database (cloud)
    2. install local mongodb database
    3. npm install mongoose
    4. connect to mongodb database
20. Create the sample data
    1. create product model
    2. create user model
    3. create seed route
    4. use route in server.js
    5. seed sample product
21. Seed sample users
    1. create user model
    2. seed sample users
    3. create user routes
22. Create signin backend api
    1. create signin api
    2. npm install jsonwebtoken
    3. define generateToken
23. Complete signin page
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
24. Create Shipping Screen
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar
