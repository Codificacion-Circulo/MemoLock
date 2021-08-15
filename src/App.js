import React, { Suspense } from 'react';
import { Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import Layout from './layout/Layout'
import LoadingSpinner from './components/LoadingSpinner'
import Error from './pages/Error'
import Create from './pages/Create'
import Home from './pages/Home'
import View from './pages/View'
import Revoke from './pages/Revoke'


function App() {
  return (
    <BrowserRouter>
    
    <Layout>
    <Suspense
      fallback={
        <div className='centered'>
          <LoadingSpinner />
        </div>
      }
    >

    <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' exact>
            <Home />
          </Route>
          <Route path='/upload' exact>
            <Create />
          </Route>
          <Route path='/download/:id' exact>
            <View/>
          </Route>
          <Route path='/revoke/:id' exact>
            <Revoke/>
          </Route>

          <Route path='*'>
            <Error />
          </Route>
        </Switch>

    </Suspense>
  </Layout>
  </BrowserRouter>
  );
}

export default App;
