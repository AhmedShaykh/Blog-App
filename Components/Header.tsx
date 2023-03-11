import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image
                        className="rounded-full object-cover"
                        height={50}
                        width={50}
                        src="/AhmedNFT.png"
                        alt="logo"
                    />
                </Link>
                <h1>AHM X BLOG'S</h1>
            </div>

            <div>
                <Link href="http://github.com/AhmedShaykh"
                    className="px-5 py-3 text-sm md:text-base bg-gray-900 text-white flex items-center rounded-full text-center"
                >
                    Go To My Github
                </Link>
            </div>
        </header>
    )
};

export default Header;