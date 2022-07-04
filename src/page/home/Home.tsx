import React from 'react';
import Feed from '../../component/Body/Feed';
import Rightbar from '../../component/Body/Rightbar';
import Sidebar from '../../component/Body/Sidebar';

function Home() {
  return (
    <div className="home">
      <div className="flex w-full p-2">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
