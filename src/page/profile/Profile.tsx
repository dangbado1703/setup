import React, { useLayoutEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
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
  const [showBorder, setShowBorder] = useState('post');
  const navigate = useNavigate();
  const params = useParams().username;
  const hideDiv = () => {
    setShow(false);
  };
  useLayoutEffect(() => {
    if (window.location.pathname.split(`/${params}/`)[1].includes('info')) {
      setShowBorder('info');
    }
  }, []);
  const handleKeyDownHideDiv = () => {
    console.log('handleKeyDownHideDiv');
  };
  const handleChangeBorder = (id: string) => {
    menu.map((a) => {
      if (a.id === id) {
        setShowBorder(id);
        navigate(`/${params}/${a.id}`);
      }
      return a.id;
    });
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
        <div className="mt-20 flex mb-5">
          {menu.map((a) => (
            <div
              key={a.id}
              role="presentation"
              onClick={() => handleChangeBorder(a.id)}
              onKeyDown={handleKeyDownChangeBorder}
              className={`${a.id === 'post' && 'mr-8'} ${showBorder === a.id ? a.classname : ''} cursor-pointer`}>
              <p>{a.name}</p>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Profile;
