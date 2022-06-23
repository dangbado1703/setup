import { faCamera, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import anhbia from '../../assets/anhbia.jpg';
import avatar from '../../assets/avatar.jpg';
import { useAppDispatch } from '../../redux/hooks';
import { getProfile } from './profile.reducer';

const Profile = () => {
  const [show, setShow] = useState(false);
  const [valueUpload, setValueUpload] = useState<File>();
  const params = useParams();
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProfile(params))
  }, [params])

  const showDiv = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setShow(!show);
  };
  const hideDiv = () => {
    setShow(false);
  };
  const handleStopPropagation = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    e.stopPropagation();
  };
  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setValueUpload(e.target.files[0]);
    }
  };
  return (
    <div className="flex" onClick={hideDiv}>
      <div className="w-1/5">Sidebar</div>
      <div className="w-3/5">
        <div>
          <div className="relative">
            <div className="w-full h-450 overflow-hidden relative rounded-bl-3xl rounded-br-3xl">
              <div className="absolute -top-1/2 -z-10">
                <img src={anhbia} />
              </div>
              <div className="w-44 bg-white absolute bottom-6 right-6  flex justify-center items-center rounded hover:bg-slate-100">
                <button className="p-1" onClick={showDiv}>
                  <FontAwesomeIcon className="mr-2" icon={faCamera} />
                  <span>Chỉnh sửa ảnh bìa</span>
                </button>
              </div>
            </div>
            <div className="w-44 rounded-full overflow-hidden absolute left-14 top-3/4 ">
              <img className="rounded-full w-full h-full" src={avatar} />
            </div>
            {show && (
              <div className="bg-white w-80 absolute -bottom-72px right-18px shadow-register rounded-lg">
                <div className="p-2">
                  <label
                    onClick={handleStopPropagation}
                    htmlFor="uploadFile"
                    className="mb-4 pl-2 py-1 hover:bg-slate-100 cursor-pointer rounded-md block">
                    <FontAwesomeIcon className="mr-2" icon={faUpload} />
                    <span className="leading-6">Tải ảnh lên</span>
                  </label>
                  <div className="pl-2 py-1 hover:bg-slate-100 cursor-pointer rounded-md">
                    <FontAwesomeIcon className="mr-2" icon={faTrash} />
                    <span className="leading-6">Gỡ</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <input id="uploadFile" accept="image/*" type="file" hidden onChange={handleUploadFile} />
        </div>
      </div>
      <div className="w-1/5">Right Bar</div>
    </div>
  );
};

export default Profile;
