import React, { useState } from 'react';
import { IFormPropsAbout } from '../../../../model/formprops/about.model';
import { useAppSelector } from '../../../../redux/hooks';

function EditFrom({ show, setShow, dataInfo, setDataInfo, id }: IFormPropsAbout) {
  const [from, setFrom] = useState('');
  const data = useAppSelector((state) => state.aboutReducer.dataInfo);
  const handleCancel = () => {
    setShow({ ...show, from: false });
    data.map((a) => {
      if (a.id === id) {
        setDataInfo(dataInfo.concat(a));
      }
      return a;
    });
  };
  const handleSubmitEditFrom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={(e) => handleSubmitEditFrom(e)} className="mb-3">
      <div>
        <input
          className="w-full text-sm border rounded-lg transition-all mb-3 pr-1 py-4 pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black hover:border-slate-400"
          placeholder="Quê quán"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>
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

export default EditFrom;
