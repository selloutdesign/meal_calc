'use strict'
	var fixedTax = .06;
	var tip = .2;

	// Using object initializer method
	// Dinner would be a table - consisiting of diners
	var Dinner = {
		diners: [],
		tip: 0,
		total: 0,
		addDiner: function(diner){
			this.diners.push(diner);
		},
		total: function(){
			var total = 0;
			var diners = this.diners;
			for(var diner in diners){
				total += diners[diner].meal.mealCost();
			};
			return total;
		},
		splitCheck: function(){
			var total = 0;
			var diners = this.diners;
			for(var diner in diners){
				total += diners[diner].meal.mealCost();
			};
			return total/this.diners.length;
		},
		byDiner: function(){
			var diners = this.diners;
			for(var diner in diners){
				console.log(diners[diner].name);
				console.log(diners[diner].meal.mealCost());
			};
			return "yea";
		}

	};

	// Using the Object.create Method

	// Diners have a name and meal
	function Diner(name, meal){
		this.name = name;
		this.meal = meal;
	};

	// Diners have meals consisting of any number of dishes
	var Meal = function(){
		this.dishes = Array.prototype.slice.call(arguments);
		this.mealCost = function(){
			var dishes = this.dishes;
			var total = 0;
			for(var dish in dishes){
				total += dishes[dish].price;
			};
			return total += total*fixedTax;
		};
	};

	Meal.prototype.order = function(){
		for(var i = 0; i < this.dishes.length; i++){
			console.log(this.dishes[i]);
		};
	};


	// Using constructor function
	
	function Dish(name, price){
		this.name = name;
		this.price = price;
	};


	var harrisonParty = Object.create(Dinner);


	var toast = new Dish("toast", 10);
	var beer = new Dish( "beer", 5);

	var meal1 = new Meal(toast, beer);

	meal1.order();
	var jeff = new Diner("jeff", meal1);
	var joe = new Diner("joe", meal1);
	harrisonParty.addDiner(jeff);
	harrisonParty.addDiner(joe);

	// Return Totals
	console.log(harrisonParty.total());
	console.log(harrisonParty.byDiner());


