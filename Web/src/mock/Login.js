
import Mock from 'mockjs'
const userList = Mock.mock( [
  {
    username: "admin",
    password: "123456",
    roles: "admin",
    name: "张三",
    age: 23,
    job: "前端工程师",
    token: "@guid()",
    id: "100",

  },
  {
    username: "editor",
    password: "123456",
    roles: "editor",
    name: "测试1",
    "age|20-30": 23,
    job: "前端工程师",
    token: "@guid()",
    id: "101",
  },
  {
    username: "@word(3, 5)",
    password: "123456",
    roles: "editor",
    name: "@cname",
    "age|20-30": 23,
    "job|1": ["前端工程师", "后端工程师", "UI工程师", "需求工程师"],
    token: "@guid()",
    id: "102",
  },
],)
export default {
  /**
   * 登陆
   * @param config
   * @returns
   */
  loginIn(config) {
    const { username, password } = JSON.parse(config.body); //将传递进来的数据保存
    for (let i = 0; i < userList.length; i++) {
      //判断userList中是否存在该用户并且用户密码是否正确
      if (
        username === userList[i].username &&
        password === userList[i].password
      ) {
        return {
          msg: "success",
          code: "200",
          data: userList[i]
        };
      }
    }
    return {
      msg: "error",
      code: "400",
      data: null,
    };
  },
  loginOut(){
      return{
        msg: "success",
        code: "200",
        data: 'success'
      }
  }
};
