import { faBell, faMessage, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Search';

function Topbar() {
  const [image, setImage] = useState(false);
  const navigate = useNavigate();
  const infoName = localStorage.getItem('name');
  const username = localStorage.getItem('username');
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  const handleChangeToProfile = () => {
    navigate(`/profile/${username}`);
    setImage(true);
  };

  const handleKeyDownProfile = () => {
    console.log('hello');
  };

  const handleKeyDownLogOut = () => {
    console.log('hello');
  };

  return (
    <div className="flex justify-around items-center bg-blue-500 text-white">
      <div className="p-3 cursor-pointer">
        <span className="text-3xl">Facebook</span>
      </div>
      <div>
        <Search />
      </div>
      <div className="flex justify-around items-center w-40">
        <div className="relative cursor-pointer">
          <FontAwesomeIcon icon={faMessage} />
          <span className="bg-red-600 text-white w-4 h-4 rounded-full flex justify-center items-center text-xs absolute -top-2 -right-2">
            1
          </span>
        </div>
        <div className="relative cursor-pointer">
          <FontAwesomeIcon icon={faBell} />
          <span className="bg-red-600 text-white w-4 h-4 rounded-full flex justify-center items-center text-xs absolute -top-2 -right-2">
            1
          </span>
        </div>
        <div className="relative cursor-pointer">
          <FontAwesomeIcon icon={faUser} />
          <span className="bg-red-600 text-white w-4 h-4 rounded-full flex justify-center items-center text-xs absolute -top-2 -right-2">
            1
          </span>
        </div>
      </div>
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={handleChangeToProfile}
        onKeyDown={handleKeyDownProfile}
        tabIndex={0}
        role="button">
        <div className="w-10 h-10 text-lg rounded-full border flex justify-center items-center cursor-pointer">
          {image ? <img alt="user" /> : <FontAwesomeIcon icon={faUserTie} />}
        </div>
        <span className="ml-2">{infoName}</span>
      </div>
      <div
        onClick={handleLogOut}
        onKeyDown={handleKeyDownLogOut}
        tabIndex={0}
        role="button"
        className="cursor-pointer bg-green-600 w-20 flex justify-center items-center rounded-lg">
        <button type="button" className="p-2">
          Thoát
        </button>
      </div>
    </div>
  );
}

export default Topbar;
