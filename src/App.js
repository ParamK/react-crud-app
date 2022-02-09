import './App.css';
import Create from './components/CreateComp';
import Read from './components/ReadComp';
import Update from './components/UpdateComp';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='main'>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div>
          <Route exact path='/' component={Read} />
        </div>
        <div>
          <Route exact path='/update' component={Update} />
        </div>
      </div>
    </Router>

  );
}

export default App;
