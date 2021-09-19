import ArduinoRegister from './views/ArduinoRegister';
import SelectStudentRedes from './views/SelectStudentRedes';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/select-student-redes" component={() => <SelectStudentRedes />} />
        <Route path="/" component={() => <ArduinoRegister />} />
      </Switch>
      </Router>
  );
}

export default App;
