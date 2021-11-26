
const mongo = require('../shared/mongo');

const {ObjectId} = require("mongodb");

const service = {

    async getOrder(req,res){
        console.log("Get Order Method Called");
        const data = await mongo.db.collection("orders").find().toArray();
        console.log(data);
        res.send(data);
    },

    async getTotalOrder(req,res){
        console.log("Get total Order Method Called");
        const data = await mongo.db.collection("orders").count();
        const pendOrder = await mongo.db.collection("orders").find({'status': {$ne: "Accepted"}}).count();
        console.log(data,pendOrder);
        res.send([{"totalOrders" : data , "pendingOrders" : pendOrder}]);
    },

    async createOrder(req,res){

        try{
        console.log("Create Order Method Called");
        console.log(req.body);
        const data = await mongo.db.collection("orders").insertOne(req.body);
        console.log(data);
        //res.send({...req.body , _id: data.insertedId});
        }
        catch(err){
            console.log("Error create Order Mentod" , err);
            res.sendStatus(500);
        }
    },

    async deleteOrder(req,res){
        try{
            console.log("Delete Order Method Called");
            console.log(req.params);
            await mongo.db.collection("orders").deleteOne({_id: ObjectId(req.params.id)})
        }
        catch(err){
            console.log("Error Delete Order Method", err);
            res.sendStatus(500);
        }
    },

    async updateOrder(req,res){
        try{
            console.log("Update Order method Called");
            console.log(req.params);
            console.log(req.body);
            const data = await mongo.db.collection("orders")
                         .findOneAndUpdate({ _id: ObjectId(req.params.id)} , {$set: {...req.body}});
            //res.send({...req.body , _id: data.insertedId});
            res.send(data);
            }catch(err){
                console.log("Error Updating -" , err);
                res.sendStatus(500);
            }
        }

}


module.exports = service;