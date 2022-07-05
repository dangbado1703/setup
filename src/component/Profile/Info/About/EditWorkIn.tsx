import React, { useState } from 'react';
import { IFormPropsAbout } from '../../../../model/formprops/about.model';
import { IFormValueEditWorkIn } from '../../../../model/formvalue/editWorkIn.model';
import { useAppSelector } from '../../../../redux/hooks';

function EditWorkIn({ show, setShow, dataInfo, setDataInfo, id }: IFormPropsAbout) {
  const [formEditWork, setFormEditWork] = useState<IFormValueEditWorkIn>({
    company: '',
    position: '',
    describe: '',
  });
  const data = useAppSelector((state) => state.aboutReducer.dataInfo);
  const handleCancel = () => {
    setShow({
      ...show,
      workIn: false,
    });
    data.map((a) => {
      if (a.id === id) {
        setDataInfo(dataInfo.concat(a));
      }
      return a;
    });
  };
  const handleSubmitEditWork = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formEditWork);
  };
  return (
    <div className="mb-3">
      <form onSubmit={handleSubmitEditWork}>
        <div>
          <div>
            <input
              className="w-full text-sm border rounded-lg transition-all mb-3 pr-1 py-4 pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black hover:border-slate-400"
              placeholder="Công ty"
              value={formEditWork.company}
              onChange={(e) => setFormEditWork({ ...formEditWork, company: e.target.value })}
            />
          </div>
          <div>
            <input
              className="w-full text-sm border rounded-lg transition-all mb-3 pr-1 py-4 pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black hover:border-slate-400"
              placeholder="Chức vụ"
              value={formEditWork.position}
              onChange={(e) => setFormEditWork({ ...formEditWork, position: e.target.value })}
            />
          </div>
          <div>
            <input
              className="w-full text-sm border rounded-lg transition-all mb-3 pr-1 py-4 pl-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 text-black hover:border-slate-400"
              placeholder="Mô tả"
              value={formEditWork.describe}
              onChange={(e) => setFormEditWork({ ...formEditWork, describe: e.target.value })}
            />
          </div>
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
export default EditWorkIn;