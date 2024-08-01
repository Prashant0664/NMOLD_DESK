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
// /* Developed by https://github.com/Prashant0664 */

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
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
