angular.module('starter.controllers', [])

.controller('ToDoCtrl', function($scope, $ionicModal, $ionicPopover) {
  $scope.itemId = 1;

  $scope.data = {
    showDelete: false
  };

  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };

  $scope.mark = function(item) {
    alert('Share Item: ' + item.id);
  };

  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };

  $scope.items = [
    {
      id: 0,
      name: 'Example'
    }
  ];

  $ionicModal.fromTemplateUrl('templates/addtask-modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('templates/options-popover.html', {
    scope: $scope
  }).then(function(popover) {
    $scope.popover = popover;
  });

  $scope.openPopover = function($event) {
    $scope.popover.show($event);
  };

  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hidden popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });

  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

  $scope.addTask = function(u) {
    if (u.name) {
      $scope.items.push({
          id: $scope.itemId++,
          name: u.name
        });
      $scope.modal.hide();
      $scope.items.name = '';
    }
  };
})

.controller('HelpCtrl', function($scope) {

});
