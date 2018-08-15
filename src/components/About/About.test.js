import React from "react";
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import About from './About';

Enzyme.configure({ adapter: new Adapter() });
