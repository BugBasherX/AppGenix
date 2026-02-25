import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-10">
            <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={400}
                height={400}
                className="hidden md:block absolute -bottom-30 -left-80 opacity-5 w-full h-full pointer-events-none"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                <div className="sm:col-span-2 lg:col-span-1">
                    <a href="#!">
                        <Image
                            src="/assets/logo.svg"
                            alt="Logo"
                            width={68}
                            height={26}
                            className="h-7 w-auto"
                        />  
                    </a>
                    <p className="text-sm/7 mt-6">built with Next.js and Tailwind CSS by <a href="https://github.com/bugbasherx" className="text-blue-600 hover:underline">Yuvraj</a> 
                    
                    </p>
                </div>
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <div className="flex flex-col text-sm space-y-2.5">
                        <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                        <a className="hover:text-slate-600 transition" href="#">About us</a>
                        <a className="hover:text-slate-600 transition" href="#">Careers</a>
                        <a className="hover:text-slate-600 transition" href="#">Contact us</a>
                        <a className="hover:text-slate-600 transition" href="#">Privacy policy</a>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold text-gray-800 mb-5">Follow Me</h2>
                    <div className="text-sm space-y-6 max-w-sm">
                        <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                        <div className="flex items-center">
                            <input type="email" placeholder="Enter your email" className="flex-1 px-4 h-11 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                            <button className="bg-linear-to-b from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 transition px-4 h-11 text-white rounded-r-md">Follow</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-t mt-6 border-slate-200">
                <p className="text-center">
                    Copyright 2025 © <a href="https://github.com/bugbasherx/AppGenix/" target="_blank">AppGenix</a> • Built by <a href="https://yuvrajkurmi.vercel.app" target="_blank">Yuvraj</a>. All Right Reserved.
                </p>
                <div className="flex items-center gap-4">
                    <Link href="/">
                        Privacy Policy
                    </Link>
                    <Link href="/">
                        Terms of Service
                    </Link>
                    <Link href="/">
                        Cookie Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};