import { shallow } from 'enzyme';
import { expect } from 'chai';
import List from '../../../../src/client/app/components/List.jsx';
import Item from '../../../../src/client/app/components/Item.jsx';
import React from 'react';

describe('List', () => {
  const shallowRender = (items) => {
    return shallow(<List items={items} />);
  };

  it('renders no item if list is empty', () => {
    const wrapper = shallowRender([]);
    expect(wrapper.find(Item)).to.have.length(0);
  });

  it('renders items if list is not empty', () => {
    const wrapper = shallowRender(['some text']);
    expect(wrapper.find(Item)).to.have.length(1);
  });
});

