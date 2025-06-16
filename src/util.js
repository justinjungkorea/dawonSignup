// src/util.js

/**
 * 숫자만 뽑아서 하이픈을 붙여줍니다.
 */
export function formatPhone(value) {
  const digits = value.replace(/\D/g, '');
  if (digits.startsWith('02')) {
    // 서울 지역번호
    if (digits.length <= 2) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
    if (digits.length <= 9) return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
    return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6, 10)}`;
  } else {
    // 기타 3자리 국번
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    if (digits.length <= 10) {
      const mid = digits.length - 4;
      return `${digits.slice(0, 3)}-${digits.slice(3, mid)}-${digits.slice(mid)}`;
    }
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7, 11)}`;
  }
}

/**
 * 010-1234-5678, 02-123-4567 같은 형식을 검증합니다.
 */
export function isPhoneValid(number) {
  return (
    /^01[016789]-\d{3,4}-\d{4}$/.test(number) ||
    /^0\d{1,2}-\d{3,4}-\d{4}$/.test(number)
  );
}
