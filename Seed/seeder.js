var Product = require('../models/product');
var mongoose = require('mongoose');


try {
	const uri = 'mongodb://localhost/shopping';	
	mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
	console.log("connected"));
	}catch (error) { 
	console.log("could not connect");    
	}
     
	 var products = [
new Product({
	imagePath:'assets/img/product/umhlabelo.jpg',
	title: 'Umhlabelo',
	globalName: 'Curing',
	description: 'Rapid bone repair, Gout, Piles, Immune booster,Post operations, Internal bleeding, Ulcers, Intestine disorders, Body cleaner, Boosts sexual performance,Bleeding gums, Body sores, Helps digestion process, and Cancer, ',
	summary: 'Gout, Piles, Internal Bleeding, Disorders, Ulcers, Cancer etc.  ',
	price:100,
	instructions:'Instructions are still being prepared.',
	testimonials: 'Testimonials are still being prepared.',
	user: '5ee61c28b3795b0bf40ed9fd'
}),
new Product({
	imagePath:'assets/img/product/guleni.jpg',
	title: 'Guleni',
	globalName: 'Curing',
    description: 'Keys to Immune System health, [Drink half a glass three times per day]',
	summary: 'Immune System, Sexual Performance, Blood, Digestion, etc',
	          
	price:100,
	instructions:'Instructions are still being prepared.',
	testimonials: 'Testimonials are still being prepared.',
	user: '5ee61c5db3795b0bf40ed9fe'
}),
new Product({
	imagePath:'assets/img/product/vukautimele.jpg',
	title: 'Vuka Utimele',
	globalName: 'Curing',
	description: 'Excellent for drop, Body sores, Piles, Prostrate cancer, Cleans blood, Numonia, Pain in the chest, Pimples, Iching on the skin, Thrush, and Increasing CD4 count,',
	summary: 'Drop, Prostrate Cancer, Sores Pimples, Rash, Thrush, CD4-Count, etc',
	         
	price:100,
	instructions:'Instructions are still being prepared.',
	testimonials: 'Testimonials are still being prepared.',
	user:'5ee61cd9b3795b0bf40ed9ff'
}),
new Product({
	imagePath: 'assets/img/product/mbizimvelo.jpg',
	title: 'Mbizimvelo',
    globalName: 'Curing',
	description: 'Lower back pain, Bladder, Kidney, increases man-power and performance',
	summary: 'Lower Back Pain, Bladder, Kidneys Failure, Sexual Stamina etc',
	          
	price:100,
	instructions:'Instructions are still being prepared.',
	testimonials: 'Testimonials are still being prepared.',
	user: '5ee61c28b3795b0bf40ed9fd'
	
}),

new Product({
	imagePath: 'assets/img/product/khokhangaphakathi.jpg',
	title: 'Khokha ngaphakathi',
	globalName: 'Curing',
	description: 'Stops painful feet, reduces oversweating, strengthens the kidneys, helps digestive process, treats symtoms of suger diabetes, Excelent for diet, Acts against fatigue, Controls your need for sleep,Treats systems for high blood pressure, Regulates the metabolism of carbohydrates.',
	summary: 'Painful Feet, Sweating, Suger Diabetes, High Blood Pressure etc',
	          
	price:100,
	instructions:'Instructions are still being prepared.',
	testimonials: 'Testimonials are still being prepared.',
	user: '5ee61c5db3795b0bf40ed9fe'
}),
new Product({
	imagePath: 'assets/img/product/lijojo.jpg',
	title: 'Lijojo lemphilo',
	globalName: 'Curing',
	description: 'TB, Body sores, Piles, Cancer, Drop, Ematfumba, Stomach pains, Cleans the blood, ',
	summary: 'TB(Tubercolosis), Piles, Stomach Pains, Blisters,etc', 
	price:100,instructions:'Instructions are still being prepared.',
	testimonials: 'Testimonials are still being prepared.',
	user:'5ee61cd9b3795b0bf40ed9ff'
	
})
]

var done = 0;
for (var i = 0; i < products.length; i++){
	products[i].save(function(err, result){
	     done++;
		 if(done == products.length){
			 exit();
         }			 
    });
}  
	

function exit(){
	mongoose.disconnect();
}
