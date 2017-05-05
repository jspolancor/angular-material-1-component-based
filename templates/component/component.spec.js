/**
 * @author Author name <example@email.com>
 */

import {<%= name %>} from './<%= name %>'
import {<%= upCaseName %>Controller} from './<%= name %>.controller';
import {<%= name %>Directive} from './<%= name %>.directive';
import template from './<%= name %>.html';

describe('<%= upCaseName %>', ()=>{
  let $rootScope,
  makeController;

  beforeEach(window.module(<%= name %>.name));
  beforeEach(inject((_$rootScope_)=>{
    $rootScope = _$rootScope_;
    makeController = ()=>{
      return new <%= upCaseName %>Controller();
    };
  }));

  describe('Module', ()=>{
    // test things about the component module
    // checking to see if it registers certain things and what not
    // test for best practices with naming too
    // test for routing
  });

  describe('Controller', ()=>{
    // test your controller here
  });

  describe('Template', ()=>{
    // test the template
    // use Regexes to test that you are using the right bindings {{  }}
  });


  describe('Directive', ()=>{
      // test the component/directive itself
      let directive = <%= name %>Directive();

      it('should use the right template',()=>{
        expect(directive.template).to.equal(template);
      });

      it('should use controllerAs', ()=>{
        expect(directive).to.have.property('controllerAs');
      });

      it('should use the right controller', ()=>{
        expect(directive.controller).to.equal(<%= upCaseName %>Controller);
      });
  });
});
