class User {
    login(email,password) {
        return axios.post(`${config.apiUrl}/user/admin/login`, {
            email,
            password
        });
    }

    getProfile(userCode) {
        return axios.get(`${config.apiUrl}/cliente/${userCode}`)
    }

    discountCoins(userCode){
        console.log('userCode',userCode)
        return axios.post(`${config.apiUrl}/user/cliente/discount`,{
            userCode
        })
    }
}

export default new User
