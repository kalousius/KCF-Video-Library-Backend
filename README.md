# KCF-Video-Library

"KCF-Video Library" is an online platform that offers a collection of movies for users to explore and order their favorites. Users can browse a variety of movies, view their descriptions, and make selections. It may include features like user authentication, a catalog of available movies, movie details, and a shopping cart for ordering. The platform is designed to provide an enjoyable movie-watching experience for its users.

# user
-fullname
username
email
password
role

# MovieCatalog
id
title
description
price
genre
rating
release_date
image Url
createdAt
userId
Order

# Movie Details
id          
title       
description 
director    
price      
rating      
imageUrl    
createdAt   
movieId     

# order
id
status
totalprice
quantity
customerId
items
createdAT
user
payment
# payment
id
amountpaid
paymentMethod
orderid
order
transcationId
createdAt
UpdateAt
 # settinf up project in mvc
 -controller
 -routes
 model(prisma)
  ## using prisma
  install prisma
   - npm install prisma --save-dev
   - npx prisma init
   - npx prisma generate
   ##  Use Prisma Client in Your Application Code:
    - const { PrismaClient } = require('@prisma/client');
    - const prisma = new PrismaClient();
    - Use prisma to interact with your database
  npx prisma init
 ## KCF-Video-Library -backend /
  KCF-Video-Library-Backend/
|-- controllers/
|   |-- userController.js
|   |-- movieCatalogController.js
|   |-- movieDetailsController.js
|   |-- orderDetailsController.js
|   |-- paymentDetailsController.js
|-- routes/
|   |-- userRouter.js
|   |-- movieCatalogRouter.js
|   |-- movieDetailsRouter.js
|   |-- orderDetailsRouter.js
|   |-- paymentDetailsRouter.js
|-- views/
|   |-- addMovieForm.html
|-- .env
|-- .gitignore
|-- node_modules/
|-- prisma/
|   |-- schema.prisma
|   |-- seed.js
|-- .git
|-- index.js
|-- package.json
|-- package-lock.json

  

