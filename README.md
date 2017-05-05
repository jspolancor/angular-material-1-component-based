# Angular material 1 + webpack + babel + ES6 + sass component based starter project

The component approach in angular is simple. Basically, removing all the standalone controllers that were bound to views and treating directives as first class citizens. Creating mini application pieces that are self defined and can be used to compose our application. Angular 2 takes this approach as does React, and web components.

The benefits of this approach are plenty. From better organization and collaboration, to easier re-usability and simpler reasoning about your code. The component approach is here to stay.

## Components

Every component shares the same file tree

```
component
│   component.controller.js
│   component.directive.js
│   component.html
│   component.js
│   component.scss
│   component.spec.js
____components
```

- _component.controller.js_ : Main controller, ES6 class
- _component.directive.js_ : ES6 constant with the directive's data
- _component.html_ : Template, HTML
- _component.js_ : Module and route declarations
- _component.scss_ : SASS component styles
- _component.spec.js_ : Spec file
- _components_ : Folder for child conponents

## Installation

Requirements:

- node js
- npm
- gulp

After cloning the repo you should install the npm dependencies

```
npm install
```

Running the development server

```
npm start
```

## Development

To create a new component you simply run

```
gulp component --name myComponent
```
This will generate the component's files inside the folder _client/app/components_.

After you create the component it should be registered on the app module

```javascript
import {myComponent} from './components/myComponent/myComponent';

angular.module('app', [
  uiRouter,
  ngAnimate,
  ngMaterial,
  shared.name,
  // Register the module by using its name
  myComponent.name
])
```
Factories and constants should be registered in the shared module 

If a components have child components with individial controllers ($mdDialog), you have to create a folder called *components* inside the component folder, and inside this folder create subfolders for every child.

### Testing

Tools

- karma
- mocha
- chai

Every generated component has its own spec file _component.spec.js_  

to run all tests you can run

```
npm test
```

### Notes

This project is created based on the course *Component-Based Architecture in AngularJS 1.x and ES6* by Scott Moss on Frontend masters.

Angular material [Angular Material](https://material.angularjs.org/latest/) 

For more information about the arquitecture [This page](http://fem-ng6.netlify.com/)