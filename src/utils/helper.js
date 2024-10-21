
export const validate = (data) => {
    // objeyi diziye çevirdik ardından en az bir tane elemanı null veya "" şeklinde kontrol ettikk
    // en az bir tanesi boş ise false döndürür
    // hepsi doluysa true döndürür
    const isValid = !Object.values(data).some((i) => i === null || i === '');
    return isValid;
};

// elemanı local storage ekler
export const saveToLocale = (key, value) => {
    // stringe çevirme
    const str = JSON.stringify(value);
    // locale kaydetme
    localStorage.setItem(key, str);
};