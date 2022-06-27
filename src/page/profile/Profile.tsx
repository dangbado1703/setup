import React, { useState } from 'react';
import ProfileUser from '../../component/Profile/ProfileUser';
import RightBar from '../../component/Profile/RightBar';
import SideBar from '../../component/Profile/SideBar';

function Profile() {
  const [show, setShow] = useState(false);
  const hideDiv = () => {
    setShow(false);
  };

  const handleKeyDownHideDiv = () => {
    console.log('handleKeyDownHideDiv');
  };

  return (
    <div className="flex" onClick={hideDiv} onKeyDown={handleKeyDownHideDiv} role="presentation">
      <div className="w-1/5">
        <SideBar />
      </div>
      <div className="w-3/5">
        <ProfileUser show={show} setShow={setShow} />
      </div>
      <div className="w-1/5">
        <RightBar />
      </div>
    </div>
  );
}

export default Profile;
