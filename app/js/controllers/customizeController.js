'use strict';

angular.module('liineApp.controllers.customize', ['liineApp.services.customize'])
  .controller('CustomizeController', ['$scope','customizeService',
    function($scope,customizeService) {

      $scope.image_urls = [];
      $scope.payment_items = [];

      $scope.getImages = function(company_id) {
        customizeService.images.get({company_id:company_id},function(response) {
            console.log("Response from getting images:");
            console.log(response);
            $scope.image_urls = [];
            if (response.image_urls !== null) {
              $scope.image_urls = response.image_urls;
            }

        },function(errorResponse) {
            console.log("Error getting competitors:");
            console.log(errorResponse);
        } );
      };

      $scope.saveImages = function(company_id) {
        console.log("Trying to save images...");

        customizeService.images.save([],{company_id:company_id, image_urls: $scope.image_urls},function(value, responseHeader) {
            console.log("Response from trying to update images:");
            console.log(value);
        },function(errorResponse) {
            console.log("Error updating custom images:");
            console.log(errorResponse);
        } );
      };

      $scope.getPaymentItems = function(company_id) {
        customizeService.payment_items.get({company_id:company_id},function(response) {
            console.log("Response from getting payment items:");
            console.log(response);
            $scope.payment_items = [];
            if (response.payment_items !== null) {
              $scope.payment_items = response.payment_items;
            }

        },function(errorResponse) {
            console.log("Error getting payment items:");
            console.log(errorResponse);
        } );
      };

      $scope.savePaymentItems = function(company_id) {
        console.log("Trying to save payment items...");

        customizeService.payment_items.save([],{company_id:company_id, payment_items: $scope.payment_items},function(value, responseHeader) {
            console.log("Response from trying to update payment items:");
            console.log(value);
        },function(errorResponse) {
            console.log("Error updating payment items:");
            console.log(errorResponse);
        } );
      };

      // $scope.addCompetitor = function(competitor_id) {
      //   console.log("Competitor Added");
      //   $scope.competitors[competitor_id + ""] = $scope.other_companies[competitor_id + ""];
      //   delete $scope.other_companies[competitor_id + ""];
      // };

      // $scope.removeCompetitor = function(competitor_id) {
      //   console.log("Competitor Removed");
      //   $scope.other_companies[competitor_id + ""] = $scope.competitors[competitor_id + ""];
      //   delete $scope.competitors[competitor_id + ""];
      // };

      // $scope.isCurrentCompetitor = function(competitor_id) {
      //   return $scope.competitors.hasOwnProperty(competitor_id);
      // };



    }]);
