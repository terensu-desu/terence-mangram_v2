import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Navigation from './components/Navigation';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe("Challenge App", () => {
	let props;
	let mountedApp;

	const app = () => {
		if(!mountedApp) {
			mountedApp = shallow(<App />);
		}
		return mountedApp;
	}

	beforeEach(() => {
		mountedApp = undefined;
	});

	describe("The rendered div", () => {

		it("Has three children", () => {
			expect(app().children().length).toBe(3);
		});

		it("The Navigation component always renders", () => {
			expect(app().find(Navigation).length).toBe(1);
		});
		
	});

});