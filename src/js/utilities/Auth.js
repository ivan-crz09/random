import User from '../random/User'


class Auth {
    login(email, password) {
        return new Promise((resolve, reject) => {
            User.login(email, password).then(({data}) => {

                console.log('dataaaa',data)
                if(data.token != ''){
                    console.log('exito')
                    // :: Set token
                    window.axios.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + data.token
                    store.commit('setToken',data.token)
                    store.commit('setUser', data.result)
                    return resolve({})
                }else{
                    console.log('falso')
                    store.commit('setToken', false)
                    window.axios.defaults.headers.common['Authorization'] = ''
                    return reject(data)
                }
            }).catch(err => {
                console.log('error',err)
                return reject(err)
            })
        })
    }

    logout(){
        store.commit('setUser', false)
        store.commit('setToken', false)
        window.axios.defaults.headers.common['Authorization'] = null
    }

}


export default new Auth
