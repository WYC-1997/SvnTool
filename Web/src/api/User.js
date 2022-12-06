import http from "@/utils/http";

export class UserService {
  static updatePassWord(params) {
    return http.post("api/Svn/UpdatePassWord", params)
  }
}
