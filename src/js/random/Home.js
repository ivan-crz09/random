class Home {
    getAllSlider() {
        return axios.get(`${config.apiUrl}/welcome/slider`);
    }

    getMembership() {
        return axios.get(`${config.apiUrl}/welcome/membership`);
    }

    getPartners() {
        return axios.get(`${config.apiUrl}/home/list/partners`);
    }

}

export default new Home
