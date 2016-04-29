import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import App from '../src/client/app/components/App.jsx';
import chai from 'chai';



describe('<App />', ()=> {
let expect = chai.expect; 
  it('renders the header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<h1>Pick-a-movie</h1>)).to.equal(true);
  });
});
