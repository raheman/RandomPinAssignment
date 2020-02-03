import React from 'react';
import {  mount,shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import SavedPin from '../components/SavedPins';
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
        wrapper = mount( <Provider store={store}> <SavedPin /></Provider> )
    })

    test(' Divs Length For Save Pin', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
    test('Generate Pin Button For Test', () => {
        expect(wrapper.find('table').length).toEqual(1);
    })
    it('should simulate button delete click', () => {
        expect(wrapper.find('div.ex2')).toHaveLength(1);

     });
    
    
})