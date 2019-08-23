import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from './SearchResult';

describe('SearchResult component', () => {
  it('renders SearchResult', () => {
    const wrapper = shallow(<SearchResult searchResult={{ id:'', name:'', disambiguation:'' }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
