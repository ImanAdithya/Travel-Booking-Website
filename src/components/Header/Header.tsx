import {Component} from "react";
import logo from "../../assets/logo.png"
import {Search, WbSunnyOutlined} from "@mui/icons-material";
export class Header extends Component {
    render() {
        return (
            <div className='w-full  px-52 py-5  border-b border-black border-opacity-50  overflow-x-hidden ' >
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-14'>
                        <div className='flex flex-row items-center'>
                            <img src={logo} className='w-10 h-10'/>
                            <span className='font-bold text-5xl'>.fis</span>
                        </div>

                        <div className='flex flex-row items-center'>
                            <ul className='text-xl flex gap-8'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Booking</li>
                                <li>Listing Page</li>
                                <li>Other Pages</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-row gap-10 items-center'>
                       <div className='flex flex-row gap-2'>
                           <WbSunnyOutlined style={{ fontSize: '2rem' }}></WbSunnyOutlined>
                           <Search style={{ fontSize: '2rem' }}></Search>
                       </div>

                        <div>
                            <button className='px-6 py-2 bg-[#4F46E5] text-white rounded-xl'>Sign up</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}