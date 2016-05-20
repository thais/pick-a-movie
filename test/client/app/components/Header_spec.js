import { React, shallow, expect } from '../../../../test/SetUpHelper.js';
import Header from '../../../../src/client/app/components/Header.jsx';

describe('Header', ()=> {
  it('Contains a title',  ()=> {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).to.equal(1);
  });
});
