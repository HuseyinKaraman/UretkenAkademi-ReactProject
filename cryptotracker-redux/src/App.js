import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Main from './components/Main'
import "./App.css";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>} />
      </Routes>
    </Router>
  );
}
