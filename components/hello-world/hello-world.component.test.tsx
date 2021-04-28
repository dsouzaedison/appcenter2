import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {HelloWorld} from './hello-world.component';

configure({ adapter: new Adapter() });

describe('HelloWorld', () => {
  it('should render my component', () => {
    const component = shallow(<HelloWorld />);
    expect(component.getElements()).toMatchSnapshot();
  });
});
