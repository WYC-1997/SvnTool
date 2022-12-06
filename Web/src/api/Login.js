import http from "@/utils/http";

import { message } from "ant-design-vue";


export class Login {
  static async loginIn(params) {
    const httpRes = await http.post("/api/user/login", params);
    if (httpRes.code === '200') {
      message.success("登陆成功!");
      return httpRes.data;
    } else {
      message.error('登陆失败!')
      throw httpRes;
    }
  }
  static async loginOut() {
    const httpRes = await http.get("/api/user/loginOut");
    if (httpRes.code === '200') {
      message.success('登出成功!')
      return httpRes.data;
    } else {
      message.error('登出失败!')
      throw httpRes;
    }
  }
}
