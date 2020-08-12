import * as React from 'react';
import HogeContainer from '../src/containers/hogeContainer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopPage from './components/pages/topPage';

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route path="/" component={TopPage} exact />
          <Route path="/hoge">
            <div className="App">
              <HogeContainer />
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
