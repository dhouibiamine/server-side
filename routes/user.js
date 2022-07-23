const express = require('express');
const router = express.Router();
const User= require('../models/user');

router.post('/add', (req , res)=>{
    data = req.body;
    usr = new User(data);
    usr.save()

    .then(
        (savedUser)=>{
            res.status(200).send(savedUser)
        }
    )

    .catch(
        (err)=>{
            res.status(400).send(err)
        }
    )
    

});
router.get('/getall',(req,res)=>{
    User.find()
    .then(
        (users)=>{
            res.send(users)
        }


    )
    .catch(
        (err)=>{
            res.send(err)

        }

    )

});

router.put('/update/:id',(req,res)=>{
    id=req.params.id;
    newData=req.body;
    User.findByIdAndUpdate ({_id:id}, newData)
    .then(
        (updated)=>{
            res.send(updated)

        }
    )
    .catch(
        (err)=>{
            res.send(err)

        }
    )

    
});


router.delete('/delete/:id', (req,res)=>{
    id= req.params.id
    User.findOneAndDelete({ _id:id })
    .then(
        (deletedUser)=>{
            res.send(deletedUser)

    })
    .catch(
        (err)=>{
            res.send(err)

        }
    )
});


module.exports=router ;