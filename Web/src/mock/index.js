import Mock from 'mockjs';
import Login from './Login';
import  user  from './UserInfo'
Mock.setup({ 
    timeout: '1000-3000'
})

Mock.mock('/api/user/login','post',Login.loginIn);
Mock.mock('/api/user/Info','get',user.getInfo);


export default Mock