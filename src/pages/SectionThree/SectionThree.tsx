import {Component} from "react";
import h1 from "../../assets/h1.png"
import h2 from "../../assets/h2.png"
import h3 from "../../assets/h3.png"
import h4 from "../../assets/h4.svg"

export class SectionThree extends Component {
    render() {
        return (
            <div className='px-5 lg:px-10 xl:px-36 2xl:px-52 flex flex-col mt-[6vw]'>

                <div className='w-full flex flex-col items-center gap-2'>
                    <span className='font-bold text-4xl'>How it work</span>
                    <span className='text-2xl opacity-55'>Keep calm & travel on</span>
                </div>

                <div className='flex flex-row  mt-24 justify-center lg:justify-between flex-wrap gap-14 lg:gap-0'>
                    <div className='flex flex-col items-center gap-3  w-[20rem]'>
                        <img className='w-56 h-56' src={h1}/>
                        <span className='font-bold text-2xl'>Book & relax</span>
                        <p className='text-center text-lg opacity-70'>Let each trip be an inspirational journey, each room a peaceful space</p>
                    </div>
                    <div className='flex flex-col items-center gap-3  w-[20rem]'>
                        <img className='w-56 h-56' src={h2}/>
                        <span className='font-bold text-2xl'>Smart checklist</span>
                        <p className='text-center text-lg opacity-70'>Efficient task tracking, automated reminder, and  with Smart Checklists.</p>
                    </div>
                    <div className='flex flex-col items-center gap-3 w-[20rem]'>
                        <img className='w-56 h-56' src={h3}/>
                        <span className='font-bold text-2xl'>Save more</span>
                        <p className='text-center text-lg opacity-70'>Cut costs, optimize spending, secure  strategize smartly to save more </p>
                    </div>
                </div>

                <div className='mt-[15rem] absolute'>
                    <img src={h4}/>
                </div>
            </div>
        );
    }
}