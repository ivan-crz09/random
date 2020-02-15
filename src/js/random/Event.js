
class Event {
    getAll() {
        return axios.get(`${config.apiUrl}/events/list`);
    }

    getEvent(id){
        return axios.get(`${config.apiUrl}/events/${id}`)
    }

    getPaginate(paginate,filter=null){
        return axios.get(`${config.apiUrl}/events-paginate`,{
            params: {
                paginate: paginate,
                filter:filter
            }
        })
    }

    getAllEventSlider() {
        return axios.get(`${config.apiUrl}/events/getSliders`);
    }

}

export default new Event
