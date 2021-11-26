const {getOrder, createOrder,getTotalOrder, deleteOrder , updateOrder}  = require("../services/order.services");

const route = require('express').Router();

route.get("/",getOrder);

route.post("/",createOrder);

route.get("/totalorder",getTotalOrder);

route.delete("/:id" , deleteOrder);

route.put("/:id" , updateOrder);



module.exports = route;