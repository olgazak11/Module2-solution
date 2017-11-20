(function(){
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.items = ShoppingListCheckOffService.getItemsToBuyList();

  toBuyList.buiedItem = function (itemIndex, item) {
    ShoppingListCheckOffService.removeItemFromToBuyList(itemIndex);
    ShoppingListCheckOffService.addItemToBoughtList(item);    
  }
}

AlreadyBoughtController.$inject= ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getItemsToBoughtList();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of items
  var itemsToBuyList = [
    {
      name: "cockie",
      quantity: 10
    },
    {
      name: "milk",
      quantity: 2
    },
    {
      name: "coffie",
      quantity:5
    },
    {
      name: "ice-cream",
      quantity: 6
    },
    {
      name: "water",
      quantity: 10
    },
  ];

  var itemsBoughtList = [];

  service.getItemsToBuyList = function () {
    return itemsToBuyList;
  };

  service.getItemsToBoughtList = function () {
    return itemsBoughtList;
  };

  service.removeItemFromToBuyList = function (itemIdex) {
    itemsToBuyList.splice(itemIdex, 1);
  };

  service.addItemToBoughtList = function (item) {
    itemsBoughtList.push(item);
  }
}

})();
