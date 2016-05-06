import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import App from '../../../../src/client/app/components/App.jsx';
import Header from '../../../../src/client/app/components/Header.jsx';
import { expect } from 'chai';

describe('App', ()=> {
  it('renders the header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.length(1);
  });
});
