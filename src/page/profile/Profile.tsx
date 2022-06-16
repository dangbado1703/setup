import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="flex">
      <div className="w-1/5">Sidebar</div>
      <div className="w-3/5">Main</div>
      <div className="w-1/5">Right Bar</div>
    </div>
  );
};

export default Profile;
