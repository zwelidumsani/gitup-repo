var nodemailer = require('nodemailer');
const express = require('express')
const router = express.Router()
var Cart = require('../models/cart.js');
var Product = require('../models/product')
var lib = require('../lib/library')
var Order = require('../models/order')
var User = require('../models/user')
var passport = require('passport');
var clientOrder = {};
var proId;

const accountSid = 'AC3c506767f08d7269912cf174bce0b68d';
const authToken = 'a96369219c9c9bcc60f0433ed2b17e06';
const client = require('twilio')(accountSid, authToken);

router.get('/', (req, res) => {
	 const accRemoval = req.flash('acc-removal')[0]; 
     Product.find(function(err, docs){	
		 res.render('index', {products: docs, accRemoval: accRemoval});
	});		
})



router.get('/logout', isLoggedIn, function(req, res, next){
	req.session.cart=null;
    req.logout();
	
	res.redirect('/');
});


router.get('/dashboard', isLoggedIn, function(req, res, next){
	
	var userid;
	var orderDeleted;
	if(req.user.email == '78127625' || req.user.email == '76317345' || req.user.email == '76791635' ){
    Order.find(function(err, orders){		
	if (err){
		return res.write('Error');
		}
	var cart; 
	var totalProducts = 0;
	orders.forEach(function(order){
	cart = new Cart(order.cart);
	
	order.items = cart.generateArray();
	totalProducts = totalProducts + order.cart.totalQty;
	});
 	
	orderDeleted = req.flash('order_success_delete')[0];
	orderNotClosed = req.flash('error-removing-order')[0];
	res.render('dashboard', {orderNotClosed: orderNotClosed, orderD: orderDeleted, idd: userid,admin:"ADMIN", idd: !userid, id:req.user._id, email:req.user.email, orderss: orders, orders: orders, totalOrders: !orders.length, totalOrders: orders.length, totalProducts:  totalProducts,  headin: "ACCOUNT AND ORDERS"});
    });
}
	 else {
	
	
    Order.find({user: req.user}, function(err, orders){	
	userid = 'Admin@admin.admin';
	if (err){
		return res.write('Error');
		}
	var cart;
	var totalProducts = 0;
	orders.forEach(function(order){
	cart = new Cart(order.cart);
	
	order.items = cart.generateArray();
	totalProducts = totalProducts + order.cart.totalQty;
	});
	     res.render('dashboard', {idd: userid,admin:"USER", idd: !userid, id:req.user._id, email:req.user.email, orders: orders, totalOrders: !orders.length, totalOrders: orders.length, totalProducts:  totalProducts,  headin: "ACCOUNT AND ORDERS"});
    });
	}
	

});


router.get('/remove-account', isLoggedIn, function(req, res, next){ 
	
		 Order.deleteMany({user: req.user}, function(err){
			 if(err){
				 console.log("Could not delete Orders.");
			 } else {
				 User.findOneAndRemove({_id: req.user}, function(err,docs){
					 if(err){
						 console.log("Could not remove User!");
					 }else {
						 console.log("Account removed successfully.");
						 req.flash('acc-removal', 'You have successfully Deleted your account.');
						 res.redirect('/');
					 }
				 });
			 }
		 });
});


router.get('/checkout',isLoggedIn, function(req, res, next){
	var aff_errors = req.flash('aff_error')[0];
	var phoneErr = req.flash('cellErr')[0];
	var orderSuccess = req.flash('order_success')[0];
	
	var noError = req.flash('errro')[0];
	
      if(!req.session.cart){
		return res.render('checkout', {csrfToken: req.csrfToken(), noError: noError, noError: !noError,
	 headin: 'Checkout',
	 NoErr: !phoneErr,
	 err: phoneErr,
	 orderSuccess:!orderSuccess,
	 orderSuccess:orderSuccess,
	 affErr:!aff_errors,
	 affErr:aff_errors
	 });
	}
	

    var cart = Cart(req.session.cart);
	   
	 
	 
	 return res.render('checkout', {csrfToken: req.csrfToken(), total: req.session.cart.totalPrice, noError: noError, noError: !noError,
	 headin: 'Checkout',
	 NoErr: !phoneErr,
	 err: phoneErr,
	 orderSuccess:!orderSuccess,
	 orderSuccess:orderSuccess,
	 affErr:!aff_errors,
	 affErr:aff_errors});
	 
});

router.post('/order',isLoggedIn, function(req, res, next){
	
		if(!req.session.cart){
		    return res.render('shopping-cart');
		}
		
		
		if (!lib.isValidCellNumber(req.body.phone)){
		req.flash('cellErr', 'Invalid phone number');
		return res.redirect('/checkout');
		}
        var localTime = new Date();
	
		var cart = new Cart(req.session.cart);
	         clientOrder = new Order({
		     user: req.user,
		     cart: cart,
		     name: req.body.name,
		     phone: req.body.phone,
		     address: req.body.address,
		     country: req.body.country,
			 statusCss:"label label-info",
			 status: "Pending...",
			 createdAt: localTime.toLocaleString()
	    }); 
		
		clientOrder.save(function(err, doc){
			if(err){
				 console.log("Could not save order",err.message);
			}else {
				 req.session.cart = null;
				 req.flash('order_success', 'Order saved successfully.')
		         client.messages
                 .create({
                     body: 'Your Eswatini Herbal Treatment order is being prepared. ~Regards.',
                     from: '+13103599135',
                     to: '+268'+req.body.phone
                })
                 .then(message => console.log(message.sid));
				 res.redirect('/checkout'); 
			}
		});
		
});
	
	
router.get('/remove-order/:id',isLoggedIn, function(req, res, next){
	var orderId = req.params.id;
	Order.findById(orderId, function(err, order){
		if(err){
			console.log("Could not find Order", err.message);
		}else {
			if(order.status == "Closed"){
				 Order.findOneAndRemove()
	             .then(data => {
		         req.flash('order_success_delete', 'An order has been processed and removed');
		         return res.redirect('/dashboard');
	           })
	             .catch(err => {
		             return res.json({
			         confirmation: 'fail',
			         message:err.message
		            });
	            })
			}else {
				 req.flash('error-removing-order', 'Order Error');
				 return res.redirect("/dashboard");
			}
		}
	});
		
});


router.get('/close-order/:id', isLoggedIn, function(req, res, next){
	 var orderId = req.params.id;
	 Order.findOneAndUpdate({_id: orderId}, {statusCss: "label", status:"Closed"}, {new: false}, function(err, update){
		 if(err){
			 console.log("Update failed", err.message);
		 }else{
			 console.log("Order has been closed.");
			 return res.redirect('/dashboard');
		 }
	 });
});




router.get('/listing', function(req, res, next){
	
	 Product.find(function(err, docs){
		 return res.render('listing', {title: 'Shopping Cart',headin: "PRODUCT LISTING",products: docs});
	 
	 });
});

router.get('/product-d/:id', (req, res) => {
    proId = req.params.id;
     res.redirect('/product-details');	
});

router.get('/product-details', (req, res) => {
	Product.findById(proId, function(err, doc){
		if(err){console.log("Error finding a Product", err.message);}
		if(!doc){
			console.log("Product unavailable")
			return res.redirect('/listing');
		}else {
			 return res.render("pDescription", {headin: "Product Details", product: doc});
		}
	});	
});



router.get('/', isNotLoggedIn, function(req, res,next){
	next();
});

router.get('/contact', function(req, res){
	var emailSuccess = req.flash("email_success")[0];
	var emailError = req.flash("email_error")[0];
    res.render('contactUs', {csrfToken: req.csrfToken(), emailError: emailError, emailSuccess: emailSuccess, headin: "SEND US A MESSAGE"});
});	


router.post('/email', function(req, res){
	
	var transporter = nodemailer.createTransport({
		
	 service: 'Gmail',
	    auth: {
		     user: 'eswatiniherbalnutrition@gmail.com',
		     pass: 'FANAdumsani@1989367'
		}
	});
	
    const mailOptions = {
         from: req.body.email, // sender address
         to: 'eswatiniherbalnutrition@gmail.com', // list of receivers
         subject: 'Client Mail', // Subject line
         html: '<p>'+req.body.message+'</p>'// plain text body
    };

	transporter.sendMail(mailOptions, function (err, info) {
		if(err){ 
		     console.log("Error sending email", err.message);
		     req.flash("email_error", "Something went wrong");	
		     return res.redirect('/contact');
		}else{
		     console.log("Email has been sent");
		     req.flash("email_success", "Email sent successfully");			 
		     console.log(info);
		     return res.redirect('/contact'); 
		}
    });
});



router.get('/add-to-cart/:id', function(req, res,){
	
		 var productId = req.params.id;
	     var cart = new Cart(req.session.cart ? req.session.cart: {});
			
		 Product.findById(productId, function(err, product){
			if (err){
			   return res.redirect('/');
			}
			cart.add(product, product.id);
			req.session.cart = cart;
			return res.redirect('/listing');  
	    });

});

router.get('/add-to-cart-desc/:id', function(req, res,){
	
		 var productId = req.params.id;
	     var cart = new Cart(req.session.cart ? req.session.cart: {});
			
		 Product.findById(productId, function(err, product){
			if (err){
			   return res.redirect('/');
			}
			cart.add(product, product.id);
			req.session.cart = cart;
			return res.redirect('/product-details');  
	    });

});

router.get('/reduce/:id', function(req, res, next){
						
			var productId = req.params.id;
			var cart = new Cart(req.session.cart ? req.session.cart: {})
			
			cart.reduceByOne(productId);
			req.session.cart = cart;
			res.redirect('/shopping-cart');		
});

router.get('/remove/:id', function(req, res, next){
			var productId = req.params.id;
			var cart = new Cart(req.session.cart ? req.session.cart: {})
			
			cart.removeItem(productId);
			req.session.cart = cart;
			res.redirect('/shopping-cart');
});



router.get('/shopping-cart', function(req, res, next){
	var orderSuccess = req.flash('order_success')[0];
	
	    if(!req.session.cart){
		return res.render('shopping-cart', {products: null, headin: 'You have No Items In Cart'});
	}
	
		
		var cart = new Cart(req.session.cart);
		
		return res.render('shopping-cart', {products: cart.generateArray(),
	    totalPrice: cart.totalPrice, orderSuccess:!orderSuccess, orderSuccess:orderSuccess, headin: 'Your Shopping  Cart Items'});
	
});


router.get('/signup', function(req, res, next){
	 var messages = req.flash('error');
     res.render('signup', {csrfToken: req.csrfToken(), headin: "CREATE AN ACCOUNT", messages: messages, hasErrors: messages.length > 0});
});

 
router.post('/signup',passport.authenticate('strategy', {
	 successRedirect:'/dashboard',
	 failureRedirect:'/signup',
	 failureFlash: true
    })   
);

router.get('/signin', function(req, res, next){
	 var messages = req.flash('error');
     res.render('loginn.handlebars',{csrfToken: req.csrfToken(), headin: "LOG IN", messages: messages, hasErrors: messages.length > 0});
});

router.post('/signin',passport.authenticate('local', {
	 successRedirect:'/dashboard',
	 failureRedirect:'/signin',
	 failureFlash: true
    })
);
	

router.get('/about', function(req, res){
	
		res.render('aboutUs.handlebars');
});

function isLoggedIn (req, res, next){
   if (req.isAuthenticated()) {
	   return next();
   }
  /* res.session.oldUrl = req.url;*/
   res.redirect('/signin');
}

function isNotLoggedIn (req, res, next){
   if (!req.isAuthenticated()) {
	   return next();
   }
   res.redirect('/');
}



module.exports = router;