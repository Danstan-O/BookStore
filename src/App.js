import './App.css';
import { Home, SignUp, LogIn } from './pages';
import AuthProvider from './provider/authProvider';
// import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
    // <Router>
    //   <Routes>
    //     <Route path="/log-in" element={<LogIn />} />
    //     <Route path="/sign-up" element={<SignUp />} />
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
