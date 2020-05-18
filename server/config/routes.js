// controllers go here
const raptors = require('../controllers/raptors.js')



module.exports = function(app){
    app.get("/raptorsApi",raptors.index);

    app.get("/raptorsApi/:id", raptors.findRaptor)

    app.get("/raptorsApi/:id",raptors.edit)

    app.post("/raptorsApi",raptors.postNew)

    app.delete("/raptorsApi/:id",raptors.delete)


    app.get('/raptors', (req,res)=>{
        console.log('someone has asked for raptors')
        res.json([{name: 'alpha'},{name:'blue'}])
    })

    // app.get("/home", (req,res)=>{
    //     res.json()
        // raptors.home(req,res)
    // });
    
//         // form page to enter new raptor
//     app.get('/raptors/new', (req,res)=>{
//         raptors.new(req,res)
//     });
    
//     app.post('/raptors',(req,res)=>{
//         raptors.postNew(req,res)
//     });
    
//     app.get('/raptors/:id/destroy', (req,res)=>{
//         raptors.destroy (req,res)
//     });
    
//     app.get('/raptors/edit/:id', (req,res)=>{
//         raptors.edit (req,res)
//     });
    
//     app.post('/raptors/:id', (req,res)=>{
//         raptors.update (req,res)
//     });
    
//     app.get("/raptors/:id",(req, res)=>{
//         raptors.findRaptor (req,res)
//     });
}