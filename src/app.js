let express = require('express');

const mongo = require('../shared/mongo');

let cors = require('cors');

const orderRouters = require('../routes/order.routes');

let app = express();
let port = 3001;

(async () => {

    try{
        await mongo.connect();

        app.use(cors());
        app.use(express.json());

        app.use((req,res,next) => {
            console.log("Middleware Api called!!!!!!");
            //res.send("Order Management Api")
            next();
        })

        app.use('/orders', orderRouters);


        app.listen(process.env.PORT || port);

    }catch(err){
        console.log(err);
    }
    


})();






