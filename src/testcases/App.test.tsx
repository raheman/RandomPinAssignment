import React from 'react';
import { shallow, mount } from 'enzyme';
import  App  from '../components/App';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import ReactDOM from 'react-dom';

import reducer from '../redux/reducer';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store=createStore(reducer);
configure({ adapter: new EnzymeAdapter() });


describe('App Compomemt Test Cases', () => {
    let wrapper: any;
    let setGeneratedPins = jest.fn();
    wrapper = shallow(<App />)
    test('Snapshot test', () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("should render without crashing", () => {
        const div = document.createElement("div");
        div.id = "root";
        document.body.appendChild(div);
        require("../index.tsx");
        expect(ReactDOM.render).toBeTruthy();
      });
    
    test('Div Length', () => {
        expect(wrapper.length).not.toBe(null);
    })    
   
    test('Testing Divs Length', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
    
   
})
