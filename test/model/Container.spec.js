/**
 * synactaclientjs
 * WebApi
 *
 * OpenAPI spec version: v1
 * Contact: bhofmann@agile-is.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Synactaclientjs);
  }
}(this, function(expect, Synactaclientjs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Synactaclientjs.Container();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Container', function() {
    it('should create an instance of Container', function() {
      // uncomment below and update the code to test Container
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be.a(Synactaclientjs.Container);
    });

    it('should have the property properties (base name: "Properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property propertyInfos (base name: "PropertyInfos")', function() {
      // uncomment below and update the code to test the property propertyInfos
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property objectType (base name: "ObjectType")', function() {
      // uncomment below and update the code to test the property objectType
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property parentID (base name: "ParentID")', function() {
      // uncomment below and update the code to test the property parentID
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property parentType (base name: "ParentType")', function() {
      // uncomment below and update the code to test the property parentType
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property isVirtual (base name: "IsVirtual")', function() {
      // uncomment below and update the code to test the property isVirtual
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property frozen (base name: "Frozen")', function() {
      // uncomment below and update the code to test the property frozen
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property hasChild (base name: "HasChild")', function() {
      // uncomment below and update the code to test the property hasChild
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property checkedOutBy (base name: "CheckedOutBy")', function() {
      // uncomment below and update the code to test the property checkedOutBy
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "Version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property hash (base name: "Hash")', function() {
      // uncomment below and update the code to test the property hash
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property odataContext (base name: "@odata.context")', function() {
      // uncomment below and update the code to test the property odataContext
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property odataReadLink (base name: "@odata.readLink")', function() {
      // uncomment below and update the code to test the property odataReadLink
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property childodataNavigationLink (base name: "Child@odata.navigationLink")', function() {
      // uncomment below and update the code to test the property childodataNavigationLink
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property documentodataNavigationLink (base name: "Document@odata.navigationLink")', function() {
      // uncomment below and update the code to test the property documentodataNavigationLink
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property parentodataNavigationLink (base name: "Parent@odata.navigationLink")', function() {
      // uncomment below and update the code to test the property parentodataNavigationLink
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property fullODataLinkodataNavigationLink (base name: "FullODataLink@odata.navigationLink")', function() {
      // uncomment below and update the code to test the property fullODataLinkodataNavigationLink
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property standardODataLinkodataNavigationLink (base name: "StandardODataLink@odata.navigationLink")', function() {
      // uncomment below and update the code to test the property standardODataLinkodataNavigationLink
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property noneODataLinkodataNavigationLink (base name: "NoneODataLink@odata.navigationLink")', function() {
      // uncomment below and update the code to test the property noneODataLinkodataNavigationLink
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property odataEditLink (base name: "@odata.editLink")', function() {
      // uncomment below and update the code to test the property odataEditLink
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property odataEtag (base name: "@odata.etag")', function() {
      // uncomment below and update the code to test the property odataEtag
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property odataMetadataEtag (base name: "@odata.metadataEtag")', function() {
      // uncomment below and update the code to test the property odataMetadataEtag
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

    it('should have the property odataPicklistLink (base name: "@odata.PicklistLink")', function() {
      // uncomment below and update the code to test the property odataPicklistLink
      //var instane = new Synactaclientjs.Container();
      //expect(instance).to.be();
    });

  });

}));
