import React, { Suspense } from 'react';
import { Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import Layout from './layout/Layout'
import LoadingSpinner from './components/LoadingSpinner'
import Error from './pages/Error'
import Create from './pages/Create'
import Home from './pages/Home'
import View from './pages/View'





import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'


function getLibrary(provider) {
  return new Web3(provider)
}


function App() {
  return (
    <BrowserRouter>
      <Web3ReactProvider getLibrary={getLibrary}>
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
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/view/:id'>
            <View/>
          </Route>

          <Route path='*'>
            <Error />
          </Route>
        </Switch>

    </Suspense>
  </Layout>
  </Web3ReactProvider>
  </BrowserRouter>
  );
}

export default App;
