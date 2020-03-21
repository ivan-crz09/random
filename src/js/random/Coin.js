class Coin {
    list() {
        return axios.get(`${config.apiUrl}/coin/list`);
    }
}

export default new Coin