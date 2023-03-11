import Link from 'next/link';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

const StudioNavbar = (props: any) => {
    return (
        <div>
            <div className="flex items-center p-5 justify-center">
                <Link href="/" className="text-[#07f2ee] flex item-center">
                    <ArrowUturnLeftIcon className="h-6 w-6 text-[#07f2ee] mr-3" />
                    Go To Front-End
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
};

export default StudioNavbar;