
class Banner {
    getAll() {
        return axios.get(`${config.apiUrl}/banners`);
    }
}

export default new Banner
