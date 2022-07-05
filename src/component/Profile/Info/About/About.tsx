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
import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { IFormDataAbout } from '../../../../model/formvalue/formDataAbout';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { clearIconAbout, saveData, saveIconAbout, setCheckClick } from './about.reducer';
import EditLiveIn from './EditLiveIn';
import EditOldSchool from './EditOldSchool';
import EditWorkIn from './EditWorkIn';
import EditFrom from './EditFrom';
import EditHeart from './EditHeart';
import EditPhone from './EditPhone';

function About() {
  const info = [
    {
      id: 1,
      icon: faBriefcase,
      name: 'Làm việc tại',
      hightLight: '',
      edit: 'Chỉnh sửa nơi làm việc',
      delete: 'Xóa nơi làm việc',
    },
    { id: 2, icon: faGraduationCap, name: 'Từng học tại', hightLight: '', edit: 'Chỉnh sửa trường học', delete: 'Xóa trường học' },
    {
      id: 3,
      icon: faHouse,
      name: 'Sống tại',
      hightLight: '',
      edit: 'Chỉnh sửa tỉnh/thành phố hiện tại',
      delete: 'Xóa tỉnh/thành phố hiện tại',
    },
    { id: 4, icon: faLocationPin, name: 'Đến từ', hightLight: '', edit: 'Chỉnh sửa quê quán', delete: 'Xóa quê quán' },
    { id: 5, icon: faHeart, name: '', hightLight: '' },
    { id: 6, icon: faPhone, name: '', hightLight: '' },
  ];
  const [show, setShow] = useState({
    workIn: false,
    oldSchool: false,
    liveIn: false,
    from: false,
    heart: false,
    phone: false,
  });
  const [dataInfo, setDataInfo] = useState<IFormDataAbout[]>(info);
  const dispatch = useAppDispatch();
  const showFunc = useAppSelector((state) => state.aboutReducer.showFunc)?.iconName;
  const checkClick = useAppSelector((state) => state.aboutReducer.checkClick);
  const profile = useAppSelector((state) => state.profileReducer.dataProfile);
  console.log(profile);
  const handleShowFunc = (icon: IconDefinition, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    dataInfo.map((a) => {
      if (a.icon === icon) {
        if (checkClick === 1) {
          dispatch(setCheckClick(2));
          dispatch(saveIconAbout(icon));
        }
        if (checkClick === 2) {
          dispatch(setCheckClick(1));
          dispatch(clearIconAbout());
        }
      }
      return icon;
    });
  };
  useEffect(() => {
    if (profile) {
      info[0].hightLight = profile?.info?.company ? profile.info.company : '';
      info[1].hightLight = profile?.info?.schoolName ? profile.info.schoolName : '';
      info[2].hightLight = profile?.info?.province ? profile.info.province : '';
      info[3].hightLight = profile?.info?.from ? profile.info.from : '';
      info[4].hightLight = profile?.info?.married ? profile.info.married : '';
      info[5].hightLight = profile?.info?.phone ? profile.info.phone : '';
      setDataInfo(info);
    }
  }, [profile]);
  const handleEdit = (id: number, data: IFormDataAbout) => {
    dispatch(saveData(data));
    const newArr = dataInfo.filter((a) => a.id !== id);
    setDataInfo(newArr);
    dataInfo.map((a) => {
      if (a.id === id) {
        switch (id) {
          case 1:
            setShow({
              ...show,
              workIn: true,
            });
            break;
          case 2:
            setShow({
              ...show,
              oldSchool: true,
            });
            break;
          case 3:
            setShow({
              ...show,
              liveIn: true,
            });
            break;
          case 4:
            setShow({
              ...show,
              from: true,
            });
            break;
          case 5:
            setShow({
              ...show,
              heart: true,
            });
            break;
          case 6:
            setShow({
              ...show,
              phone: true,
            });
            break;
          default:
            return id;
        }
      }
      return a;
    });
  };
  const handleDelete = () => {
    console.log('first');
  };
  return (
    <div>
      {show.workIn && <EditWorkIn show={show} setShow={setShow} dataInfo={dataInfo} setDataInfo={setDataInfo} id={1} />}
      {show.oldSchool && <EditOldSchool show={show} setShow={setShow} dataInfo={dataInfo} setDataInfo={setDataInfo} id={2} />}
      {show.liveIn && <EditLiveIn show={show} setShow={setShow} dataInfo={dataInfo} setDataInfo={setDataInfo} id={3} />}
      {show.from && <EditFrom show={show} setShow={setShow} dataInfo={dataInfo} setDataInfo={setDataInfo} id={4} />}
      {show.heart && <EditHeart show={show} setShow={setShow} dataInfo={dataInfo} setDataInfo={setDataInfo} id={5} />}
      {show.phone && <EditPhone show={show} setShow={setShow} dataInfo={dataInfo} setDataInfo={setDataInfo} id={6} />}
      {_.orderBy(dataInfo, ['id'], ['asc']).map((a) => (
        <div key={a.name + a.icon.iconName} className="flex justify-between mb-4 relative">
          <div className="flex items-center w-9/10">
            <div className="w-9 h-9 flex justify-center items-center text-xl mr-2">
              <FontAwesomeIcon icon={a.icon} className="opacity-60" />
            </div>
            <span className="inline-block">
              {a.name} <span className="font-bold">{a.hightLight}</span>
            </span>
          </div>
          <div
            role="presentation"
            onClick={(e) => handleShowFunc(a.icon, e)}
            className="w-9 h-9 flex justify-center items-center rounded-full bg-slate-100 hover:bg-slate-200 cursor-pointer">
            {a.icon === faHeart || a.icon === faPhone ? (
              <div onClick={() => handleEdit(a.id, a)} role="presentation">
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
                    onClick={() => handleEdit(a.id, a)}
                    role="presentation"
                    className="cursor-pointer hover:bg-slate-200 p-2 mb-2 rounded-md flex">
                    <div className="w-6 h-6">
                      <FontAwesomeIcon icon={faPen} className="text-blue-300" />
                    </div>
                    <span>{a.edit}</span>
                  </div>
                  <div onClick={handleDelete} role="presentation" className="cursor-pointer hover:bg-slate-200 p-2 rounded-md flex">
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
