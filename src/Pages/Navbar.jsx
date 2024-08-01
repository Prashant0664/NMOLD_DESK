import React from 'react'
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className='bg-black w-[15%] h-full left-0 absolute block mt-[4rem]'>
                <div className='text-white'>
                    <div className='navbar-content'>
                        <Link to="/pendingtickets">Pending Tickets</Link>
                    </div>
                    <div className='navbar-content'>
                        <Link to="/approvedtickets">Approved Tickets</Link>
                    </div>
                    <div className='navbar-content'>
                        <Link to="/contactrequests">Contact Requests</Link>
                    </div>
                    <div className='navbar-content'>
                        <Link to="/sponsors">Sponsor</Link>
                    </div>
                    <div className='navbar-content'>
                        <Link to="/stalls">Stall Booking</Link>
                    </div>
                    <div className='navbar-content'>
                        <Link to="/visitors">Visitors</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar