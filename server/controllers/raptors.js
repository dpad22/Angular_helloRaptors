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

    delete: (req,res)=>{
        Raptor.remove({_id:req.params.id})
        err => {
            if (err){
                res.json({message: "Error", error: err
            });

            }else{
                res.json({message: "Delete Succcessful",added: true
                });
            }
        }
    },

    edit: (req,res)=>{
        Raptor.findOne({_id:req.params.id})
        .then(raptors => {
            res.json(raptors)
            })
            .catch(err=>{
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
    }
}