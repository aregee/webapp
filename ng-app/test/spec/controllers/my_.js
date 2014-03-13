'use strict';

describe('Controller: MyCtrlCtrl', function () {

  // load the controller's module
  beforeEach(module('ngAppApp'));

  var MyCtrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyCtrlCtrl = $controller('MyCtrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
