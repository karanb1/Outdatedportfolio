const admin = require("firebase-admin");
const dotenv = require("dotenv-json");
const serviceAccount = require("./portfolio-c2c25-firebase-adminsdk-ixqbu-bbf16b2d73.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://portfolio-c2c25.firebaseio.com'
});

const db = admin.database();
var ref = db.ref();
const express = require("express");
const app = express();
const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
  app.get("/",function(req,res){
        res.sendFile(__dirname +"/index.html");
  });

//app.post("/",function(req,res){
    // var name = req.body.name;
    // var email = req.body.email;
    // var message = req.body.message;
    
    //     const quoteData={
    //        name : name,
    //        email: email,
    //         message: message
    //     };
    //         var postsRef = ref.child("info");
    //         postsRef.push().set(quoteData);
    //        // res.redirect("/");
    //      });

app.get("/download",function(req,res){
   var file= __dirname +"/Karan's-Resume.pdf";
   res.download(file);
});         

app.listen(4000,function(){
    console.log("server started"); 
 });