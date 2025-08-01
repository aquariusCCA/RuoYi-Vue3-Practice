import { setMany } from "idb-keyval";
import { login, getInfo, getCodeImg } from "./jsons/user.json";
import { getRouters } from './jsons/menu.json';
import { listUser, deptTreeSelect } from './jsons/system/user.json';
import { getConfigKey } from './jsons/system/config.json';
import { listDept } from './jsons/system/dept.json';

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
      [`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&mode=test`, listUser],
      [`${BASE_URL}/system/user/deptTree?mode=test`, deptTreeSelect],
      [`${BASE_URL}/system/config/configKey/sys.user.initPassword?mode=test`, getConfigKey],
      [`${BASE_URL}/system/dept/list?mode=test`, listDept],
    ]);
  } catch (err) {
    console.log(err);
  }
};
