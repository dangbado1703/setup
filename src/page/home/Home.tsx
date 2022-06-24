import React from 'react';
import Feed from '../../component/Body/Feed';
import Rightbar from '../../component/Body/Rightbar';
import Sidebar from '../../component/Body/Sidebar';
import Topbar from '../../component/Navbar/Topbar';
import getToken from '../../config/constants/getToken';

function Home() {
  const token = getToken();
  console.log(token);
  return (
    <div className="home">
      <div>
        <Topbar />
      </div>
      <div className="flex w-full p-2">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}

export default Home;
