import { setMany } from "idb-keyval";
import { login, logout, getInfo, getCodeImg } from "./jsons/login.json";
import { getRouters } from "./jsons/menu.json";
import {
  listUserDeptId101,
  listUserDeptId102,
  listUserDeptId103,
  listUserDeptId104,
  listUserDeptId105,
  listUserDeptId106,
  listUserDeptId107,
  listUserDeptId108,
  listUserDeptId109,
  listUserPageSize10,
  listUserPageSize20,
  listUserPageSize30,
  listUserPageSize50,
  listUserByUserName,
  listUserByStatus,
  listUserByPhonenumber,
  listUserByDate,
  deptTreeSelect,
  changeUserStatus,
} from "./jsons/system/user.json";
import { getConfigKeySysUserInitPassword } from "./jsons/system/config.json";
import {
  getDictsSysNormalDisable,
  getDictsSysUserSex,
} from "./jsons/system/dict/data.json";
import {
  listRolePageSize10,
  listRoleByRoleName,
  listRoleByRoleKey,
  listRoleByStatus,
  listRoleByDate,
  addRole,
  changeRoleStatus,
  getRoleByRoleId1,
  updateRole,
  delRole
} from "./jsons/system/role.json";
import {
  treeselect,
  roleMenuTreeselectByRpleId1,
} from "./jsons/system/menu.json";

const BASE_URL = import.meta.env.VITE_SERVER;

/** 注入假資料 */
export const setSeeds = async () => {
  try {
    await setMany([
      // 這裡設定假資料 json mapping
      // [url, json key]
      [`${BASE_URL}/captchaImage?mode=test`, getCodeImg],
      [`${BASE_URL}/login`, login],
      [`${BASE_URL}/logout`, logout],
      [`${BASE_URL}/getInfo?mode=test`, getInfo],
      [`${BASE_URL}/getRouters?mode=test`, getRouters],
      [
        `${BASE_URL}/system/dict/data/type/sys_normal_disable?mode=test`,
        getDictsSysNormalDisable,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=101&mode=test`,
        listUserDeptId101,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=102&mode=test`,
        listUserDeptId102,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=103&mode=test`,
        listUserDeptId103,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=104&mode=test`,
        listUserDeptId104,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=105&mode=test`,
        listUserDeptId105,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=106&mode=test`,
        listUserDeptId106,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=107&mode=test`,
        listUserDeptId107,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=108&mode=test`,
        listUserDeptId108,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&deptId=109&mode=test`,
        listUserDeptId109,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&mode=test`,
        listUserPageSize10,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=20&mode=test`,
        listUserPageSize20,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=30&mode=test`,
        listUserPageSize30,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=50&mode=test`,
        listUserPageSize50,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&userName=admin&mode=test`,
        listUserByUserName,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&phonenumber=1234567890&mode=test`,
        listUserByPhonenumber,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&status=0&mode=test`,
        listUserByStatus,
      ],
      [
        `${BASE_URL}/system/user/list?pageNum=1&pageSize=10&params%5BbeginTime%5D=2025-05-01&params%5BendTime%5D=2025-05-31&mode=test`,
        listUserByDate,
      ],
      [`${BASE_URL}/system/user/deptTree?mode=test`, deptTreeSelect],
      [
        `${BASE_URL}/system/config/configKey/sys.user.initPassword?mode=test`,
        getConfigKeySysUserInitPassword,
      ],
      [
        `${BASE_URL}/system/dict/data/type/sys_user_sex?mode=test`,
        getDictsSysUserSex,
      ],
      [`${BASE_URL}/system/user/changeStatus`, changeUserStatus],
      [
        `${BASE_URL}/system/role/list?pageNum=1&pageSize=10&mode=test`,
        listRolePageSize10,
      ],
      [
        `${BASE_URL}/system/role/list?pageNum=1&pageSize=10&roleName=%E8%B6%85%E7%BA%A7%E7%AE%A1%E7%90%86%E5%91%98&mode=test`,
        listRoleByRoleName,
      ],
      [
        `${BASE_URL}/system/role/list?pageNum=1&pageSize=10&roleKey=admin&mode=test`,
        listRoleByRoleKey,
      ],
      [
        `${BASE_URL}/system/role/list?pageNum=1&pageSize=10&status=0&mode=test`,
        listRoleByStatus,
      ],
      [
        `${BASE_URL}/system/role/list?pageNum=1&pageSize=10&params%5BbeginTime%5D=2025-05-01&params%5BendTime%5D=2025-05-31&mode=test`,
        listRoleByDate,
      ],
      [`${BASE_URL}/system/menu/treeselect`, treeselect],
      [`${BASE_URL}/system/role`, addRole],
      [`${BASE_URL}/system/role/changeStatus`, changeRoleStatus],
      [`${BASE_URL}/system/menu/roleMenuTreeselect/1?mode=test`, roleMenuTreeselectByRpleId1],
      [`${BASE_URL}/system/role/1?mode=test`, getRoleByRoleId1],
      [`${BASE_URL}/system/role`, updateRole],
      [`${BASE_URL}/system/role/1`, delRole],
    ]);
  } catch (err) {
    console.log(err);
  }
};
