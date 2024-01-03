import {Component} from "react";
import t1 from "../../assets/t1.jpeg"
import t2 from "../../assets/t2.jpeg"
import t3 from "../../assets/t3.jpeg"
import t4 from "../../assets/t4.jpeg"
import t5 from "../../assets/t5.jpeg"
import t6 from "../../assets/t6.jpeg"
import t7 from "../../assets/t7.jpeg"
import t8 from "../../assets/t8.jpeg"
import {LocationOn} from "@mui/icons-material";

export class SectionFive extends Component {
    render() {
        return (
            <div className='mx:5 xl:mx-20 h-full bg-[#F3F4F6] rounded-3xl mt-[8rem]'>
                <div className='px-10 xl:px-36 py-20 flex flex-col gap-10'>
                    <div className='flex flex-col gap-2'>
                        <span className='font-bold text-4xl'>Featured places to stay</span>
                        <p className='text-xl opacity-50'>Popular places to stay that Chisfis recommends for you</p>
                    </div>

                    <div className='flex flex-row  flex-wrap gap-3 justify-center xl:justify-start'>
                        <div className='px-7 py-2  bg-green-700 text-white font-bold rounded-2xl'>
                            New York
                        </div>
                        <div className='px-7 py-2 text-lg text-black opacity-70 font-bold rounded-2xl '>
                            Tokyo
                        </div>
                        <div className='px-7 py-2 text-lg text-black opacity-70 font-bold rounded-2xl'>
                            Paris
                        </div>
                        <div className='px-7 py-2  text-lg text-black opacity-70 font-bold rounded-2xl'>
                            London
                        </div>
                    </div>

                    <div className='flex flex-row flex-wrap gap-6 '>

                        <div className='flex flex-col gap-2 w-[21rem] h-[28rem] rounded-2xl bg-white shadow-lg'>
                            <img className='rounded-tl-2xl rounded-tr-2xl' src={t1}/>

                            <div className='p-4 flex flex-col gap-2'>
                                <span className='opacity-65 text-md'>Entire cabin : 10 beds</span>
                                <span className='font-bold text-xl'>Best Western Cedargar</span>
                                <div className='flex flex-row gap-2'>
                                    <LocationOn className='text-lg opacity-65'></LocationOn>
                                    <span className='opacity-65 text-md'>1 Anzinger Court</span>
                                </div>

                                <div className='flex flex-row justify-between mt-10'>
                                    <p className='text-red-600 text-xl font-bold'>$26<span className='text-black opacity-65'>/night</span></p>
                                    <p className='text-black text-xl font-bold'>4.8<span className='opacity-65'> (28)</span></p>
                                </div>
                            </div>



                        </div>
                        <div className='flex flex-col gap-2 w-[21rem] h-[28rem] rounded-2xl bg-white shadow-lg'>
                            <img className='rounded-tl-2xl rounded-tr-2xl' src={t2}/>

                            <div className='p-4 flex flex-col gap-2'>
                                <span className='opacity-65 text-md'>Entire cabin : 6 beds</span>
                                <span className='font-bold text-xl'>Bell By Greene King Inns</span>
                                <div className='flex flex-row gap-2'>
                                    <LocationOn className='text-lg opacity-65'></LocationOn>
                                    <span className='opacity-65 text-md'>4354 Judy Hill</span>
                                </div>

                                <div className='flex flex-row justify-between mt-10'>
                                    <p className='text-red-600 text-xl font-bold'>$250<span className='text-black opacity-65'>/night</span></p>
                                    <p className='text-black text-xl font-bold'>2.5<span className='opacity-65'> (38)</span></p>
                                </div>
                            </div>



                        </div>
                        <div className='flex flex-col gap-2 w-[21rem] h-[28rem] rounded-2xl bg-white shadow-lg'>
                            <img className='rounded-tl-2xl rounded-tr-2xl' src={t3}/>

                            <div className='p-4 flex flex-col gap-2'>
                                <span className='opacity-65 text-md'>Entire cabin : 9 beds</span>
                                <span className='font-bold text-xl'>Half Moon, Sherborne</span>
                                <div className='flex flex-row gap-2'>
                                    <LocationOn className='text-lg opacity-65'></LocationOn>
                                    <span className='opacity-65 text-md'>7544 Killder Park</span>
                                </div>

                                <div className='flex flex-row justify-between mt-10'>
                                    <p className='text-red-600 text-xl font-bold'>$120<span className='text-black opacity-65'>/night</span></p>
                                    <p className='text-black text-xl font-bold'>9.8<span className='opacity-65'> (978)</span></p>
                                </div>
                            </div>



                        </div>
                        <div className='flex flex-col gap-2 w-[21rem] h-[28rem] rounded-2xl bg-white shadow-lg'>
                            <img className='rounded-tl-2xl rounded-tr-2xl' src={t4}/>

                            <div className='p-4 flex flex-col gap-2'>
                                <span className='opacity-65 text-md'>Entire cabin : 7 beds</span>
                                <span className='font-bold text-xl'>White Horse Hotel By Greene</span>
                                <div className='flex flex-row gap-2'>
                                    <LocationOn className='text-lg opacity-65'></LocationOn>
                                    <span className='opacity-65 text-md'>35 Sherman Park</span>
                                </div>

                                <div className='flex flex-row justify-between mt-10'>
                                    <p className='text-red-600 text-xl font-bold'>$40 <span className='text-black opacity-65'>/night</span></p>
                                    <p className='text-black text-xl font-bold'>5.8<span className='opacity-65'> (28)</span></p>
                                </div>
                            </div>



                        </div>


                        <div className='flex flex-col gap-2 w-[21rem] h-[28rem] rounded-2xl bg-white shadow-lg'>
                            <img className='rounded-tl-2xl rounded-tr-2xl' src={t5}/>

                            <div className='p-4 flex flex-col gap-2'>
                                <span className='opacity-65 text-md'>Entire cabin : 3 beds</span>
                                <span className='font-bold text-xl'>Ship And Castle Hotel</span>
                                <div className='flex flex-row gap-2'>
                                    <LocationOn className='text-lg opacity-65'></LocationOn>
                                    <span className='opacity-65 text-md'>3 Crest Line Park</span>
                                </div>

                                <div className='flex flex-row justify-between mt-10'>
                                    <p className='text-red-600 text-xl font-bold'>$147<span className='text-black opacity-65'>/night</span></p>
                                    <p className='text-black text-xl font-bold'>3.8<span className='opacity-65'> (288)</span></p>
                                </div>
                            </div>



                        </div>
                        <div className='flex flex-col gap-2 w-[21rem] h-[28rem] rounded-2xl bg-white shadow-lg'>
                            <img className='rounded-tl-2xl rounded-tr-2xl' src={t6}/>

                            <div className='p-4 flex flex-col gap-2'>
                                <span className='opacity-65 text-md'>Entire cabin : 7 beds</span>
                                <span className='font-bold text-xl'>The Windmill Family</span>
                                <div className='flex flex-row gap-2'>
                                    <LocationOn className='text-lg opacity-65'></LocationOn>
                                    <span className='opacity-65 text-md'>55974 Waxwing Junction</span>
                                </div>

                                <div className='flex flex-row justify-between mt-10'>
                                    <p className='text-red-600 text-xl font-bold'>$90<span className='text-black opacity-65'>/night</span></p>
                                    <p className='text-black text-xl font-bold'>8.8<span className='opacity-65'> (878)</span></p>
                                </div>
                            </div>



                        </div>
                        <div className='flex flex-col gap-2 w-[21rem] h-[28rem] rounded-2xl bg-white shadow-lg'>
                            <img className='rounded-tl-2xl rounded-tr-2xl' src={t1}/>

                            <div className='p-4 flex flex-col gap-2'>
                                <span className='opacity-65 text-md'>Entire cabin : 10 beds</span>
                                <span className='font-bold text-xl'>Unicorn, Gunthorpe </span>
                                <div className='flex flex-row gap-2'>
                                    <LocationOn className='text-lg opacity-65'></LocationOn>
                                    <span className='opacity-65 text-md'>79361 Chinook Place</span>
                                </div>

                                <div className='flex flex-row justify-between mt-10'>
                                    <p className='text-red-600 text-xl font-bold'>$282<span className='text-black opacity-65'>/night</span></p>
                                    <p className='text-black text-xl font-bold'>4.8<span className='opacity-65'> (18)</span></p>
                                </div>
                            </div>



                        </div>
                        <div className='flex flex-col gap-2 w-[21rem] h-[28rem] rounded-2xl bg-white shadow-lg'>
                            <img className='rounded-tl-2xl rounded-tr-2xl' src={t8}/>

                            <div className='p-4 flex flex-col gap-2'>
                                <span className='opacity-65 text-md'>Entire cabin : 3 beds</span>
                                <span className='font-bold text-xl'>6 Chive Avenue</span>
                                <div className='flex flex-row gap-2'>
                                    <LocationOn className='text-lg opacity-65'></LocationOn>
                                    <span className='opacity-65 text-md'>1 Anzinger Court</span>
                                </div>

                                <div className='flex flex-row justify-between mt-10'>
                                    <p className='text-red-600 text-xl font-bold'>$79<span className='text-black opacity-65'>/night</span></p>
                                    <p className='text-black text-xl font-bold'>4.8<span className='opacity-65'> (28)</span></p>
                                </div>
                            </div>



                        </div>



                    </div>


                </div>
            </div>
        );
    }
}