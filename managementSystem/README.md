# This is management system application for management products and user information. 
## Customers can add products to the cart and the total price can change consistently.
## Manager(Admin) can list products and remove products, also remove users.
## I created three folds. One for server, which connects MongoDB, another two are Client and Admin, Admin is similar to client but different functiona.
## How to deploy?
1. Download zip to local
2.  Go to server fold
- npm install
- create .env
-  PORT = 5000
    NODE_ENV = development
    JWT_SECRET = 123456
    MONGO_URL = 
- Create databse from MongoDB
- Run local Postman to Post products and users
- Can check products and users from mangodbb database collections
- npm run server
3. Go to client fold
- npm install
- npm start
4. Go to admin fold
- npm install
- npm start




