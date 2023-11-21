// components/Library.tsx
import React from "react";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import ListItemSidebarPlaylist from "./list-item-sidebar-playlist";

const Library: React.FC = () => {
  const onClick = () => {};

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-x-4">
          <HiMiniRectangleStack className="text-[#727272]" size={25} />
          <span className="text-[#727272] font-medium">Your Library</span>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-[#727272] cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="">
        <div className="playlist-container flex flex-col items-center gap-6">
          <ListItemSidebarPlaylist
            image="/images/liked.png"
            name="Liked Songs"
            author="20 songs"
            category="Playlist"
            href=""
          />
          <ListItemSidebarPlaylist
            image="/images/madvillainy.jpg"
            name="Madvillainy"
            author="Madvillain"
            category="Album"
            href=""
          />
        </div>
      </div>
    </div>
  );
};

export default Library;
