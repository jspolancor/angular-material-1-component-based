/**
 * @author Author name <example@email.com>
 */

import './home.scss';
import {HomeController as controller} from './home.controller';
import template from './home.html';

export const homeDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
