import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

const menuInfo = [
  {
    id: 2,
    name: 'Tổng quan',
    className: 'cursor-pointer px-3 py-2 mb-1 text-sm font-semibold opacity-80 rounded-md',
    path: 'about',
  },
  {
    id: 3,
    name: 'Thông tin liên hệ cơ bản',
    className: 'cursor-pointer px-3 py-2 mb-1 text-sm font-semibold opacity-80 rounded-md',
    path: 'about_contact_and_basic_info',
  },
  {
    id: 4,
    name: 'Chi tiết về bạn',
    className: 'cursor-pointer px-3 py-2 mb-1 text-sm font-semibold opacity-80 rounded-md',
    path: 'about_details',
  },
];

function Info() {
  const [checkHover, setCheckHover] = useState(2);
  const [checkChoose, setCheckChoose] = useState(2);
  const navigate = useNavigate();
  useEffect(() => {
    navigate('about');
  }, []);
  const handleInfo = (id: number) => {
    menuInfo.map((a) => {
      if (a.id === id) {
        setCheckHover(id);
        setCheckChoose(id);
        navigate(`${a.path}`);
      }
      return id;
    });
  };
  const handleAbout = () => {
    setCheckChoose(2);
    setCheckHover(2);
    navigate('about');
  };
  return (
    <div>
      <div className="shadow-register rounded-2xl flex">
        <div className="w-1/3 border-r-2 border-r-slate-200 px-2 py-4">
          <ul>
            <li role="presentation" onClick={handleAbout} className="text-xl font-semibold cursor-pointer mt-1 mb-5 mx-3">
              Giới thiệu
            </li>
            {menuInfo.map((a) => (
              <li
                role="presentation"
                onClick={() => handleInfo(a.id)}
                key={a.id}
                className={`${a.className} ${checkHover === a.id ? '' : 'hover:bg-slate-100'} ${
                  checkChoose === a.id ? 'bg-blue-100 text-blue-600' : ''
                }`}>
                {a.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 pt-4 pb-8 pl-4 pr-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Info;
