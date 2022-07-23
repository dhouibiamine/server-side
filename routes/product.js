const express = require('express');

const router = express.Router();
const Product= require('../models/product');

router.post('/createproduct', (req ,res)=>{
    data = req.body;
    prod = new Product(data);
    prod.save()

    .then(
        (savedProd)=>{
            res.status(200).send(savedProd)
        }
    )

    .catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
    

});
router.get('/allproduct',(req,res)=>{
    Product.find()
    .then(
        (products)=>{
            res.status(200).send(products)
        }


    )
    .catch(
        (err)=>{
            res.status(400).send(err)

        }

    )

});
router.delete('/delprod/:id', (req,res)=>{
    id= req.params.id
    Product.findOneAndDelete({ _id:id })
    .then(
        (deletedProd)=>{
            res.status(200).send(deletedProd)

    })
    .catch(
        (err)=>{
            res.status(400).send(err)  

        }
    )
});
router.put('/uptprod/:id',(req,res)=>{
    id=req.params.id;
    newData=req.body;
    Product.findByIdAndUpdate ({_id:id}, newData)
    .then(
        (updated)=>{
            res.status(200).send(updated)

        }
    )
    .catch(
        (err)=>{
            res.status(400).send(err)

        }
    )

    
});


module.exports=router ;