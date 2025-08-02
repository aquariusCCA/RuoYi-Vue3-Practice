import { http, HttpResponse, passthrough } from "msw";
import { ApiMode } from "@/utils/request";
import { get as getDataFromIdb } from "idb-keyval";

const BASE_URL = import.meta.env.VITE_SERVER;

const mockResolver = async ({ request }) => {
  console.log("Mocking request:", request);

  // 1. 先取得 method，並轉小寫方便比對
  const method = request.method.toLowerCase();

  // 2. 根據 method 分別解析 mode
  let modeValue;
  if (["post", "put", "patch", "delete"].includes(method)) {
    // 對於有 body 的請求，從 JSON body 讀
    try {
      const body = await request.clone().json();
      // body.mode 可能是 ApiMode.TEST，也可能是其他字串
      modeValue = body?.mode;
    } catch {
      // 如果 parse 失敗（如非 JSON），modeValue 保持 undefined
    }
  } else {
    // 對於 GET/HEAD 等無 body 的請求，從 URL query 拿
    const url = new URL(request.url.toString());
    modeValue = url.searchParams.get("mode") || undefined;
  }

  // 3. 若 mode === TEST，則回傳假資料；否則 passthrough
  if (modeValue?.toLowerCase() === ApiMode.TEST) {
    // 這裡的 key 可以依你的需求決定：可用完整 URL，也可用 endpoint path
    const data = await getDataFromIdb(request.url.toString());
    return HttpResponse.json(data);
  }

  // 預設放行到真實伺服器
  return passthrough();
};

export const handlers = [
  // 模擬登入、獲取用戶信息和路由
  http.get(`${BASE_URL}/captchaImage?mode=test`, mockResolver),
  http.post(`${BASE_URL}/login`, mockResolver),
  http.post(`${BASE_URL}/logout`, mockResolver),
  http.get(`${BASE_URL}/getInfo?mode=test`, mockResolver),
  http.get(`${BASE_URL}/getRouters?mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=101&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=102&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=103&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=104&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=105&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=106&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=107&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=108&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=109&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=20&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=30&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=50&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&userName=admin&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&phonenumber=1234567890&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&status=0&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/list?pageNum=1&pageSize=10&params%5BbeginTime%5D=2025-05-01&params%5BendTime%5D=2025-05-30&mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/user/deptTree?mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/config/configKey/sys.user.initPassword?mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/dict/data/type/sys_normal_disable?mode=test`, mockResolver),
  http.get(`${BASE_URL}/system/dict/data/type/sys_user_sex?mode=test`, mockResolver),
  http.put(`${BASE_URL}/system/user/changeStatus`, mockResolver),
];
