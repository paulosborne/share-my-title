import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { withAuthenticator } from 'aws-amplify-react';
import { Home, Login, ImagePicker, ShareTitle } from './screens';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/your-details">
          <Login />
        </Route>
        <Route path="/image-picker">
          <ImagePicker />
        </Route>
        <Route path="/share">
          <ShareTitle />
        </Route>
      </Switch>
    </Router>
  );
}

export default withAuthenticator(App);
