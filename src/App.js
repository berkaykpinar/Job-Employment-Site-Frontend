import "./App.css";
import { Container } from "semantic-ui-react";
import Navi from "./layouts/Navi";
import Dashboard from "./layouts/Dashboard";
import "semantic-ui-css/semantic.min.css";
function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}
//style={{ background: "chocolate   " }}
export default App;
