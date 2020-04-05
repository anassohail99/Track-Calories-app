// storage controller

// Item controller
const itemCtrl = (function () {
  // item constructor

  const item = function (id, name, calories, proteins, carbs) {
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
        calories: "1200 cal",
        proteins: "50g",
        carbs: "120g",
      },
      {
        id: 1,
        name: "Cookies",
        calories: "650 cal",
        proteins: "80g",
        carbs: "100g",
      },
      {
        id: 2,
        name: "Peanut Butter",
        calories: "1000 cal",
        proteins: "30g",
        carbs: "100g",
      },
    ],
    currentItem: null,
    totalCalories: 0,
    totalproteins: 0,
    totalCarbs: 0,
  };
  // public methods
  return {
    getItems: function () {
      return data.items;
    },
    logData: function () {
      return data;
    },
  };
})();

// UI controller
const uiCtrl = (function () {
  const uiSelector = {
    itemList: "#item-list",
  };
  // public methods
  return {
    populateItemsList: function (items) {
      let html = "";
      items.forEach(function (item) {
        html += `
      <li class="collection-item" id="item-${item.id}">
      <strong>${item.name}  : </strong> <em>${item.calories}</em>
      <em>${item.proteins}</em> <em>${item.carbs}</em>
      <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
      </li>
      `;
      });

      // insert list items into
      document.querySelector(uiSelector.itemList).innerHTML = html;
    },
  };
})();

// App controller
const app = (function () {
  // public methods to access private things
  return {
    init: function () {
      // initialize App
      console.log("initializing app");

      //fetching items from DataStructure
      const items = itemCtrl.getItems();

      // populate list with Items
      uiCtrl.populateItemsList(items);
    },
  };
})(itemCtrl, uiCtrl);

// initialize
app.init();
