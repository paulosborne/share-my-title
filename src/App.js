import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Login, ImagePicker, ShareTitle } from './screens';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
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

export default App;
