import { expect } from 'chai';
import React from 'react';
import Header from '../../src/components/Header.jsx';
import createComponent from '../utils/create-component';



describe('Header component', function() {
  let header;

  beforeEach(function() {
    header = createComponent(Header);
  });

  it('should render a header component', function() {
    expect(header.props.className).to.equal('header');
  });

  it('should render load', function() {
    const expectedChildren = React.DOM.h1(null,React.DOM.a({href: "http://localhost:3010"},React.DOM.img({src: "/images/React.js_logo.png",alt: "Shopping Cart",className: "company-logo"})));
    expect(header.props.children[0]).to.deep.equal(expectedChildren);
  });

});