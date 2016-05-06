import { React, shallow, expect } from '../../../../test/SetUpHelper.js';
import App from '../../../../src/client/app/components/App.jsx';
import Header from '../../../../src/client/app/components/Header.jsx';

describe('App', ()=> {
  it('renders the header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.length(1);
  });
});
