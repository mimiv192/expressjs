const express= require ('express');
const path = require ('path');
const app =express();
const fs = require('fs');


app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json()); // req.body json types
app.use(express.urlencoded({extended:false})); //works w/ html forms!

app.use((req, res,next) => {
    console.log(req.url);
    next ();
    });
    

app.get('/hello', (req,res) => {
    res.send("Hello from the web server side...");
});

app.post('/register',(req,res)=>{
    console.log(req.body);

    fs.writeFile(path.join(__dirname,'../users.json'),JSON.stringify(req.body,null,2),(err) => {
        if (err) console.log(err);
    })



    res.redirect('/');
});





app.listen(3000, () => console.log ('Listening on port 3000'));








