import React from 'react'
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className='bg-black w-[15%] h-full left-0 absolute block mt-[4rem] max-[1100px]:hidden'>
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
            <div className='bg-black w-[100%] min-[1100px]:hidden h-[3rem] left-0 absolute block mt-[4rem]'>
                <div className='text-white flex justify-evenly'>
                    <div className='navbar-content2'>
                        <Link to="/pendingtickets">
                            <div className=''>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0137 17L14.0079 19.0029C14.0065 19.4731 14.0058 19.7081 13.8591 19.8541C13.7124 20 13.4767 20 13.0054 20H9.99502C6.21438 20 4.32407 20 3.14958 18.8284C2.34091 18.0218 2.08903 16.8766 2.01058 15.0105C1.99502 14.6405 1.98724 14.4554 2.05634 14.332C2.12545 14.2085 2.40133 14.0545 2.95308 13.7463C3.56586 13.4041 3.98007 12.7503 3.98007 12C3.98007 11.2497 3.56586 10.5959 2.95308 10.2537C2.40133 9.94554 2.12545 9.79147 2.05634 9.66802C1.98724 9.54458 1.99502 9.35954 2.01058 8.98947C2.08903 7.12339 2.34091 5.97823 3.14958 5.17157C4.32407 4 6.21439 4 9.99502 4H13.5052C13.7814 4 14.0056 4.22298 14.0064 4.49855L14.0137 7C14.0137 7.55228 14.4625 8 15.0162 8L15.0162 10C14.4625 10 14.0137 10.4477 14.0137 11V13C14.0137 13.5523 14.4625 14 15.0162 14V16C14.4625 16 14.0137 16.4477 14.0137 17Z" fill="#d6d6d6"></path> <path opacity="0.5" d="M15.0166 15.9998C15.5703 15.9998 16.0191 16.4475 16.0191 16.9998V18.9763C16.0191 19.4578 16.0191 19.6986 16.1735 19.8462C16.3279 19.9939 16.5641 19.9839 17.0366 19.9639C18.8995 19.885 20.0441 19.633 20.8508 18.8282C21.6595 18.0216 21.9114 16.8764 21.9898 15.0104C22.0054 14.6403 22.0132 14.4552 21.9441 14.3318C21.875 14.2083 21.5991 14.0543 21.0473 13.7462C20.4346 13.404 20.0203 12.7501 20.0203 11.9998C20.0203 11.2495 20.4346 10.5957 21.0473 10.2535C21.5991 9.94536 21.875 9.7913 21.9441 9.66785C22.0132 9.5444 22.0054 9.35936 21.9898 8.98929C21.9114 7.12321 21.6595 5.97805 20.8508 5.17139C19.9731 4.29586 18.6956 4.07463 16.5282 4.01872C16.2486 4.01151 16.0191 4.237 16.0191 4.516V6.99982C16.0191 7.55211 15.5703 7.99982 15.0166 7.99982L15.0166 9.99982C15.5703 9.99982 16.0191 10.4475 16.0191 10.9998V12.9998C16.0191 13.5521 15.5703 13.9998 15.0166 13.9998V15.9998Z" fill="#d6d6d6"></path> </g></svg>
                            </div>
                        </Link>
                    </div>
                    <div className='navbar-content2'>
                        <Link to="/approvedtickets">
                            <div className=''>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10.9023 19.8701H17.3723C21.0723 19.8701 21.9923 18.9501 21.9923 15.2501C20.7123 15.2501 19.6823 14.2101 19.6823 12.9401C19.6823 11.6601 20.7123 10.6201 21.9923 10.6201V9.70008C21.9923 6.00008 21.0723 5.08008 17.3723 5.08008H10.9923V11.8701" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10.9936 16.87V19.87H8.22356C6.74356 19.87 5.87357 18.86 4.91357 16.54L4.73356 16.09C5.94356 15.61 6.53357 14.21 6.02357 13C5.53357 11.79 4.14357 11.21 2.92357 11.71L2.75357 11.28C1.31356 7.76 1.81357 6.53 5.33357 5.08L7.97357 4L10.9936 11.32V13.87" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.16219 19.8701H7.99219" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </div>
                        </Link>
                    </div>
                    <div className='navbar-content2'>
                        <Link to="/contactrequests">
                            <div className=''>
                                <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3ZM12,7.5a2,2,0,1,1-2,2A2,2,0,0,1,12,7.5ZM8.211,16.215a4,4,0,0,1,7.578,0A.993.993,0,0,1,14.83,17.5H9.18A1,1,0,0,1,8.211,16.215Z"></path></g></svg>
                            </div>
                        </Link>
                    </div>
                    <div className='navbar-content2'>
                        <Link to="/sponsors">
                            <div className=''>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z" stroke="#ffffff" stroke-width="1.5"></path> <path opacity="0.5" d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6" stroke="#ffffff" stroke-width="1.5"></path> <path opacity="0.5" d="M12 17.3333C13.1046 17.3333 14 16.5871 14 15.6667C14 14.7462 13.1046 14 12 14C10.8954 14 10 13.2538 10 12.3333C10 11.4129 10.8954 10.6667 12 10.6667M12 17.3333C10.8954 17.3333 10 16.5871 10 15.6667M12 17.3333V18M12 10V10.6667M12 10.6667C13.1046 10.6667 14 11.4129 14 12.3333" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                            </div>
                        </Link>
                    </div>
                    <div className='navbar-content2'>
                        <Link to="/stalls">
                            <div className=''>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 8V12L15 15" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <circle cx="12" cy="12" r="9" stroke="#ffffff" stroke-width="2"></circle> </g></svg>
                            </div>
                        </Link>
                    </div>
                    <div className='navbar-content2'>
                        <Link to="/visitors">
                            <div className=''><svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M23.313 26.102l-6.296-3.488c2.34-1.841 2.976-5.459 2.976-7.488v-4.223c0-2.796-3.715-5.91-7.447-5.91-3.73 0-7.544 3.114-7.544 5.91v4.223c0 1.845 0.78 5.576 3.144 7.472l-6.458 3.503s-1.688 0.752-1.688 1.689v2.534c0 0.933 0.757 1.689 1.688 1.689h21.625c0.931 0 1.688-0.757 1.688-1.689v-2.534c0-0.994-1.689-1.689-1.689-1.689zM23.001 30.015h-21.001v-1.788c0.143-0.105 0.344-0.226 0.502-0.298 0.047-0.021 0.094-0.044 0.139-0.070l6.459-3.503c0.589-0.32 0.979-0.912 1.039-1.579s-0.219-1.32-0.741-1.739c-1.677-1.345-2.396-4.322-2.396-5.911v-4.223c0-1.437 2.708-3.91 5.544-3.91 2.889 0 5.447 2.44 5.447 3.91v4.223c0 1.566-0.486 4.557-2.212 5.915-0.528 0.416-0.813 1.070-0.757 1.739s0.446 1.267 1.035 1.589l6.296 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.809zM30.312 21.123l-6.39-3.488c2.34-1.841 3.070-5.459 3.070-7.488v-4.223c0-2.796-3.808-5.941-7.54-5.941-2.425 0-4.904 1.319-6.347 3.007 0.823 0.051 1.73 0.052 2.514 0.302 1.054-0.821 2.386-1.308 3.833-1.308 2.889 0 5.54 2.47 5.54 3.941v4.223c0 1.566-0.58 4.557-2.305 5.915-0.529 0.416-0.813 1.070-0.757 1.739 0.056 0.67 0.445 1.267 1.035 1.589l6.39 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.779h-4.037c0.61 0.46 0.794 1.118 1.031 2h3.319c0.931 0 1.688-0.757 1.688-1.689v-2.503c-0.001-0.995-1.689-1.691-1.689-1.691z"></path> </g></svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar