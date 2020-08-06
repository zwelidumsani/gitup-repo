var Product = require('../models/product');
var mongoose = require('mongoose');

//mongodb+srv://dumsani:aCCysqyflJmPlG29@cluster0.jruhp.mongodb.net/mongoDB?retryWrites=true&w=majority
//mongodb://localhost/shopping


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
	category:'healing',
	title: 'Umhlabelo',
	globalName: 'Treatment',
	description: 'Rapid bone repair, Gout, Piles, Immune booster,Post operations, Internal bleeding, Ulcers, Intestine disorders, Body cleaner, Boosts sexual performance,Bleeding gums, Body sores, Helps digestion process, and Cancer, ',
	summary: 'Gout, Piles, Internal Bleeding, Disorders, Ulcers, Cancer etc.  ',
	price:100,
	volume:'1 Litre',
	instructions:'Drink three(3) times per day after meals. Morning, afternoon, and evening.',
	testimonials: 'Testimonials are still being prepared.'
}),
new Product({
	imagePath:'assets/img/product/guleni.jpg',
	category:'healing',
	title: 'Guleni',
	globalName: 'Treatment',
    description: 'Keys to Immune System health, [Drink half a glass three times per day]',
	summary: 'Immune System, Sexual Performance, Blood, Digestion, etc',
	price:100,
	volume:'1 Litre',
	instructions:'Drink three(3) times per day after meals. Morning, afternoon, and evening.',
	testimonials: 'Testimonials are still being prepared.'
}),
new Product({
	imagePath:'assets/img/product/vukautimele.jpg',
	category:'healing',
	title: 'Vuka Utimele',
	globalName: 'Treatment',
	description: 'Excellent for drop, Body sores, Piles, Prostrate cancer, Cleans blood, Numonia, Pain in the chest, Pimples, Iching on the skin, Thrush, and Increasing CD4 count,',
	summary: 'Drop, Prostrate Cancer, Sores Pimples, Rash, Thrush, CD4-Count, etc',
	price:100,
	volume:'1 Litre',
	instructions:'Drink three(3) times per day after meals. Morning, afternoon, and evening.',
	testimonials: 'Testimonials are still being prepared.'
}),
new Product({
	imagePath: 'assets/img/product/mbizimvelo.jpg',
	category:'healing',
	title: 'Mbizimvelo',
    globalName: 'Treatment',
	description: 'Lower back pain, Bladder, Kidney, increases man-power and performance',
	summary: 'Lower Back Pain, Bladder, Kidneys Failure, Sexual Stamina etc',
	price:100,
	volume:'1 Litre',
	instructions:'Drink three(3) times per day after meals. Morning, afternoon, and evening.',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/product/khokhangaphakathi.jpg',
	category:'healing',
	title: 'Khokha ngaphakathi',
	globalName: 'Treatment',
	description: 'Stops painful feet, reduces oversweating, strengthens the kidneys, helps digestive process, treats symtoms of suger diabetes, Excelent for diet, Acts against fatigue, Controls your need for sleep,Treats systems for high blood pressure, Regulates the metabolism of carbohydrates.',
	summary: 'Painful Feet, Sweating, Suger Diabetes, High Blood Pressure etc',
	price:100,
	volume:'1 Litre',
	instructions:'Drink three(3) times per day after meals. Morning, afternoon, and evening.',
	testimonials: 'Testimonials are still being prepared.'
}),
new Product({
	imagePath: 'assets/img/product/lijojo.jpg',
	category:'healing', 
	title: 'Lijojo lemphilo',
	globalName: 'Treatment',
	description: 'TB, Body sores, Piles, Cancer, Drop, Ematfumba, Stomach pains, Cleans the blood, ',
	summary: 'TB(Tubercolosis), Piles, Stomach Pains, Blisters,etc', 
	price:100,
	volume:'1 Litre',
	instructions:'Drink three(3) times per day after meals. Morning, afternoon, and evening.',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/money/canvas.png',
	category:'wealth',
	title: 'Money Drawer',
	globalName: 'Solution',
	description: 'A very delicate special mixture [Siwasho] of essential powers and herbs to be used for luck, business success, and successful gambling.',
	summary: 'A mixture for luck, business success and successful gambling', 
	price:30,
	volume:'150g',
	instructions:'Futsa, Geza, Gaba',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/money/canvas.png',
	category:'wealth',
	title: 'Mafutha Wemali',
	globalName: 'Solution',
	description: 'A very special mixture of essential oils & herbs to be used for luck, business, attraction to money and gambling',
	summary: 'A mixture for luck, business success and successful gambling', 
	price:45,
	volume:'100g',
	instructions:'Futsa, Geza, Gaba',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/money/canvas.png',
	category:'wealth',
	title: 'Insipho Yemali',
	globalName: 'solution',
	description: 'A special mixture to be used for luck, businesses, attraction of money,and successful gambling.',
	summary: 'A mixture for luck, business success and successful gambling', 
	price:45,
	volume:'100g',
	instructions:'Geza',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/money/canvas.png',
	category:'wealth',
	title: 'Ingezo Yetimali',
	globalName: 'Solution',
	description: 'A special mixture of herbs [Siwasho], which can lead to successful churches, respect, peace, and love',
	summary: 'A mixture for luck, successful churches, love and respect', 
	price:45,
	volume:'150g',
	instructions:'Futsa, Geza, Phalaza, Chela',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/money/canvas.png',
	category:'affection',
	title: 'Esemshado',
	globalName: 'Solution',
    description: 'A very special mixture of herbs [Siwasho], which can lead to marriage when used upstoppably',
	summary: 'A mixture for marriage', 
	price:45,
	volume:'150g',
	instructions:'Futsa',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/money/canvas.png',
	category:'affection',
	title: 'Woza Woza',
	globalName: 'Solution',
	description: 'A very delicate and special mixture of herbs & mineral saults to be used for luck, love, and gambling.',
	summary: 'A mixture for luck, love and gambling', 
	price : 45,
	volume:'150g',
	instructions:'Futsa, Geza, Phalaza',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/money/canvas.png',
	category:'affection',
	title: 'Selutsandvo',
	globalName: 'Solution',
	description: 'A very delicate special mixture [Siwasho] of essential powers and herbs to be used for marriage, respect, and more lovers.',
	summary: 'A mixture for having more lovers, respect and marriage', 
	price:100,
	volume:'150g',
	instructions:'Futsa, Geza, Gaba',
	testimonials: 'Testimonials are still being prepared.'	
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
