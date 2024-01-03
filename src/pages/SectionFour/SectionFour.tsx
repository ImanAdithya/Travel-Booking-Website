import {Component} from "react";
import {ArrowBackIos, ArrowForwardIos} from "@mui/icons-material";
import e1 from "../../assets/e1.jpeg"
import e2 from "../../assets/e2.jpeg"
import e3 from "../../assets/e3.jpeg"
import e4 from "../../assets/e4.jpeg"
import e5 from "../../assets/e5.jpeg"

export class SectionFour extends Component {
    render() {
        return (
            <div className='px-5 lg:px-10 xl:px-36 2xl:px-52 flex flex-col gap-20  mt-[10rem]'>

                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-4xl font-bold'>Explore by types of stays</span>
                        <span className='opacity-50 text-xl'>Explore houses based on 10 types of stays</span>
                    </div>

                    <div className='flex flex-row gap-3'>

                        <div className='w-10 h-10 bg-slate-200 rounded-full flex flex-row items-center justify-center'>
                            <ArrowBackIos className='ml-2 opacity-55'></ArrowBackIos>
                        </div>

                        <div className='w-10 h-10 bg-slate-200 rounded-full flex flex-row items-center justify-center'>
                            <ArrowForwardIos  className='ml-2 opacity-55'></ArrowForwardIos>
                        </div>

                    </div>
                </div>

                <div className='flex flex-row gap-8 flex-wrap justify-center lg:justify-start '>

                    <div className='flex flex-col gap-2'>
                        <img className='w-64 h-48  rounded-xl' src={e1}/>
                        <span className='font-bold text-2xl'>Nature House</span>
                        <span className='opacity-50 text-md'>17,288 properties</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <img className='w-64 h-48  rounded-xl' src={e2}/>
                        <span className='font-bold text-2xl'>Wooden House</span>
                        <span className='opacity-50 text-md'>2,118 properties</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <img className='w-64 h-48  rounded-xl' src={e3}/>
                        <span className='font-bold text-2xl'>HouseBoat</span>
                        <span className='opacity-50 text-md'>36,548 properties</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <img className='w-64 h-48  rounded-xl' src={e4}/>
                        <span className='font-bold text-2xl'>Farm House</span>
                        <span className='opacity-50 text-md'>19,238 properties</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <img className='w-64 h-48  rounded-xl' src={e5}/>
                        <span className='font-bold text-2xl'>Demo House</span>
                        <span className='opacity-50 text-md'>18,588 properties</span>
                    </div>

                </div>
            </div>
        );
    }
}