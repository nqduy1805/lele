// components/OtpInput.tsx
import React, { useEffect, useState } from 'react';

interface OtpInputProps {
  length?: number;
  onChange: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value.slice(0, 1); // Chỉ lấy ký tự đầu tiên
      setOtp(newOtp);
      onChange(newOtp.join('')); // Gửi giá trị OTP lên component cha

      // Chuyển đến input tiếp theo
      if (value && index < length - 1) {
        document.getElementById(`otp-input-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`)?.focus(); // Chuyển về input trước
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength={1}
          style={{
            width: '40px',
            height: '40px',
            textAlign: 'center',
            margin: '0 5px',
            fontSize: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
      ))}
    </div>
  );
};

export default OtpInput;
