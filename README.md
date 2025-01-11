# Test Shop

## Requirements

write date: 2025-01-02

### Permit all

- Item: id, name, imgUrl, short content, long content, price
- Home - List view, paging, querying?
  - Item View - image Thumbnail, title, short content, price, amount + add to cart
- view details - image, title, short content, long content, amount + add to cart + expected price
- view cart - not on DB, just store in session/store?

### Role Users

- Purchase Cart Mock
  - write purchase log
  - empty cart
- CRUD review

### Role Merchant

- CRUD Item
- Purchase log

### Role Manager

- I the developer only

## Database

- User
  - idx, username, password, email, regDate, role
- Item
  - idx, name, imgUrl, shortDesc, longDesc nullable, price int, regDate date, stock int, provider -> user
- Purchase
  - idx, purchaseDate, buyer -> user, amount, canceled
- PurchaseItem
  - purchaseId -> purchase, itemId -> item, quantity
- Reply
  - idx, userIdx -> user, itemIdx -> item, content, star, regDate

## Project structure

### App Routing

- root
- /[id]
- /[id]/update
- /register-item
- /signup
- /login
- /cart

### Api Routing

- api/login
- api/signup
- api/add-to-cart
- api/purchase
- api/item - GET, POST
- api/item/[id] - GET, PUT, DELETE
- api/item/[id]/reply - GET, POST
- api/item/[id]/reply/[replyId] - GET, PUT, DELETE

### Project Hierarchy

Client Component - Server API/Router - DB Server - MySQL

### Reference