import React from 'react';
import { shallow } from 'enzyme';
import AlbumArt from './AlbumArt';

describe('AlbumArt component', () => {
  it('renders AlbumArt', () => {
    const wrapper = shallow(<AlbumArt release={{ title:'', date:'', id:'', artistId:'', 'cover-art-archive':{} }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
