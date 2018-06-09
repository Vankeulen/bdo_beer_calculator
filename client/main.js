import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter wwaterhen button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },  
});  

Template.beerIngredients.onCreated(function() {

  this.ingredientsNeeded = new ReactiveVar();
  this.water = new ReactiveVar();
  this.sugar = new ReactiveVar();
  this.yeast = new ReactiveVar();
  this.grain = new ReactiveVar();

});

Template.beerIngredients.helpers({ 
  ingredientsNeeded(){
    var needed =Template.instance().ingredientsNeeded.get();
    console.log(`rendering ingredients needed: ${needed}`)
    return needed;
},
  water() { return Template.instance().water.get(); },
  yeast() { return Template.instance().yeast.get(); },
  grain() { return Template.instance().grain.get(); },
  sugar() { return Template.instance().sugar.get(); },
});

Template.beerIngredients.events({
  'click #submit': function (event, instance) {
    event.preventDefault();
    
    var grain = +$("#grain").val();
    var water = +$("#water").val();
    var sugar = +$("#sugar").val();
    var yeast = +$("#yeast").val();
    
    console.log("Adding data: " + grain + ", " + water + ", " + sugar + ", " + yeast);
    
    var reps = 0;
    if (grain > 0) { reps = grain / 5.0 }
    else if (water > 0) { reps = water / 6.0 }
    else if (yeast > 0) { reps = yeast / 2.0 }
    else if (sugar > 0) { reps = sugar / 2.0 }
    
    //What does this do?
    reps = Math.floor(reps)
    
    //var baseAmount = 0;
    var grainNeeded = reps * 5;
    var waterNeeded = reps * 6;
    var yeastNeeded = reps * 2;
    var sugurNeeded = reps;

    var ingredientsNeeded = `Grain: ${grainNeeded}, Water: ${waterNeeded}, Sugar: ${sugurNeeded}, Yeast: ${yeastNeeded}`

    Template.instance().ingredientsNeeded.set(ingredientsNeeded);
    Template.instance().grain.set(grainNeeded)
    Template.instance().yeast.set(yeastNeeded)
    Template.instance().water.set(waterNeeded)
    Template.instance().sugar.set(sugurNeeded)
    
    /* if (grain > 0) {
      grainNeeded = grain;
      baseAmount = grain / 5;
      sugurNeeded = baseAmount;
      yeastNeeded = baseAmount * 2;
      waterNeeded = baseAmount * 6;
      
    } else if (water > 0) {
      waterNeeded = water;
      baseAmount = water / 6;
      sugurNeeded = baseAmount;
      yeastNeeded = baseAmount * 2;
      grainNeeded = baseAmount * 5;
      
    } else if (sugar > 0) {
      sugurNeeded = sugar;
      baseAmount = sugar;
      waterNeeded = baseAmount * 6;
      yeastNeeded = baseAmount * 2;
      grainNeeded = baseAmount * 5;
      
    } else if (yeast > 0) {
      yeastNeeded = yeast;
      baseAmount = yeast / 2;
      sugurNeeded = baseAmount;
      waterNeeded = baseAmount * 6;
      grainNeeded = baseAmount * 5;
      
    } else {
      console.log("Please provide input > 0")
    }  
    */ 
   
   /* Causes ReferenceError: Console is not defined;
   Console.log("Can make ${reps} batches of beer.") */
   /**
    * 
    console.log("This make a minumum beer amout of: " + reps)
    console.log("Grain needed: " + grainNeeded)
    console.log("Mineral Water needed: " + waterNeeded)
    console.log("Sugar needed: " + sugurNeeded)
    console.log("Leavening Agent needed: " + yeastNeeded)
    */
   
   
   
   
  } 
});  

