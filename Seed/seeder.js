var Product = require('../models/product');
var mongoose = require('mongoose');

//mongodb+srv://dumsani:aCCysqyflJmPlG29@cluster0.jruhp.mongodb.net/mongoDB?retryWrites=true&w=majority
//mongodb://localhost/shopping


try {
	const uri = 'mongodb+srv://dumsani:aCCysqyflJmPlG29@cluster0.jruhp.mongodb.net/mongoDB?retryWrites=true&w=majority';	
	mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
	console.log("connected"));
	}catch (error) { 
	console.log("could not connect");    
	}
     
	 var products = [
new Product({
	imagePath:'assets/img/product/umhlabelo.jpg',
	category:'Treatment',
	title: 'Umhlabelo',
	solution: 'Rapid Bone Repair, Gout, Piles, Immune System Booster, Post Operations, Internal Bleeding, Ulcers, Intestine Disorders, Body Cleanser, Boosts Sexual Performance, Bleeding Gums, Body Sores, Helps Digestion Process, & Treats Cancer',
	description: 'A very special mixture of herbs containing healing properties to cure or treat sickenesses',
	summary: 'Internal Bleeding, Intestine Disorders, Ulcers, Cancer, Gums',
	price:100,
	volume:'1 Litre',
	instructions:'Drink three(3) times per day after meals. Morning, afternoon, and evening.',
	testimonials: 'Testimonials are still being prepared.'
}),
new Product({
	imagePath:'assets/img/product/guleni.jpg',
	category:'Treatment',
	title: 'Guleni',
    solution: 'Immune System Booster, Hiccups, Diarrhea, Appetite, Spasmodic Pains, Swollen Feet, Blisters, Glands on neck, Oral Thrush, Body Pain, Headache, Ulcers.',
	description: 'A very special mixture of herbs containing healing properties to cure or treat sickenesses',
	summary: 'Immune System, Spasmodic Pains, Oral Thrush, Diarrhea, Appetite, Blisters',
	price:140,
	volume:'1 Litre',
	instructions:'Drink half a glass there(3) timees per day.',
	testimonials: 'Testimonials are still being prepared.'
}),
new Product({
	imagePath:'assets/img/product/vukautimele.jpg',
	category:'Treatment',
	title: 'Vuka Utimele',
	solution: 'Drop, Body Sores, Piles, Prostrate Cancer, Blood Cleanser, Pneumonia, Chest Pain, Pimples, Iching, Thrush, CD4-Count Booster',
	description: 'A very special mixture of herbs containing healing properties to cure or treat sickenesses',
	summary: 'Drop, Prostrate Cancer, Sores Pimples, Rash, Thrush, CD4-Count',
	price:180,
	volume:'1 Litre',
	instructions:'Drink three(3) times per day after meals. Morning, afternoon, and evening.',
	testimonials: 'Testimonials are still being prepared.'
}),
new Product({
	imagePath: 'assets/img/product/mbizimvelo.jpg',
	category:'Treatment',
	title: 'Mbizimvelo',
	solution: 'Lower back pain, Bladder, Kidney, Sexual Stamina, Pregnancy problems',
	description: 'A very special mixture of herbs containing healing properties to cure or treat sickenesses',
	summary: 'Back Pain, Bladder, Kidney Failure, Sexual Stamina, Stomach, Constipation',
	price:120,
	volume:'1 Litre',
	instructions:'Drink three(3) times per day after meals. Morning, afternoon, and evening.',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/product/khokhangaphakathi.jpg',
	category:'Treatment',
	title: 'Khokha ngaphakathi',
	solution: 'Painful Feet, Oversweating, Kidney Failure, Digestion, Suger Diabetes, Dieting, Fatigue, Insomnia, High Blood Pressure, Carbohydrates Regulation',
	description: 'A very special mixture of herbs containing healing properties to cure or treat sickenesses',
	summary: 'Painful Feet, Sweating, Suger Diabetes, High Blood Pressure etc',
	price:140,
	volume:'1 Litre',
	instructions:'Drink three(3) times per day after meals. Morning, afternoon, and evening.',
	testimonials: 'Testimonials are still being prepared.'
}),
new Product({
	imagePath: 'assets/img/product/lijojo.jpg',
	category:'Treatment', 
	title: 'Lijojo lemphilo',
	solution: 'TB, Body Sores, Piles, Cancer, Drop, Blisters, Stomach Pains, Blood Cleanser',
	description: 'A very special mixture of herbs containing healing properties to cure or treat sickenesses',
	summary: 'TB(Tubercolosis), Piles, Cancer, Body Sores, Sking Blisters, Stomach Pains', 
	price:120,
	volume:'1 Litre',
	instructions:'Drink three(3) times per day after meals. Morning, afternoon, and evening.',
	testimonials: 'Testimonials are still being prepared.'
	
}),


new Product({
	imagePath: 'assets/img/product/wealth/siwasho-semali.jpg',
	category:'Wealth',
	title: 'Money Drawer',
	description: 'A very special mixture [Siwasho] of essential powers & herbs',
	solution: 'Luck, Business Success, Gambling Success',
	summary: 'A mixture for luck, business success and successful gambling', 
	price:60,
	volume:'150g',
	instructions:'Futsa, Geza, Phalaza',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/product/wealth/mafutha-wemali.jpg',
	category:'Wealth',
	title: 'Mafutha Wemali',
	description: 'A very special mixture of essential oils & herbs',
	solution: 'Luck, Business Success, Gambling Success, Money Attraction',
	summary: 'A mixture for luck, business success and successful gambling', 
	price:70,
	volume:'100g',
	instructions:'Futsa, Geza, Gaba',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/product/wealth/money-soap.jpg',
	category:'Wealth',
	title: 'Money Soup',
	description: 'A special mixture of powerful herbs',
	solution: 'Luck, Business Success, Gambling Success, Money Attraction',
	summary: 'A mixture for luck, business success and successful gambling', 
	price:70,
	volume:'100g',
	instructions:'Bath[Geza]',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/product/wealth/ingezo-yetimanga.jpg',
	category:'Wealth',
	title: 'Ingezo Yetimanga',
	description: 'A special mixture of powerful herbs[Siwasho]',
	solution: 'successful churches, respect, peace, & love',
	summary: 'A mixture for luck, successful churches, love and respect', 
	price:50,
	volume:'150g',
	instructions:'Futsa, Geza, Phalaza, Chela',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/product/wealth/sihlati-semloti.jpg',
	category:'Wealth',
	title: 'Sihlati Semloti',
	description: 'A very special mixture [Sihlati] of essential powers & herbs',
	solution: 'Mostly used by traditional healers',
	summary: 'Sihlati', 
	price:70,
	volume:'150g',
	instructions:'Futsa, Geza, Phalaza',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/product/wealth/money-drawing.jpg',
	category:'Wealth',
	title: 'Money Drawer',
	description: 'A very special mixture [Siwasho] of essential powers & herbs',
	solution: 'Luck, Business Success, Gambling Success',
	summary: 'A mixture for luck, business success and successful gambling', 
	price:90,
	volume:'150g',
	instructions:'Futsa, Geza, Phalaza',
	testimonials: 'Testimonials are still being prepared.'
	
}),


new Product({
	imagePath: 'assets/img/product/love/esemshado.jpg',
	category:'Relations',
	title: 'Esemshado',
    description: 'A very special mixture of powerful herbs [Siwasho]',
	solution: 'Marriage',
	summary: 'A mixture for marriage', 
	price:65,
	volume:'150g',
	instructions:'Futsa',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/product/love/wozawoza.jpg',
	category:'Relations',
	title: 'Woza Woza',
	description: 'A very delicate and special mixture of herbs & mineral saults',
	solution:'Luck, Love, Gambling.',
	summary: 'A mixture for luck, love and gambling', 
	price :50,
	volume:'150g',
	instructions:'Futsa, Geza, Phalaza',
	testimonials: 'Testimonials are still being prepared.'
	
}),

new Product({
	imagePath: 'assets/img/product/love/ingezo-yetimanga.jpg', 
	category:'Relations',
	title: 'Ingezo Yetimanga',
	description: 'A very delicate and special mixture [Siwasho] of essential powers and herbs',
	solution:'Marriage, Respect, More lovers',
	summary: 'A mixture for having more lovers, respect and marriage', 
	price:50,
	volume:'150g',
	instructions:'Futsa, Geza, Gaba',
	testimonials: 'Testimonials are still being prepared.'	
}),

new Product({
	imagePath: 'assets/img/product/love/small-wozawoza.jpg', 
	category:'Relations',
	title: 'Woza Woza',
	description: 'A very delicate and special mixture [Siwasho] of essential powers and herbs',
	solution:'Marriage, Respect, More lovers',
	summary: 'A mixture for having more lovers, respect and marriage', 
	price:45,
	volume:'100g',
	instructions:'Futsa, Geza, Gaba',
	testimonials: 'Testimonials are still being prepared.'	
}),

new Product({
	imagePath: 'assets/img/product/extras/sihlati-semloti.jpg', 
	category:'Extras',
	title: 'Sihlati Semloti',
	description: 'A very delicate and special mixture [Siwasho] of essential powers and herbs',
	solution:'Private',
	summary: 'A mixture for having more lovers, respect and marriage', 
	price:100,
	volume:'150g',
	instructions:'Futsa, Geza, Gaba',
	testimonials: 'Testimonials are still being prepared.'	
}),

new Product({
	imagePath: 'assets/img/product/extras/sihlati-semadloti.jpg', 
	category:'Extras',
	title: 'Sihlati Semadloti',
	description: 'A very delicate and special mixture [Siwasho] of essential powers and herbs',
	solution:'Private',
	summary: 'A mixture for having more lovers, respect and marriage', 
	price:75,
	volume:'150g',
	instructions:'Futsa, Geza, Gaba',
	testimonials: 'Testimonials are still being prepared.'	
}),

new Product({
	imagePath: 'assets/img/product/extras/siwasho-senzunzu.jpg', 
	category:'Extras',
	title: 'Siwasho Senzunzu',
	description: 'A very delicate and special mixture [Siwasho] of essential powers and herbs',
	solution:'Private',
	summary: 'A mixture for having more lovers, respect and marriage', 
	price:100,
	volume:'150g',
	instructions:'Futsa, Geza, Gaba',
	testimonials: 'Testimonials are still being prepared.'	
}),

new Product({
	imagePath: 'assets/img/product/extras/sigila-batsakatsi.jpg', 
	category:'Extras',
	title: 'Sigila Batsakatsi',
	description: 'A very delicate and special mixture [Siwasho] of essential powers and herbs',
	solution:'Private',
	summary: 'A mixture for having more lovers, respect and marriage', 
	price:75,
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
