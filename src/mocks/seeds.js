import { setMany } from "idb-keyval";
import { login, getInfo, getCodeImg } from "./jsons/user.json";
import { getRouters } from './jsons/menu.json';

const BASE_URL = import.meta.env.VITE_SERVER;

/** 注入假資料 */
export const setSeeds = async () => {
  try {
    await setMany([
      // 這裡設定假資料 json mapping
      // [url, json key]    
      [`${BASE_URL}/captchaImage?mode=test`, getCodeImg],
      [`${BASE_URL}/login`, login],
      [`${BASE_URL}/getInfo?mode=test`, getInfo],
      [`${BASE_URL}/getRouters?mode=test`, getRouters],
    ]);
  } catch (err) {
    console.log(err);
  }
};
