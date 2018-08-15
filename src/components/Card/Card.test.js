import React from "react";
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './Card';

Enzyme.configure({ adapter: new Adapter() });
