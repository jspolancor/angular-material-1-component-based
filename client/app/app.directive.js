/**
 * @author Author name <example@email.com>
 */

import './app.scss';
import template from './app.html';

export const appDirective = ()=> {
  return {
    template,
    restrict: 'E',
    scope: {},
    replace: true
  };
};
