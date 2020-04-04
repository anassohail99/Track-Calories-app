// storage controller

// Item controller
const itemCtrl = (function() {
  // item constructor

  const item = function(id, name, calories, proteins, carbs) {
    this.id = id;
    this.name = name;
    this.calories = calories;
    this.proteins = proteins;
    this.carbs = carbs;
  };

  // Data Structure / State
  const data = {
    items: [
      {
        id: 0,
        name: "Steak Dinner",
        calories: 1200,
        proteins: "50g",
        carbs: "120g"
      },
      {
        id: 1,
        name: "Cookies",
        calories: 650,
        proteins: "80g",
        carbs: "100g"
      },
      {
        id: 2,
        name: "Peanut Butter",
        calories: 1000,
        proteins: "30g",
        carbs: "100g"
      }
    ],
    currentItem: null,
    totalCalories: 0,
    totalproteins: 0,
    totalCarbs: 0
  };

  return {
    logData: function() {
      return data;
    }
  };
})();

// UI controller
const uiCtrl = (function() {
  console.log("Hello");
})();

// App controller
const app = (function() {
  // public methods to access private things
  return {
    init: function() {
      // initialize App
      console.log("initializing app");
    }
  };
})(itemCtrl, uiCtrl);

// initialize
app.init();
