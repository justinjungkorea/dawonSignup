import React, { useState } from 'react';
import { formatPhone, isPhoneValid } from './util';

function App() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gender: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'phone') {
      setFormData((prev) => ({ ...prev, phone: formatPhone(value) }));
    } else if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, gender, terms } = formData;
    const newErrors = {};

    if (!name) newErrors.name = true;
    if (!phone || !isPhoneValid(phone)) newErrors.phone = true;
    if (!gender) newErrors.gender = true;
    if (!terms) newErrors.terms = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form Data:', formData);
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <img
          src="/logo.png"
          alt="다원축산 로고"
          className="w-28 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-dawon-navy text-center mb-6">
          회원가입
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg bg-white text-dawon-navy placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 ring-red-300' : 'border-dawon-navy focus:ring-dawon-navy'}`}
          />

          <input
            type="tel"
            inputMode="numeric"
            name="phone"
            maxLength={13}
            placeholder="010-1234-5678 또는 02-123-4567"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg bg-white text-dawon-navy placeholder-gray-400 focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 ring-red-300' : 'border-dawon-navy focus:ring-dawon-navy'}`}
          />

          <div className="flex space-x-6 items-center">
            <label className="flex items-center text-dawon-navy">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
                className={`form-radio text-dawon-navy ${errors.gender ? 'ring-2 ring-red-400' : ''}`}
              />
              <span className="ml-2">남성</span>
            </label>
            <label className="flex items-center text-dawon-navy">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
                className={`form-radio text-dawon-navy ${errors.gender ? 'ring-2 ring-red-400' : ''}`}
              />
              <span className="ml-2">여성</span>
            </label>
          </div>

          <div className="flex space-x-2">
            <select
              name="birthYear"
              value={formData.birthYear}
              onChange={handleChange}
              className="flex-1 p-3 border border-dawon-navy rounded-lg bg-white text-dawon-navy focus:outline-none focus:ring-2 focus:ring-dawon-navy"
            >
              <option value="">연도</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}년
                </option>
              ))}
            </select>
            <select
              name="birthMonth"
              value={formData.birthMonth}
              onChange={handleChange}
              className="flex-1 p-3 border border-dawon-navy rounded-lg bg-white text-dawon-navy focus:outline-none focus:ring-2 focus:ring-dawon-navy"
            >
              <option value="">월</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}월
                </option>
              ))}
            </select>
            <select
              name="birthDay"
              value={formData.birthDay}
              onChange={handleChange}
              className="flex-1 p-3 border border-dawon-navy rounded-lg bg-white text-dawon-navy focus:outline-none focus:ring-2 focus:ring-dawon-navy"
            >
              <option value="">일</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}일
                </option>
              ))}
            </select>
          </div>

          <p className="text-xs font-semibold text-dawon-navy text-center">
            생년월일을 입력하시면 생일 쿠폰을 발송해드립니다
          </p>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className={`form-checkbox text-dawon-navy ${errors.terms ? 'ring-2 ring-red-400' : ''}`}
            />
            <label htmlFor="terms" className="ml-2 text-sm text-dawon-navy">
              개인정보 수집 및 이용에 동의합니다. (1년 이상 미이용 시 자동 삭제)
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-dawon-red text-white font-bold rounded-lg hover:bg-[#a10b26]"
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
