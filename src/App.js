import './App.css';
import Pendingtickets from './Pages/Pendingtickets';
import Navbar from './Pages/Navbar';
import Sponsors from './Pages/Sponsors';
import Visitors from './Pages/Visitors';
import UpdateVisitor from './Pages/UpdateVisitor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApprovedTickets from './Pages/ApprovedTickets';
import ContactRequests from './Pages/ContactRequests';
import Stalls from './Pages/Stalls';
import Welcome from './Pages/Welcome';
import TopNavbar from './Pages/TopNavbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import React from 'react';
// /* Developed by https://github.com/Prashant0664 */

function App() {
  const [state, setstate] = React.useState(false)
  // if url is / then redirect to /home
  React.useEffect(() => {
    if (window.location.pathname === "/") {
      setstate(false)
    }
    else {
      setstate(true)
    }
    console.log(state, "ss");
  }, [window.location.pathname, state])

  return (
    <>
      <BrowserRouter>
        <div className={`${state === true ? "hidden" : ""}`}>
          <Login seturl={setstate} />
        </div>
        <div className={`${state === true ? "" : "hidden"}`}>
          <TopNavbar />
          <Navbar />
        </div>
        <Routes>
          <Route path="/home" element={<Welcome />} />
          <Route path="/pendingtickets" element={<Pendingtickets />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/updatevisitor" element={<UpdateVisitor />} />
          <Route path="/approvedtickets" element={<ApprovedTickets />} />
          <Route path="/contactrequests" element={<ContactRequests />} />
          <Route path="/stalls" element={<Stalls />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
