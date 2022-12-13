import {
    login
} from '../../api/user'
import md5 from 'md5'
import {
    setItem,
    getItem
} from '../../utils/storage';
import {
    TOKEN
} from '../../constant/index'

export default {
    namespaced: true,
    state: () => ({
        token: getItem(TOKEN) || '',
        userInfo: {}
      }),
    mutations: {
        setToken(state, token) {
            state.token = token;
            console.log(TOKEN);
            setItem(TOKEN, token)
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        }
    },
    actions: {
        //登录请求动作
        login(context, userinfo) {
            const {
                username,
                password
            } = userinfo;
            return new Promise((resolve, reject) => {
                login({
                    username: username,
                    password: md5(password)
                }).then(data => {
                    console.log(data);
                    this.commit('user/setToken', data.token)
                    router.push('/index')
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },
        // 获取用户信息
        async getUserInfo(context) {
            const res = await getUserInfo()
            this.commit('user/setUserInfo', res)
        }
    },
}