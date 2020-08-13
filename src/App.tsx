import React from 'react';
import { UserContextProvider } from './context/context'
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';


function App() {

  return (
    <UserContextProvider>
      <div className="container">
        <Layout>
          <Sidebar />
          <Route exact path="/" component={Dashboard} />
          <Route path="/reports" component={Reports} />
        </Layout>
      </div>
    </UserContextProvider>
  );

}

export default App;
