'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const FORM_STYLES = {
  container: 'w-full max-w-md space-y-6',
  inputWrapper: 'w-full space-y-1',
  label: 'block text-sm font-medium text-gray-700',
  input:
    'w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-black',
  button:
    'w-full py-2 text-white bg-black rounded-md transition-colors hover:bg-gray-800',
  description: 'text-center text-gray-600 text-sm mb-8',
} as const;

export default function ResetPWForm() {
  const router = useRouter();
  const [passwords, setPasswords] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 여기서 비밀번호 변경 API 호출
    router.push('/auth/login');
  };

  return (
    <div className={FORM_STYLES.container}>
      <p className={FORM_STYLES.description}>
        새로운 비밀번호를 입력후 변경 버튼을 눌러주세요
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className={FORM_STYLES.inputWrapper}>
          <label htmlFor="newPassword" className={FORM_STYLES.label}>
            새 비밀번호
          </label>
          <input
            type="password"
            id="newPassword"
            value={passwords.newPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, newPassword: e.target.value })
            }
            placeholder="영문, 숫자, 특수문자 조합 8자리 이상"
            className={FORM_STYLES.input}
            required
          />
        </div>

        <div className={FORM_STYLES.inputWrapper}>
          <label htmlFor="confirmPassword" className={FORM_STYLES.label}>
            비밀번호 확인
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={passwords.confirmPassword}
            onChange={(e) =>
              setPasswords({ ...passwords, confirmPassword: e.target.value })
            }
            placeholder="비밀번호를 한번 더 입력해주세요"
            className={FORM_STYLES.input}
            required
          />
        </div>

        <button type="submit" className={FORM_STYLES.button}>
          변경
        </button>
      </form>
    </div>
  );
}
