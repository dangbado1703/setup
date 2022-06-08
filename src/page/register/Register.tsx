import { faCircleExclamation, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { range } from '../../config/constants/constants';

const Register = () => {
  const [value, setValue] = useState({
    day: 0 as number,
    month: 0 as number,
    year: 0 as number,
  });
  const day = range(1, 31);
  const month = range(1, 12);
  const getYear = new Date().getFullYear();
  const year = range(1970, getYear);
  useEffect(() => {
    setValue({
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    });
  }, []);

  return (
    <div>
      <div>
        <form>
          <div>
            <h2>Đăng ký</h2>
            <p>Nhanh chóng và dễ dàng</p>
          </div>
          <div>
            <div>
              <div>
                <input />
                <FontAwesomeIcon icon={faCircleExclamation} />
              </div>
              <div>
                <input />
                <FontAwesomeIcon icon={faCircleExclamation} />
              </div>
            </div>
            <div>
              <input />
              <FontAwesomeIcon icon={faCircleExclamation} />
            </div>
            <div>
              <input />
              <FontAwesomeIcon icon={faCircleExclamation} />
            </div>
          </div>
          <div>
            <p>
              Sinh nhật <FontAwesomeIcon icon={faCircleQuestion} />
            </p>
            <div>
              <select value={value.day} onChange={(e) => setValue({ ...value, day: +e.target.value })}>
                {day.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
              <select value={value.month} onChange={(e) => setValue({ ...value, month: +e.target.value })}>
                {month.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
              <select value={value.year} onChange={(e) => setValue({ ...value, year: +e.target.value })}>
                {year.map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
