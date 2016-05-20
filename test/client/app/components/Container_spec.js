import { React, shallow, expect, sinon } from '../../../../test/SetUpHelper.js';
import Container from '../../../../src/client/app/components/Container.jsx';
import Form from '../../../../src/client/app/components/Form.jsx';

describe('Container', ()=> {
  it('contains a form', ()=> {
    const wrapper = shallow(<Container/>);
    expect(wrapper.find(Form).length).to.equal(1);
  });
});
