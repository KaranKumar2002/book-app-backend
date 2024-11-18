const express = require('express')
const app = express();
const cors=require("cors");
const mongoose = require('mongoose');

// 79shsJtcihF303tS

const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173','https://book-app-frontend-dlzz5g6sm-karan-kumars-projects-9e8984c2.vercel.app'],
  credentials: true
}))

const bookRoutes= require('./src/books/book.route')
const orderRoutes=require('./src/orders/order.route')
const userRoutes= require('./src/users/user.route')
const adminRoutes= require('./src/stats/admin.stats')
app.use("/api/books",bookRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api/auth", userRoutes)
app.use("/api/admin", adminRoutes)


async function main() {
    await mongoose.connect(process.env.DB_URL);
    app.use('/',(req,res)=>{
        res.send("Welcome Homecomming");
    })
  }
  main().then(()=> console.log("Hi")).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })