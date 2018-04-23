const Restaurant2 = {
  eat: function() {
    console.log("Eating");
  },
  drink: function() {
    console.log("Drinking");
    this.eat();
  }
};

Restaurant2.drink();
