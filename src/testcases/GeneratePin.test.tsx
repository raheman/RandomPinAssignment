import React from 'react';
import {  mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import GeneartePin from '../components/GeneartePin';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';



import { Provider } from 'react-redux';



configure({ adapter: new EnzymeAdapter() });





describe('Generate Pin Compomemt Test Cases', () => {
    const mockStore = configureStore();

    const initialState={
        randomObj:{},
        nameObj:{}
    
    }

    let store:any,wrapper:any

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}> <GeneartePin /></Provider> )
    })
   
   

    let container:any;
    // wrapper = mount(<GeneratePin />)

    it('should simulate button generate click', () => {
        const mockedFunction = jest.fn();
  
        expect(wrapper.find('button').length).toEqual(1);
  
        wrapper.find('button').simulate('click');
  
        expect(mockedFunction).toBeTruthy();
     });
     it('should simulate button save click', () => {
        const mockedFunction = jest.fn();
  
        expect(wrapper.find('input').length).toEqual(1);
  
        wrapper.find('input').simulate('click');
  
        expect(mockedFunction).toBeTruthy();
     });
  

    it('defines the component', () => {
        // console.log('wrapper is', wrapper.debug());
        expect(wrapper).toBeDefined();
      });

      
        beforeEach(() => {
          container = wrapper.find("button");
         
        });
    
    test('GeneratePin Snapshot test', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test(' Divs Length', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
    test('Generate Pin Button Test', () => {
        expect(wrapper.find('table').length).toEqual(1);
    })
  

})
