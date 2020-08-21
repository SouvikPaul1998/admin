var express = require('express');
var adminController = require('../controllers/admincontroller');
var router = express.Router();
var firebase = require('firebase');//this one
var fire = firebase.initializeApp({
    apiKey: "AIzaSyB0M8Qrwze4wrkRKz6NBZQ5N4ZeVMzsCCU",
    authDomain: "groceryapp-dbf52.firebaseapp.com",
    databaseURL: "https://groceryapp-dbf52.firebaseio.com",
    projectId: "groceryapp-dbf52",
    storageBucket: "groceryapp-dbf52.appspot.com",
    messagingSenderId: "1019129350835",
    appId: "1:1019129350835:web:3e906efe26a991f1747ec6",
    measurementId: "G-0W3P8WERJT"
  });

router.get('/',function(req,res,next){
    res.render('home',{title: 'THIS IS HOME PAGE.'});
});

router.get('/login', function(req, res, next) {
    res.render('./adminpart/adminlogin');
});
router.post('/adminlogincheck', adminController.AdminLoginCheck);

router.get('/adminhome', function(req, res, next) {
    res.render('./adminpart/adminhome');
});
router.get('/productadd', function(req, res, next) {
    res.render('./adminpart/productadd');
});
router.post('/insertproduct',function(req, res, next) {
	var database = fire.database();   //get data from frontend and put here
	fire.database().ref('product'+"vbnnmm,,").set({
		productname:"myname",
		productprice:"Your name",
		productdes:"My description",
		producturl:"bnjnj",
		productcat:"Vegetable  122"


	});
	res.send("hellll");
})
module.exports = router;