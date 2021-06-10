import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Introduction from './components/Introduction';
import LinksAndStatisticsSection from './components/LinksAndStatisticsSection';

function App() {
  return (
    <div>
        <Header/>
        <Router>
          <Route path="/">
            <Introduction/>
            <LinksAndStatisticsSection/>
          </Route>
        </Router>
    </div>
  );
}

export default App;
