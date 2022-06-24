import React from 'react';
import friend from '../../assets/friend.png';
import group from '../../assets/group.png';
import market from '../../assets/market.png';
import video from '../../assets/watch.png';
import time from '../../assets/time.png';

function Sidebar() {
  return (
    <div className="w-1/5">
      <div className="py-2 w-80 flex rounded-lg justify-start items-center cursor-pointer hover:bg-slate-200">
        <img className="mr-2 pl-2" src={friend} alt="friend" />
        <span>Bạn bè</span>
      </div>
      <div className="py-2 w-80 flex rounded-lg justify-start items-center cursor-pointer hover:bg-slate-200">
        <img className="mr-2 pl-2" src={group} alt="group" />
        <span>Nhóm</span>
      </div>
      <div className="py-2 w-80 flex rounded-lg justify-start items-center cursor-pointer hover:bg-slate-200">
        <img className="mr-2 pl-2" src={market} alt="market" />
        <span>Marketplace</span>
      </div>
      <div className="py-2 w-80 flex rounded-lg justify-start items-center cursor-pointer hover:bg-slate-200">
        <img className="mr-2 pl-2" src={video} alt="video" />
        <span>Watch</span>
      </div>
      <div className="py-2 w-80 flex rounded-lg justify-start items-center cursor-pointer hover:bg-slate-200">
        <img className="mr-2 pl-2" src={time} alt="time" />
        <span>Kỷ niệm</span>
      </div>
    </div>
  );
}

export default Sidebar;
