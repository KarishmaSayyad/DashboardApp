import React from 'react';
import AppFooter from "./Components/AppFooter";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContents";
import SideMenu from "./Components/SideMenu";
import { Space } from 'antd';


function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Space className='SideMenuAndPageContent'>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
     <AppFooter/>
    </div>
  );
}

export default App;
