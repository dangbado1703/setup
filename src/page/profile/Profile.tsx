import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import ProfileUser from '../../component/Profile/ProfileUser';
import instance from '../../config/service';

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
  useEffect(() => {
    if (window.location.pathname.split(`/${params}/`)[1] && window.location.pathname.split(`/${params}/`)[1].includes('info')) {
      setShowBorder('info');
    } else {
      setShowBorder('post');
      navigate('post');
    }
  }, []);
  useEffect(() => {
    if (params) {
      const getProfile = async () => {
        const user = {
          username: params,
        };
        const data = await instance.post('/profile/update', user);
        console.log(data);
        return data;
      };
      getProfile();
    }
  }, []);
  const handleChangeBorder = (id: string) => {
    menu.map((a) => {
      if (a.id === id) {
        setShowBorder(id);
        navigate(`/${params}/${a.id}`);
      }
      return a.id;
    });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-2/3" onClick={hideDiv} role="presentation">
        <div className="w-full  ">
          <ProfileUser show={show} setShow={setShow} />
        </div>
        <div className="mt-20 flex mb-5">
          {menu.map((a) => (
            <div
              key={a.id}
              role="presentation"
              onClick={() => handleChangeBorder(a.id)}
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
