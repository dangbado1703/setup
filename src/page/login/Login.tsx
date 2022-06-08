import { faPlus, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';
import { path } from '../../routes/routes';
import Register from '../register/Register';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    localStorage.setItem('token', 'asdasfasf');
    navigate(path.HOME);
  };
  const handleRegister = () => {
    navigate('/register');
  };
  return (
    <div className="flex justify-center items-center bg-gray-50 h-screen">
      <div className="flex h-screen w-980">
        <div className="w-1/2 flex justify-center items-center flex-col">
          <div className="w-536 ml-40">
            <p className="text-blue-600 text-6xl mb-3">facebook</p>
            <p className="text-3xl font-medium mb-3">Đăng nhập gần đây</p>
            <p className="opacity-80 text-sm">Nhấp vào ảnh của bạn hoặc thêm tài khoản</p>
            <div className="flex h-52 mt-8">
              <div className="w-40 border rounded-2xl overflow-hidden hover:shadow-3xl duration-300 cursor-pointer mr-5">
                <div className="h-40 w-40 flex justify-center items-center bg-stone-100">
                  <img />
                </div>
                <div className="h-1/4 flex justify-center items-center">
                  <p className="text-lg text-blue-600">Tên</p>
                </div>
              </div>
              <div className="w-40 border rounded-2xl overflow-hidden hover:shadow-3xl duration-300 transition-all transition-shadow cursor-pointer">
                <div className="h-40 w-40 flex justify-center items-center bg-stone-100">
                  <div className="w-11 h-11 bg-blue-600 flex justify-center items-center rounded-full">
                    <FontAwesomeIcon icon={faPlus} className="text-3xl text-white" />
                  </div>
                </div>
                <div className="h-1/4 flex justify-center items-center">
                  <p className="text-lg text-blue-600">Thêm tài khoản</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-4/5 flex justify-center items-center flex-col bg-white p-4 rounded-xl shadow-4xl">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex justify-center items-center flex-col">
              <div className="w-full relative mb-5">
                <input
                  className={`w-full outline-none  border p-3 rounded-xl ${
                    errors.username ? 'border-red-600 focus:border-red-600' : 'focus:border-blue-400'
                  }`}
                  type="text"
                  defaultValue=""
                  {...register('username', { required: true, maxLength: 12, minLength: 4 })}
                  placeholder="Email hoặc điện thoại"
                />
                {errors.username && (
                  <>
                    <div className="absolute top-14px right-14px">
                      <FontAwesomeIcon className="text-red-600" icon={faTriangleExclamation} />
                    </div>
                    <p className="text-red-600 text-xs mt-2">Vui lòng nhập từ 4 đến 12 kí tự</p>
                  </>
                )}
              </div>
              <div className="w-full relative mb-5">
                <input
                  className={`w-full outline-none  border p-3 rounded-xl ${
                    errors.username ? 'border-red-600 focus:border-red-600' : 'focus:border-blue-400'
                  }`}
                  type="password"
                  defaultValue=""
                  {...register('password', { required: true, maxLength: 12, minLength: 4 })}
                  placeholder="Mật khẩu"
                />
                {errors.username && (
                  <>
                    <div className="absolute top-14px right-14px">
                      <FontAwesomeIcon className="text-red-600" icon={faTriangleExclamation} />
                    </div>
                    <p className="text-red-600 text-xs mt-2">Vui lòng nhập từ 4 đến 12 kí tự</p>
                  </>
                )}
              </div>
              <button className="w-full h-11 rounded-lg bg-blue-500 text-white text-lg" type="submit">
                Đăng nhập
              </button>
            </form>
            <div className="mt-4 w-full text-center">
              <Link className="text-sm text-blue-600 hover:underline" to={`${path.FORGOT}`}>
                Quên mật khẩu?
              </Link>
            </div>
            <div className="w-full border-b flex mx-4 my-5"></div>
            <div className="w-full flex justify-center items-center">
              <button onClick={handleRegister} className="bg-green-500 rounded-md px-4 leading-48px font-semibold text-white w-44">
                Tạo tài khoản mới
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
