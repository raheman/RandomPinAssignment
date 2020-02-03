import React from 'react';
import {  mount,shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import SavedPin from '../components/SavedPins';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

import randomPinReducer from '../redux/reducer';


import { Provider } from 'react-redux';


const initialState={
    randomObj:{},
    nameObj:{}

}
it('should return the initial state', () => {
    expect(randomPinReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle Reducer', () => {
    const startAction = {
      type: 'ON_CHANGE_HANDLER'
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(randomPinReducer({}, startAction)).toEqual({nameObj:{"undefined":undefined}});
  });

  it('should delete Reducer', () => {
    const startAction = {
      type: 'ON_DELETE_HANDLER'
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(randomPinReducer({}, startAction)).toEqual(initialState);
  });

  it('should save Reducer', () => {
    const startAction = {
      type: 'SAVE_STATE',
      arr:["1024","1653","1853","1430","1678"]
    };
    var output={
       nameObj:{"1024":""},
    randomObj:{
        "1024":["1024","1653","1853","1430","1678"]
    }
    }
    // it's empty on purpose because it's just starting to fetch posts
    expect(randomPinReducer({}, startAction)).toEqual(output);
  });

