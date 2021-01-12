app.controller('ledger', function($scope) {
  $scope.items = [
    {Name:"Abel", Amount:1.20},
    {Name:"Bob", Amount:2.00}
  ];
  $scope.total = function(items) {
     var sum = 0;
     for(var i = 0 ; i<items.length ; i++){
        sum = sum + items[i].Amount;
     }
     return sum;
  }
});
