import Mock from "mockjs";
const userInfo = [];
for (let i = 0; i < 50; i++) {
  userInfo.push(
    Mock.mock({
      username: "@cname",
      desc: '@ctitle(4,10)',
      "age|20-30": 23,
      id: "@guid()",
      title: "@ctitle()",
      content: "@cparagraph(5,10)",
      img_url: "@image('50*50','#FF83FA','#FCFCFC','png','mono')",
      add_time: "@date(yyyy-MM-dd hh:mm:ss)",
    })
  );
}

export default {
    getInfo(){
        return {
            msg: "success",
            code: 200,
            data: userInfo,
        }
    }
}
