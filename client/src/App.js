import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Onboarding from "./pages/Onboarding"
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route exact path="/dashboard" element={<Dashboard />}/>
        <Route exact path="/onboarding" element={<Onboarding />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
