import { faCircleExclamation, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { range } from '../../config/constants/constants';

interface FormRegister {
  last_name: string;
  first_name: string;
  username: string;
  password: string;
  day: string;
  month: string;
  year: string;
  gen: string;
}

const Register: React.FC = () => {
  const [value, setValue] = useState({
    day: 0 as number,
    month: 0 as number,
    year: 0 as number,
  });
  const day = range(1, 31);
  const month = range(1, 12);
  const getYear = new Date().getFullYear();
  const year = range(1970, getYear);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormRegister>({
    defaultValues: {
      last_name: '',
      first_name: '',
      username: '',
      password: '',
      day: new Date().getDate().toString(),
      month: (new Date().getMonth() + 1).toString(),
      year: new Date().getFullYear().toString(),
      gen: '',
    },
  });
  useEffect(() => {
    setValue({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    });
  }, []);

  const submitForm: SubmitHandler<FormRegister> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-432 bg-white rounded-xl shadow-register">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="px-4 py-10px text-center border-b">
            <h2 className="text-2xl text-e21 font-semibold leading-8">Tạo tài khoản mới</h2>
            <p className="text-15px leading-6 text-770">Nhanh chóng và dễ dàng</p>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center w-full">
              <div className="relative w-1/2 mr-2">
                <input
                  placeholder="Họ"
                  className={`outline-none text-15px leading-4 p-11px rounded w-full ${
                    errors.first_name ? 'border-red-500 border' : 'border'
                  }`}
                  {...register('first_name', { required: true, maxLength: 8, minLength: 4 })}
                />
                {errors.first_name && (
                  <FontAwesomeIcon className="absolute top-1/2 -translate-y-1/2 right-3 text-red-600" icon={faCircleExclamation} />
                )}
              </div>
              <div className="relative w-1/2">
                <input
                  placeholder="Tên"
                  className={`outline-none text-15px leading-4 p-11px rounded w-full ${
                    errors.last_name ? 'border-red-500 border' : 'border'
                  }`}
                  {...register('last_name', { required: true, maxLength: 8, minLength: 4 })}
                />
                {errors.last_name && (
                  <FontAwesomeIcon className="absolute top-1/2 -translate-y-1/2 right-3 text-red-600" icon={faCircleExclamation} />
                )}
              </div>
            </div>
            <div className="relative my-4">
              <input
                placeholder="Số di động hoặc email"
                className={`outline-none text-15px leading-4 p-11px rounded w-full ${errors.username ? 'border-red-500 border' : 'border'}`}
                {...register('username', { required: true, maxLength: 12, minLength: 4 })}
              />
              {errors.username && (
                <FontAwesomeIcon className="absolute top-1/2 -translate-y-1/2 right-3 text-red-600" icon={faCircleExclamation} />
              )}
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Mật khẩu mới"
                className={`outline-none text-15px leading-4 p-11px rounded w-full ${errors.password ? 'border-red-500 border' : 'border'}`}
                {...register('password', { required: true, maxLength: 12, minLength: 4 })}
              />
              {errors.password && (
                <FontAwesomeIcon className="absolute top-1/2 -translate-y-1/2 right-3 text-red-600" icon={faCircleExclamation} />
              )}
            </div>
            <div className="flex flex-col mt-3">
              <p className="mb-1 text-770 text-xs">
                Sinh nhật <FontAwesomeIcon icon={faCircleQuestion} />
              </p>
              <div className="flex justify-around">
                <select
                  {...register('day')}
                  className="w-1/3 outline-none text-15px leading-4 border p-10px rounded"
                  // value={value.day}
                  // onChange={(e) => setValue({ ...value, day: +e.target.value })}
                >
                  {day.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
                <select
                  {...register('month')}
                  className="w-1/3 mx-2 outline-none text-15px leading-4 border p-10px rounded"
                  // value={value.month}
                  // onChange={(e) => setValue({ ...value, month: +e.target.value })}
                >
                  {month.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
                <select
                  {...register('year')}
                  className="w-1/3 outline-none text-15px leading-4 border p-10px rounded"
                  // value={value.year}
                  // onChange={(e) => setValue({ ...value, year: +e.target.value })}
                >
                  {year.map((a) => (
                    <option key={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col mt-3 pb-2">
              <p className="mb-1 text-770 text-xs">
                Giới tính <FontAwesomeIcon icon={faCircleQuestion} />
              </p>
              <div className="flex justify-around">
                <div className="w-1/3 border rounded p-2 flex justify-between items-center">
                  <span className="text-15px">Nữ</span>
                  <input {...register('gen')} type="radio" />
                </div>
                <div className="w-1/3 border rounded p-2 mx-2 flex justify-between items-center">
                  <span className="text-15px">Nam</span>
                  <input {...register('gen')} type="radio" />
                </div>
                <div className="w-1/3 border rounded p-2 flex justify-between items-center">
                  <span className="text-15px">Tùy chỉnh</span>
                  <input {...register('gen')} type="radio" />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center items-center mt-8 mb-5">
              <button type="submit" className="w-1/3 text-white bg-green-600 rounded-md h-9 text-lg px-8 font-semibold">
                Đăng ký
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
