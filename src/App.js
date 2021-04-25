
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListResourceComponent from './components/ListResourceComponent';
import ViewResourceComponent from "./components/ViewResourceComponent";
import CreateResourceComponent from './components/CreateResourceComponent'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListResourceComponent}></Route>
            <Route path="/resources" exact component={ListResourceComponent}></Route>
            <Route path="/getallresourcesbyid/:id" component={ViewResourceComponent}></Route>
            <Route path="/addresource/_add" component={CreateResourceComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
