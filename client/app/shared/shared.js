/**
 * @author Author name <example@email.com>
 */

import {api} from './api';
import angular from 'angular';

export const shared = angular.module('shared', [])
  .constant('API', api);

