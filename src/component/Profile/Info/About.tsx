import {
  faBriefcase,
  faEllipsis,
  faGraduationCap,
  faHeart,
  faHouse,
  faLocationPin,
  faPen,
  faPencil,
  faPhone,
  faTrash,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { saveIconAbout } from './about.reducer';

function EditWorkIn() {
  return (
    <div className="mb-3">
      <div>
        <div>
          <input
            className="w-full text-sm border rounded-lg transition-all mb-3 pr-1 py-4 pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black"
            placeholder="Công ty"
          />
        </div>
        <div>
          <input
            className="w-full text-sm border rounded-lg transition-all mb-3 pr-1 py-4 pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black"
            placeholder="Chức vụ"
          />
        </div>
        <div>
          <input
            className="w-full text-sm border rounded-lg transition-all mb-3 pr-1 py-4 pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black"
            placeholder="Mô tả"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button type="button" className="w-20 border py-2 rounded-md bg-slate-200 focus:border-b-gray-200">
          Hủy
        </button>
        <button type="submit" className="ml-3 w-20 border py-2 rounded-md bg-blue-600 text-white focus:border-sky-500 focus:ring-2">
          Lưu
        </button>
      </div>
    </div>
  );
}
function About() {
  const info = [
    {
      icon: faBriefcase,
      name: 'Làm việc tại',
      hightLight: '',
      edit: 'Chỉnh sửa nơi làm việc',
      delete: 'Xóa nơi làm việc',
    },
    {
      icon: faGraduationCap,
      name: 'Từng học tại',
      hightLight: '',
      edit: 'Chỉnh sửa trường học',
      delete: 'Xóa trường học',
    },
    {
      icon: faHouse,
      name: 'Sống tại',
      hightLight: '',
      edit: 'Chỉnh sửa tỉnh/thành phố hiện tại',
      delete: 'Xóa tỉnh/thành phố hiện tại',
    },
    {
      icon: faLocationPin,
      name: 'Đến từ',
      hightLight: '',
      edit: 'Chỉnh sửa quê quán',
      delete: 'Xóa quê quán',
    },
    {
      icon: faHeart,
      name: '',
      hightLight: '',
    },
    {
      icon: faPhone,
      name: '',
      hightLight: '',
    },
  ];
  const dispatch = useAppDispatch();
  const showFunc = useAppSelector((state) => state.aboutReducer.showFunc)?.iconName;
  const handleShowFunc = (icon: IconDefinition, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    info.map((a) => {
      if (a.icon === icon) {
        dispatch(saveIconAbout(icon));
      }
      return icon;
    });
  };
  const handleKeyDownShowFunc = () => {
    console.log('hello');
  };
  const handleEditHeartPhone = (icon: IconDefinition) => {
    console.log('hello', icon);
  };
  const handleKeyDownEditHeartPhone = () => {
    console.log('hello');
  };
  const handleEdit = () => {
    console.log('first');
  };
  const handleOnKeyDownEdit = () => {
    console.log('first');
  };
  const handleDelete = () => {
    console.log('first');
  };
  const handleOnKeyDownDelete = () => {
    console.log('first');
  };
  return (
    <div>
      <EditWorkIn />
      {info.map((a) => (
        <div key={a.name + a.icon.iconName} className="flex justify-between mb-4 relative">
          <div className="flex items-center w-9/10">
            <div className="w-9 h-9 flex justify-center items-center text-xl mr-2">
              <FontAwesomeIcon icon={a.icon} className="opacity-60" />
            </div>
            <span className="inline-block w-9/10">
              {a.name} <span className="font-bold">{a.hightLight}</span>
            </span>
          </div>
          <div
            role="presentation"
            onKeyDown={handleKeyDownShowFunc}
            onClick={(e) => handleShowFunc(a.icon, e)}
            className="w-9 h-9 flex justify-center items-center rounded-full bg-slate-100 hover:bg-slate-200 cursor-pointer">
            {a.icon === faHeart || a.icon === faPhone ? (
              <div onClick={() => handleEditHeartPhone(a.icon)} onKeyDown={handleKeyDownEditHeartPhone} role="presentation">
                <FontAwesomeIcon icon={faPencil} />
              </div>
            ) : (
              <FontAwesomeIcon icon={faEllipsis} />
            )}
          </div>
          {a.icon.iconName === showFunc &&
            (a.icon === faHeart || a.icon === faPhone ? null : (
              <div className="absolute right-0 top-full shadow-register rounded-lg bg-white z-10">
                <div className="p-2">
                  <div
                    onClick={handleEdit}
                    onKeyDown={handleOnKeyDownEdit}
                    role="presentation"
                    className="cursor-pointer hover:bg-slate-200 p-2 mb-2 rounded-md flex">
                    <div className="w-6 h-6">
                      <FontAwesomeIcon icon={faPen} className="text-blue-300" />
                    </div>
                    <span>{a.edit}</span>
                  </div>
                  <div
                    onClick={handleDelete}
                    onKeyDown={handleOnKeyDownDelete}
                    role="presentation"
                    className="cursor-pointer hover:bg-slate-200 p-2 rounded-md flex">
                    <div className="w-6 h-6">
                      <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                    </div>
                    <span>{a.delete}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default About;
