import { React, shallow, mount, expect } from '../../../../test/SetUpHelper.js';
import Match from '../../../../src/client/app/components/Match.jsx';
import Container from '../../../../src/client/app/components/Container.jsx';
import ReactTestUtils from 'react-addons-test-utils';

describe('Match', ()=> {
  it('should have two containers',  ()=> {
    const wrapper = shallow(<Match />);
    expect(wrapper.find(Container)).to.have.length(2);
  });
});
