function getNativeLocalStorage() {
  return localStorage;
}

export function getLanguage() {
  const storage = getNativeLocalStorage();
  const storedLang = storage.getItem('lang');
  return storedLang || 'vi'; // Default languge is VI
}

export function setLanguage(lang: string) {
  const storage = getNativeLocalStorage();
  storage.setItem('lang', lang);
}

export function CalculatePagination(current: number, total: number) {
  const last = total;
  const delta = 2;
  const left = current - delta;
  const right = current + delta + 1;
  const range = [];
  const rangeWithDots = [];
  let l: number;

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i = 0; i < range.length; i++) {
    const num = range[i];
    if (l) {
      if (num - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (num - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(num);
    l = num;
  }

  return rangeWithDots;
}