"use strict";

const getCookieByName = name => {
    const decodedCookies = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookies.split('; ');

    for (let cookie of cookiesArray) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return "";
};

const setCookie = (name, value, days) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);

    const cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; 
                          expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieString;
};

const deleteCookie = name => {
    document.cookie = `${encodeURIComponent(name)}=; 
                          expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

const goToPage = url => {
    window.location.href = url;
};
