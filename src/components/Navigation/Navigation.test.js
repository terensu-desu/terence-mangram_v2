import React from "react";
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from './Navigation';

Enzyme.configure({ adapter: new Adapter() });

xdescribe("Navigation", () => {

	describe("When isAuth is defined", () => {
		it("Renders when isAuth prop is defined", () => {
			const navigation = mount(<Navigation isAuth={true} />);
			expect(navigation.props().isAuth).toBe(true);
		});

		it("Renders a Profile link", () => {
			const navigation = mount(<Navigation isAuth={true} />);
			const listItem = navigation.find("ul").childAt(4);
			expect(listItem.find("a").text()).toBe("Profile");
		});

		it("Renders a Log Out link", () => {
			const navigation = mount(<Navigation isAuth={true} />);
			const listItem = navigation.find("ul").childAt(5);
			expect(listItem.find("a").text()).toBe("Log out");
		});
	});

	describe("When isAuth is undefined", () => {
		it("Renders when isAuth prop is undefined", () => {
			const navigation = mount(<Navigation isAuth={undefined} />);
			expect(navigation.props().isAuth).toBe(undefined);
		});

		it("Renders a Sign Up link", () => {
			const navigation = mount(<Navigation isAuth={undefined} />);
			const listItem = navigation.find("ul").childAt(4);
			expect(listItem.find("a").text()).toBe("Sign up");
		});

		it("Renders a Log In link", () => {
			const navigation = mount(<Navigation isAuth={undefined} />);
			const listItem = navigation.find("ul").childAt(5);
			expect(listItem.find("a").text()).toBe("Log in");
		});
	});

});