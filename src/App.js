import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import Toolbar from './components/Toolbar/Toolbar'
import Home from './components/Home/Home'
import Packages from './components/products/products';
import Product from './components/products/productsDetails/ProductDetails'
import history from './utils/History/history'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Toolbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/package/:area" exact component={Packages} />
          <Route path="/package/:area/:detail" exact component={Product} />
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
