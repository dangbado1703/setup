import React, { useEffect, useState } from 'react';
import { IFormPropsAbout } from '../../../../model/formprops/about.model';
import { useAppSelector } from '../../../../redux/hooks';

const valueMarry = [
  {
    id: 1,
    name: 'Độc thân',
    value: 'alone',
  },
  {
    id: 2,
    name: 'Đã kết hôn',
    value: 'married',
  },
];
function EditHeart({ show, setShow, dataInfo, setDataInfo, id }: IFormPropsAbout) {
  const [iconHeart, setIconHeart] = useState('');
  const [valueMarried, setValueMarried] = useState('');
  const [showSelect, setShowSelect] = useState(false);
  const data = useAppSelector((state) => state.aboutReducer.dataInfo);
  useEffect(() => {
    if (iconHeart) {
      if (iconHeart === 'alone') {
        setValueMarried('Độc thân');
      }
      if (iconHeart === 'married') {
        setValueMarried('Đã kết hôn');
      }
    } else {
      setValueMarried('');
    }
  }, [iconHeart]);
  const handleCancel = () => {
    setShow({ ...show, heart: false });
    data.map((a) => {
      if (a.id === id) {
        setDataInfo(dataInfo.concat(a));
      }
      return a;
    });
  };
  const handleSubmitEditHeart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleFocus = () => {
    setShowSelect(true);
  };
  const handleChooseValue = (value: string) => {
    setIconHeart(value);
    setShowSelect(false);
  };
  return (
    <form onSubmit={(e) => handleSubmitEditHeart(e)} className="mb-3">
      <div>
        <input
          className="w-full text-sm border rounded-lg transition-all mb-3 pr-1 py-4 pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black hover:border-slate-400"
          placeholder="Tình trạng hôn nhân"
          type="select"
          defaultValue={valueMarried}
          onFocus={handleFocus}
        />
      </div>
      {showSelect && (
        <div className="border rounded-lg px-3 py-3 mb-3">
          <div>
            {valueMarry.map((a) => (
              <div
                key={a.id}
                role="presentation"
                onClick={() => handleChooseValue(a.value)}
                className="py-1 hover:bg-slate-200 px-3 rounded-md cursor-pointer">
                <span>{a.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="flex justify-end">
        <button onClick={handleCancel} type="button" className="w-20 border py-2 rounded-md bg-slate-200 focus:border-b-gray-200">
          Hủy
        </button>
        <button type="submit" className="ml-3 w-20 border py-2 rounded-md bg-blue-600 text-white focus:border-sky-500 focus:ring-2">
          Lưu
        </button>
      </div>
    </form>
  );
}

export default EditHeart;
