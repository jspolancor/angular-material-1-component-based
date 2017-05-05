/**
 * @author Author name <example@email.com>
 */

import {homeDirective} from './home.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const home = angular.module('home', [uiRouter])
  // Every component is created as an independent view, if you dont need it to
  // be a view remove the state below
  .config(($stateProvider) => {
    $stateProvider.state('home', {
      url: '/',
      // If you're using a complex component name like: complexComponentName
      // the tag for the component will be: 
      // <complexComponentName></complexComponentName>
      // If you try to acces the route is not going to work, you have to change
      // the tag to <complex-component-name></complex-component-name>
      template: '<home></home>'
    })
  })
  .directive('home', homeDirective);
