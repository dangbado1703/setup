import React, { useState } from 'react';
import ProfileUser from '../../component/Profile/ProfileUser';

const menu = [
  {
    name: 'Bài viết',
    id: 'post',
    classname: 'relative after:absolute after:block after:w-full after:h-1 after:bg-red-500',
  },
  {
    name: 'Thông tin',
    id: 'info',
    classname: 'relative after:absolute after:block after:w-full after:h-1 after:bg-red-500',
  },
];

function Profile() {
  const [show, setShow] = useState(false);
  const [showBorder, setShowBorder] = useState(true);
  const hideDiv = () => {
    setShow(false);
  };

  const handleKeyDownHideDiv = () => {
    console.log('handleKeyDownHideDiv');
  };

  const handleChangeBorder = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e.target);
    setShowBorder(!showBorder);
  };
  const handleKeyDownChangeBorder = () => {
    console.log('asd');
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-2/3" onClick={hideDiv} onKeyDown={handleKeyDownHideDiv} role="presentation">
        <div className="w-full  ">
          <ProfileUser show={show} setShow={setShow} />
        </div>
        <div className="mt-20 flex">
          {/* <div
            onClick={handleChangeBorder}
            onKeyDown={handleKeyDownChangeBorder}
            role="presentation"
            className={`mr-8 ${
              showBorder && 'relative after:absolute after:block after:w-full after:h-1 after:bg-red-500'
            } cursor-pointer`}>
            <p>Bài viết</p>
          </div>
          <div
            onClick={handleChangeBorder}
            onKeyDown={handleKeyDownChangeBorder}
            role="presentation"
            className={`${!showBorder && 'relative after:absolute after:block after:w-full after:h-1 after:bg-red-500'} cursor-pointer`}>
            <p>Giới thiệu</p>
          </div> */}
          {menu.map((a) => (
            <div
              role="presentation"
              onClick={(e) => handleChangeBorder(e)}
              onKeyDown={handleKeyDownChangeBorder}
              className={`${a.id === 'post' && 'mr-8'} ${a.classname} cursor-pointer`}>
              <p>{a.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
