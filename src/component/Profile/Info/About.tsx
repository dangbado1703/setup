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

function About() {
  const info = [
    {
      icon: faBriefcase,
      name: 'Làm việc tại',
      hightLight: '',
    },
    {
      icon: faGraduationCap,
      name: 'Từng học tại',
      hightLight: '',
    },
    {
      icon: faHouse,
      name: 'Sống tại',
      hightLight: '',
    },
    {
      icon: faLocationPin,
      name: 'Đến từ',
      hightLight: '',
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
  return (
    <div>
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
            {a.icon === faHeart || a.icon === faPhone ? <FontAwesomeIcon icon={faPencil} /> : <FontAwesomeIcon icon={faEllipsis} />}
          </div>
          {a.icon.iconName === showFunc ? (
            <div className="absolute right-0 top-full shadow-register rounded-lg bg-white z-10">
              <div className="p-2">
                <div className="cursor-pointer hover:bg-slate-200 p-2 mb-2 rounded-md flex">
                  <div className="w-6 h-6">
                    <FontAwesomeIcon icon={faPen} className="text-blue-300" />
                  </div>
                  <span>Chỉnh sửa nơi làm việc</span>
                </div>
                <div className="cursor-pointer hover:bg-slate-200 p-2 rounded-md flex">
                  <div className="w-6 h-6">
                    <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                  </div>
                  <span>Xóa nơi làm việc</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default About;
