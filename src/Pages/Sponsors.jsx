import React from 'react'

const Sponsors = () => {
    const data = [
        {
            srno: 1,
            name: 'John Doe',
            email: 'example@gmail.com',
            phone: '1234567890',
            companyname: 'Company 1',
            country: 'India',
            telegram: 'telegram',
            interest: 'interest',
            status: 'status',
            date: '2021-12-12'
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
            <div className='ml-[16%] mt-[4rem] absolute w-[83%]'>
                <div className=''>
                    <div className='bg-orange-500 text-white text-[25px] pl-2 py-2'>
                        Sponsors
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
                        <div className=' overflow-x-scroll '>
                            
                        <table className='w-full text-white  py-1 pendingtickets-table'>
                            <tr className='bg-orange-500'>
                                <th
                                    onClick={() => sortdata('srno')}
                                >
                                    Sr.no.
                                </th>
                                <th
                                    onClick={() => sortdata('name')}
                                >
                                    Name
                                </th>
                                <th
                                    onClick={() => sortdata('email')}
                                >
                                    Email&nbsp;
                                </th>

                                <th
                                    onClick={() => sortdata('phone')}
                                >
                                    Phone
                                </th>
                                <th className='w-[13%]'
                                    onClick={() => sortdata('companyname')}
                                >
                                    Company Name
                                </th>
                                <th
                                    onClick={() => sortdata('country')}
                                >
                                    Country
                                </th>

                                <th
                                    onClick={() => sortdata('telegram')}
                                >
                                    Telegram
                                </th>

                                <th
                                    onClick={() => sortdata('interest')}
                                >
                                    Interest
                                </th>

                                <th
                                    onClick={() => sortdata('status')}
                                >
                                    Status
                                </th>
                                <th
                                    onClick={() => sortdata('date')}
                                >
                                    Date
                                </th>
                            </tr>
                            {state.slice(start, start + interval).map((item, index) => (
                                <tr key={index} className='text-black text-center'>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.companyname}</td>
                                    <td>{item.country}</td>
                                    <td>{item.telegram}</td>
                                    <td>{item.interest}</td>
                                    <td>{item.status}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                        </table>
                        </div>
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

export default Sponsors