import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home';

function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/:lang" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
