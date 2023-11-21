
// components/RecentlyPlayedListItem.tsx
'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";

interface RecentlyPlayedListItemProps{
    image: string;
    name: string;
    href: string;
}
const RecentlyPlayedListItem: React.FC<RecentlyPlayedListItemProps> = ({
    image,
    href,
    name
}) => {

    const router = useRouter();

    const onClick = () => {
        router.push(href);
    }

  return (
    <button className="flex w-full items-center rounded-lg overflow-hidden gap-x-4 bg-[#1E1E21] hover:bg-[#272727] transition p-2">
        <div className="inner-container w-full h-full flex flex-row items-center gap-2 md:gap-4">
            <Image
            width={50}
            height={50}
            className="rounded-md h-fit"
            src={image}
            alt='Image'
            />
            <div className="text-container flex">
                <span className="title text-xs md:text-base font-medium text-left">{name}</span>
                {/* <div className="flex flex-row items-center gap-[6px]">
                    <span className="category text-[#727272] text-xs font-medium">{category}</span>
                    <div className="divider w-1 h-1 rounded-full bg-[#727272]"></div>
                    <span className="author text-[#727272] text-xs font-medium">{author}</span>
                </div> */}
            </div>
        </div>
        
    </button>
  );
};

export default RecentlyPlayedListItem;
