import { useRouter } from "next/navigation";
import Image from "next/image";

// components/ListItemSidebarPlaylist.tsx
interface ListItemSidebarPlaylistProps{
    image: string;
    name: string;
    href: string;
    category: string;
    author: string;
}

const ListItemSidebarPlaylist: React.FC<ListItemSidebarPlaylistProps> = ({
    image,
    name,
    href,
    category,
    author
}) => {
    const router = useRouter()

    const onClick = () => {

    }

  return (
    <button className="flex w-full items-center rounded-lg overflow-hidden gap-x-4 bg-transparent hover:bg-[#272727] transition p-2">
        <div className="inner-container w-full h-full flex flex-row items-center gap-4">
            <Image
            width={50}
            height={50}
            className="rounded-md"
            src={image}
            alt='Image'
            />
            <div className="text-container flex flex-col items-start">
                <span className="title font-medium">{name}</span>
                <div className="flex flex-row items-center gap-[6px]">
                    <span className="category text-[#727272] text-xs font-medium">{category}</span>
                    <div className="divider w-1 h-1 rounded-full bg-[#727272]"></div>
                    <span className="author text-[#727272] text-xs font-medium">{author}</span>
                </div>
            </div>
        </div>
        
    </button>
  );
};

export default ListItemSidebarPlaylist;
