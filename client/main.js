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
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.beerIngredients.events({
  'click #submit': function (event, instance) {
    

    var grainAmount = +$("#grainamount").val();
    var mineralWaterAmount = +$("#mineralwateramount").val();
    var sugarAmount = +$("#sugaramount").val();
    var leaveningAgentAmount = +$("#leaveningagentamount").val();

    console.log("Adding data: " + grainAmount + ", " + mineralWaterAmount + ", " + sugarAmount + ", " + leaveningAgentAmount);

    var baseAmount = 0;
    var sugurNeeded = 0;
    var leaveningAgentNeeded = 0;
    var mineralWaterNeeded = 0;
    var grainNeeded = 0;

    if (grainAmount != 0) {
      grainNeeded = grainAmount;
      baseAmount = grainAmount / 5;
      sugurNeeded = baseAmount;
      leaveningAgentNeeded = baseAmount * 2;
      mineralWaterNeeded = baseAmount * 6;
      
    } else if (mineralWaterAmount != 0) {
      mineralWaterNeeded = mineralWaterAmount;
      baseAmount = mineralWaterAmount / 6;
      sugurNeeded = baseAmount;
      leaveningAgentNeeded = baseAmount * 2;
      grainNeeded = baseAmount * 5;
      
    } else if (sugarAmount != 0) {
      sugurNeeded = sugarAmount;
      baseAmount = sugarAmount;
      mineralWaterNeeded = baseAmount * 6;
      leaveningAgentNeeded = baseAmount * 2;
      grainNeeded = baseAmount * 5;
      
    } else if (leaveningAgentAmount != 0) {
      leaveningAgentNeeded = leaveningAgentAmount;
      baseAmount = leaveningAgentAmount / 2;
      sugurNeeded = baseAmount;
      mineralWaterNeeded = baseAmount * 6;
      grainNeeded = baseAmount * 5;

    } else {
      console.log("Please provide input > 0")
    }

    console.log("Grain needed: " + grainNeeded)
    console.log("Mineral Water needed: " + mineralWaterNeeded)
    console.log("Sugar needed: " + sugurNeeded)
    console.log("Leavening Agent needed: " + leaveningAgentNeeded)

    console.log("Base Amount: " + baseAmount)



  }
});
