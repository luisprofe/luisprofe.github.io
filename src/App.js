import ArduinoRegister from './views/ArduinoRegister';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={() => <ArduinoRegister />} />
      </Switch>
      </Router>
  );
}

export default App;
