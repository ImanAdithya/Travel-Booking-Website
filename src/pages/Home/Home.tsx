import {Component} from "react";
import home from "../../assets/home.png"
import {CalendarToday, LocationCity, LocationOn, PersonAdd} from "@mui/icons-material";

export class Home extends Component {
    render() {
        return (
            <div className=' px-5 lg:px-10 xl:px-36 2xl:px-52 mt-24 flex flex-col  gap-12 lg:flex-row items-center lg:items-start lg:gap-0 overflow-x-hidden h-[85vh] '>
                <div className='flex flex-col gap-10 w-[50vw] pr-0 lg:pr-20 items-center lg:items-start'>

                    <div className='flex flex-col  font-bold text-6xl  xl:text-7xl '>
                        <span>Hotel, Car &</span>
                        <span>experiences</span>
                    </div>

                    <div>
                        <p className='xl:text-xl opacity-65 text-center lg:text-start'>
                            Hotels offer comfortable stays, cars provide convenient transportation, forming a seamless travel journey  enjoyment.
                        </p>
                    </div>

                    <div>
                        <button className='bg-[#4F46E5] text-white px-3 xl:px-4 py-3 xl:py-4 text-lg rounded-2xl font-bold'> Start your Search</button>
                    </div>

                    <div className='mt-10 hidden 2xl:block'>
                        <ol className='flex flex-row  text-xl gap-5 font-bold'>
                            <li className='list-dot'>Stays</li>
                            <li className='opacity-65'>Experiences</li>
                            <li className='opacity-65'>Cars</li>
                            <li className='opacity-65'>Flights</li>
                        </ol>
                    </div>

                   <div className='hidden 2xl:block'>
                       <div className='flex flex-row gap-20 shadow-2xl rounded-xl px-4 py-5 '>

                           <div className='flex flex-row gap-2 items-center'>
                               <LocationOn className='opacity-40' style={{ fontSize: '1rem' }}></LocationOn>

                               <div className='flex flex-col'>
                                   <span className='text-md font-bold'>Location</span>
                                   <span className='opacity-50'>Where are you going?</span>
                               </div>
                           </div>


                           <div className='flex flex-row gap-2 items-center'>
                               <CalendarToday className='opacity-40' style={{ fontSize: '1rem' }}></CalendarToday>

                               <div className='flex flex-col'>
                                   <span className='text-md font-bold'>Feb 06 - Feb 23</span>
                                   <span className='opacity-50'>Check in - Check out</span>
                               </div>
                           </div>

                           <div className='flex flex-row gap-2 items-center'>
                               <PersonAdd className='opacity-40' style={{ fontSize: '1rem' }}></PersonAdd>

                               <div className='flex flex-col'>
                                   <span className='text-md font-bold'>4 Guests</span>
                                   <span className='opacity-50'>Guests</span>
                               </div>
                           </div>

                       </div>
                   </div>

                </div>


                <div className='w-[25rem] xl:w-[60rem]'>
                    <img src={home}/>
                </div>
            </div>
        );
    }
}