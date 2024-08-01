import React from 'react';
import "../Styles/Tables.css";
const Pendingtickets = () => {
    const data = [
        {
            srno: 1,
            tickets: 2,
            price: 200,
            email: 'panda@gmail.com',
            billinginfo: 'Credit Card',
            name: 'John Doe',
            country: 'India',
            date: '12/12/2021'
        },
        {
            srno: 2,
            tickets: 4,
            price: 1500,
            email: 'monkey@gmail.com',
            billinginfo: 'Credit Card',
            name: 'John Doe',
            country: 'USA',
            date: '12/12/2021'
        },
        {
            srno: 3,
            tickets: 1,
            price: 500,
            email: 'elephant@gmail.com',
            billinginfo: 'Credit Card',
            name: 'John Doe',
            country: 'USA',
            date: '12/12/2021'
        },

        {
            srno: 3,
            tickets: 1,
            price: 500,
            email: 'snake@gmail.com',
            billinginfo: 'Credit Card',
            name: 'John Doe',
            country: 'USA',
            date: '12/12/2021'
        },

        {
            srno: 3,
            tickets: 1,
            price: 500,
            email: 'cow@gmail.com',
            billinginfo: 'Credit Card',
            name: 'John Doe',
            country: 'USA',
            date: '12/12/2021'
        },

        {
            srno: 3,
            tickets: 1,
            price: 500,
            email: 'bull@gmail.com',
            billinginfo: 'Credit Card',
            name: 'John Doe',
            country: 'USA',
            date: '12/12/2021'
        },

        {
            srno: 3,
            tickets: 1,
            price: 500,
            email: 'example4@gmail.com',
            billinginfo: 'Credit Card',
            name: 'John Doe',
            country: 'USA',
            date: '12/12/2021'
        },

        {
            srno: 3,
            tickets: 1,
            price: 500,
            email: 'example4@gmail.com',
            billinginfo: 'Credit Card',
            name: 'John Doe',
            country: 'USA',
            date: '12/12/2021'
        },

        {
            srno: 3,
            tickets: 1,
            price: 500,
            email: 'example4@gmail.com',
            billinginfo: 'Credit Card',
            name: 'John Doe',
            country: 'USA',
            date: '12/12/2021'
        },

        {
            srno: 3,
            tickets: 1,
            price: 500,
            email: 'example4@gmail.com',
            billinginfo: 'Credit Card',
            name: 'John Doe',
            country: 'USA',
            date: '12/12/2021'
        },

        {
            srno: 3,
            tickets: 1,
            price: 500,
            email: 'example4@gmail.com',
            billinginfo: 'Credit Card',
            name: 'John Doe',
            country: 'USA',
            date: '12/12/2021'
        },

        {
            srno: 3,
            tickets: 1,
            price: 500,
            email: 'example4@gmail.com',
            billinginfo: 'Credit Card',
            name: 'John Doe',
            country: 'USA',
            date: '12/12/2021'
        },

        {
            srno: 3,
            tickets: 1,
            price: 500,
            email: 'example4@gmail.com',
            billinginfo: 'Credit Card',
            name: 'John Doe',
            country: 'USA',
            date: '12/12/2021'
        },
    ]
    const [state, setstate] = React.useState(data)
    const [dir, setdir] = React.useState('asc')
    const [start, setstart] = React.useState(0)
    const [interval, setinterval] = React.useState(10)
    const sortdata = (key) => {
        if (dir === 'asc') {
            setdir('desc')
            const sorteddata = [...state].sort((a, b) => {
                if (a[key] > b[key]) {
                    return 1
                }
                if (a[key] < b[key]) {
                    return -1
                }
                return 0;
            })
            setstate(sorteddata)
        }
        else {
            setdir('asc')
            const sorteddata = [...state].sort((a, b) => {

                if (a[key] < b[key]) {
                    return 1
                }
                if (a[key] > b[key]) {
                    return -1
                }
                return 0;
            })
            setstate(sorteddata)
        }
    }
    const onSearch = (e) => {
        const searchdata = [...data].filter((item) => {
            // return (item.email.includes(e.target.value) || item.name.includes(e.target.value) || item.country.includes(e.target.value))
            return (item.email.toLowerCase().includes(e.target.value.toLowerCase()) || item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.country.toLowerCase().includes(e.target.value.toLowerCase()))
        })
        setstate(searchdata)
    }
    return (
        <>
            <div className='ml-[16%] mt-[4rem] absolute w-[83%] max-[1100px]:w-[95%] max-[1100px]:ml-[4rem]'>
                <div className=''>
                    <div className='bgc  text-white text-[25px] pl-2 py-2'>
                        Pending Requests
                    </div>
                    <div className='mt-[3rem]'>
                        <div className='flex justify-between w-full'>
                            <div className=''>
                                Show
                                <select className='bg-white border border-black mb-1 text-black'
                                    onChange={(e) => {
                                        setinterval(e.target.value)
                                        setstart(0)
                                    }}
                                >
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={30}>30</option>
                                    <option value={40}>40</option>
                                    <option value={50}>50</option>
                                </select>
                                &nbsp;
                                enteries
                            </div>
                            <div className=''>
                                Search: <input type='text' className='border border-black h-[20px]' onChange={(e) => {
                                    onSearch(e)
                                }} />
                            </div>
                        </div>
                        <div className='overflow-x-scroll'>
                            <table className='w-full text-white  py-1 pendingtickets-table '>
                                <tr className='tablerow1 bgc2 '>
                                    <th
                                        onClick={() => {
                                            sortdata('srno')
                                        }}
                                    >
                                        Sr.no.
                                    </th>
                                    <th
                                        onClick={() => {
                                            sortdata('tickets')
                                        }}
                                    >
                                        tickets
                                    </th>
                                    <th
                                        onClick={() => {
                                            sortdata('price')
                                        }}
                                    >
                                        Price
                                    </th>
                                    <th
                                        onClick={() => {
                                            sortdata('email')
                                        }}
                                    >
                                        Email
                                    </th>
                                    <th
                                        onClick={() => {
                                            sortdata('billinginfo')
                                        }}
                                    >
                                        Billing Info
                                    </th>
                                    <th
                                        onClick={() => {
                                            sortdata('name')
                                        }}
                                    >
                                        Name
                                    </th>
                                    <th
                                        onClick={() => {
                                            sortdata('country')
                                        }}
                                    >
                                        Country
                                    </th>
                                    <th
                                        onClick={() => {
                                            sortdata('date')
                                        }}
                                    >
                                        Date
                                    </th>
                                </tr>
                                {/* Code to show first x data enteries */}
                                {state.slice(start, start + interval).map((item, index) => (
                                    <tr key={index} className='text-black text-center'>
                                        <td>
                                            {item.srno}
                                        </td>
                                        <td>
                                            {item.tickets}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            {item.email}
                                        </td>
                                        <td>
                                            {item.billinginfo}
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.country}
                                        </td>
                                        <td>
                                            {item.date}
                                        </td>
                                    </tr>
                                ))}
                                {/* {state.map((item) => (
                                <tr className='text-black text-center'>
                                    <td>
                                        {item.srno}
                                    </td>
                                    <td>
                                        {item.tickets}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        {item.email}
                                    </td>
                                    <td>
                                        {item.billinginfo}
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.country}
                                    </td>
                                    <td>
                                        {item.date}
                                    </td>
                                </tr>
                            ))} */}
                            </table>
                        </div>
                        {state.length === 0 && <div className='text-center bg-white'>
                            No Data Available in Table
                            <hr className='border border-black' />
                        </div>
                        }
                        <div className='flex justify-between w-full text-[grey] mt-2'>
                            <div className=''>
                                Showing {start} to {Math.min(state.length, start + interval)} of {state.length} enteries
                            </div>
                            <div className='flex gap-4 cursor-pointer'>
                                <div className=''
                                    onClick={() => {
                                        setstart(Math.max(0, start - interval))
                                    }}
                                >
                                    Previous
                                </div>
                                <div className=''
                                    onClick={() => {
                                        if (start + interval < state.length) setstart(Math.min(state.length, start + interval));
                                    }}
                                >
                                    Next
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pendingtickets