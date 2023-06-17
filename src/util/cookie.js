import { Cookies } from "react-cookie";

const cookies = new Cookies();

//create cookie
export const setCookie = (name, value, options) => {
    return cookies.set(name, value, {...options})
}

//create cookie
export const getCookie = (name) => {
    return cookies.get(name)
}

//create cookie
export const removeCookie = (name) => {
    return cookies.remove(name)
}