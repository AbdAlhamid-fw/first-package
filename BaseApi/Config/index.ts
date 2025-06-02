

import {readCookies} from "../../BaseApi/helpers.ts";

export const AppName = "Dashboard"

export interface IBaseUrls {
    REACT_APP_BASE_API_URL: any;
    REACT_APP_API_URL: any;
}

export type baseUrlsType = keyof IBaseUrls;


export const baseUrlsENV: IBaseUrls = {
    REACT_APP_BASE_API_URL: process.env.VITE_REACT_APP_BASE_API_URL,
    REACT_APP_API_URL: process.env.VITE_REACT_APP_API_URL,
};

export const baseUrls: IBaseUrls = {
    REACT_APP_BASE_API_URL: process.env.VITE_REACT_APP_BASE_API_URL,
    REACT_APP_API_URL: process.env.VITE_REACT_APP_API_URL,
};

const config = {
    baseUrl: "enter-your-base-url",
    headers: {
        // Authorization: `Bearer ${readCookies().accessToken}`,

    },
};

export default config;
