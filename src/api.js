const BASE_URL = 'https://mate-academy.github.io/phone-catalogue-static/api';

export const getProducts = async() => {
    const response  = await fetch(`${BASE_URL}/phones.json`)
    const products  = await response.json();
    return products;
};