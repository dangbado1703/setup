import React, { useState } from 'react';
import { IFormPropsAbout } from '../../../../model/formprops/about.model';
import { IFormValueEditSchool } from '../../../../model/formvalue/editOldSchool.model';
import { useAppSelector } from '../../../../redux/hooks';

function EditOldSchool({ show, setShow, dataInfo, setDataInfo, id }: IFormPropsAbout) {
  const [formEditSchool, setFormEditSchool] = useState<IFormValueEditSchool>({
    school: '',
    graduated: false,
    describe: '',
    degree: '',
    degreeInput: '',
  });
  const data = useAppSelector((state) => state.aboutReducer.dataInfo);
  const handleCancel = () => {
    setShow({ ...show, oldSchool: false });
    data.map((a) => {
      if (a.id === id) {
        setDataInfo(dataInfo.concat(a));
      }
      return a;
    });
  };
  const handleSubmitEditSchool = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formEditSchool);
  };
  return (
    <div className="mb-3">
      <form onSubmit={(e) => handleSubmitEditSchool(e)}>
        <div>
          <input
            className="w-full text-sm border rounded-lg transition-all mb-3 pr-1 py-4 pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black hover:border-slate-400"
            placeholder="Trường học"
            type="text"
            value={formEditSchool.school}
            onChange={(e) => setFormEditSchool({ ...formEditSchool, school: e.target.value })}
          />
        </div>
        <div className="flex justify-start items-center mb-2">
          <input
            type="checkbox"
            className="w-5 h-5 mr-2"
            checked={formEditSchool.graduated}
            onChange={() => setFormEditSchool({ ...formEditSchool, graduated: !formEditSchool.graduated })}
          />
          <span className="text-sm font-bold">Đã tốt nghiệp</span>
        </div>
        <div>
          <input
            className="w-full text-sm border rounded-lg transition-all mb-3 pr-1 py-4 pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black hover:border-slate-400"
            placeholder="Mô tả"
            value={formEditSchool.describe}
            onChange={(e) => setFormEditSchool({ ...formEditSchool, describe: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <div className="flex items-center justify-start mb-2">
            <input
              type="radio"
              className="w-5 h-5 mr-2"
              value="colleges"
              checked={formEditSchool.degree === '1'}
              onChange={() => setFormEditSchool({ ...formEditSchool, degree: '1' })}
            />
            <span>Cao đẳng</span>
          </div>
          <div className="flex items-center justify-start">
            <input
              type="radio"
              className="w-5 h-5 mr-2"
              value="university"
              checked={formEditSchool.degree === '2'}
              onChange={() => setFormEditSchool({ ...formEditSchool, degree: '2' })}
            />
            <span>Đại học</span>
          </div>
        </div>
        <div>
          <input
            placeholder="Bằng cấp"
            className="w-full text-sm border rounded-lg transition-all mb-3 pr-1 py-4 pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black hover:border-slate-400"
            value={formEditSchool.degreeInput}
            onChange={(e) => setFormEditSchool({ ...formEditSchool, degreeInput: e.target.value })}
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
    </div>
  );
}

export default EditOldSchool;
