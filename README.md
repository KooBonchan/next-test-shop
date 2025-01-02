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
  - idx, title, imgUrl, shortDesc, longDesc nullable, price int, regDate date, stock int, provider -> user
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

---

### NEXT scaffold README

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
