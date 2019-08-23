import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search component', () => {
  it('renders Search', () => {
    const wrapper = shallow(<Search text="sup" handleChange={() => {}}  handleClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
