import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import {Projects} from "./pages/projects/projects";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;