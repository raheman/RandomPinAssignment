import React from 'react';
import '../css/App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import GeneartePin from './GeneartePin';
import 'react-tabs/style/react-tabs.css';
import SavedPins from './SavedPins';

export default class App extends React.Component<any,any> {
  constructor(props: any, context: any) {
      super(props,context);
      this.state={
          generateTab: true
      };
  }

  render(){
      return(
          <div >
            <Tabs >
            <TabList>
              <Tab>Generate</Tab>
              <Tab>Saved</Tab>
            </TabList>
        
            <TabPanel >
              <GeneartePin/>
            </TabPanel>
            <TabPanel>
              <SavedPins/>
            </TabPanel>
          </Tabs>
          </div>
      )
  }
}


