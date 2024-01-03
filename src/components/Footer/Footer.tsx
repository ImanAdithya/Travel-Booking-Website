import {Component} from "react";

export class Footer extends Component {
    render() {
        return (
            <footer
                className=" text-center  lg:text-left bg-[#DFE5E8]">
                <div className="p-4 text-center text-black">
                    © 2024 Copyright:
                    <a
                        className="text-neutral-800 dark:text-neutral-400"
                        href="https://tw-elements.com/"
                    >.fis</a
                    >
                </div>
            </footer>
        );
    }
}