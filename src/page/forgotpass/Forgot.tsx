import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
type FormValue = {
  username: string;
};

const Forgot = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const handleSubmitForm: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center bg-gray-50 h-screen">
      <div className="w-500">
        <form onSubmit={handleSubmit(handleSubmitForm)} className="bg-white shadow-4xl rounded-2xl">
          <div>
            <h2 className="text-xl font-semibold leading-6 py-18px pr-4 pl-18px ">Tìm tài khoản của bạn</h2>
          </div>
          <div className="w-full border-b flex"></div>
          <div className="p-4">
            {errors.username && (
              <div className="p-3 border border-red-600 bg-red-be8">
                <div>
                  <p className="font-semibold text-15px">Vui lòng điền vào ít nhất một trường</p>
                  <p className="text-13px">Điền vào ít nhất một mục bên dưới để tìm kiếm tài khoản của bạn</p>
                </div>
              </div>
            )}
            <div className="mb-4">
              <p>Vui lòng nhập email hoặc số di động để tìm kiếm tài khoản của bạn</p>
            </div>
            <div className="w-full">
              <input
                className="w-full p-4 outline-none border rounded-lg placeholder:opacity-100"
                placeholder="Email hoặc số di động"
                {...register('username', { required: true, maxLength: 12, minLength: 4 })}
              />
            </div>
          </div>
          <div className="w-full border-b flex"></div>
          <div className="p-4 flex justify-end items-center">
            <button className="rounded-md text-15px leading-9 ml-2 px-5 bg-stone-400 text-black font-semibold opacity-75">Hủy</button>
            <button className="bg-blue-600 rounded-md text-15px leading-9 ml-2 px-5 text-white font-semibold">Tìm kiếm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
