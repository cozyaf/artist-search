import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(<List list={[{}]} keyName="" ListItem={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
