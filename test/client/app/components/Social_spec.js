import { React, expect, shallow } from '../../../../test/SetUpHelper.js';
import Social from '../../../../src/client/app/components/Social.jsx';


describe('Social', ()=> {
  it('has a link for github', () => {
    const wrapper = shallow(<Social />);
    expect(wrapper.find('a.social-github')).to.have.length(1);
  });

  it('has a link for facebook', () => {
    const wrapper = shallow(<Social />);
    expect(wrapper.find('a.social-facebook')).to.have.length(1);
  });
});
