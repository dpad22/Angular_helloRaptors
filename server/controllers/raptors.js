const {Raptor} = require('../models/raptors')
// bycrypt const goes here


module.exports = {
    // index route
    index: (req,res)=>{
        Raptor.find()
            .then(data =>{
                console.log(data)
                res.json(data);
            })
    },

    // post form route
    postNew: (req,res)=>{
        const raptor = new Raptor();
        raptor.name = req.body.name
        raptor.age = req.body.age
        raptor.sex = req.body.sex
        raptor.color = req.body.color
        raptor.save()  //{name:"David", age: 32, sex: Male, color:"red"}
            .then(newRaptor => {
                console.log("We created:", newRaptor)
                res.json(newRaptor)
            })
            .catch(err => {
                console.log("Error saving Raptor:", err)
                res.json(err)
            })
    },

    findRaptor: (req,res)=>{
        Raptor.findOne({_id:req.params.id})
            .then(raptors =>{
                console.log(raptors)
                res.json(raptors)
            })
            .catch(err=>{
                res.json(err)
            })
        },

    deleteRaptor: (req,res)=>{
        console.log("params",req.params)
        Raptor.deleteOne({_id:req.params._id})
            .then(deletedRaptor => {
                res.json(deletedRaptor)
            })
            .catch(err=>{
                console.log('Error eliminating raptor:', err)
                res.json(err)
            })
        },
        
    editRaptor: (req,res)=>{
        console.log("params",req.params)
        console.log(req.body)
        Raptor.findOne({_id:req.params._id})
            .then(raptor => {
                console.log(raptor)
                raptor.name = req.body.name
                raptor.age = req.body.age
                raptor.sex = req.body.sex
                raptor.color = req.body.color
                raptor.save()
                    .then(editRaptor =>{
                        res.json(editRaptor)
                    })
                })
            .catch(err=>{
                console.log('Error saving raptor', err)
            })
        }
    }

    


// editRaptor: (req,res)=>{
    //     let id = req.params.id;
    //     Raptor.findById(id, function (err,raptor_data){
    //         if (err){
    //             res.json({message: "error!", error: err});
    //         }
    //         else{
    //             if(req.body.name){
    //                 raptor_data.name = req.body.name;
    //             }
    //             if(req.body.age){
    //                 raptor_data.age = req.body.age;
    //             }
    //             if(req.body.sex){
    //                 raptor_data.sex = req.body.sex;
    //             }
    //             if(req.body.color){
    //                 raptor_data.color = req.body.color;
    //             }
    //             raptor_data.save(function (err){
    //                 if(err) {
    //                     res.json({message: "error!", error: err});
    //                 }
    //                 else{
    //                     res.json({message: "Success!", raptor_data: raptor_data})
    //                 }
    //             })
    //         }
    //     })
    // }