import instanse from "./instanse";

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 20){
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data;
            })
    },
    follow (userId) {
        return instanse.post(`follow/${userId}`)
            .then(res => {
                return res.data.resultCode;
            });
    },
    unFollow (userId) {
        return instanse.delete(`follow/`+ userId)
            .then(res => {
                return res.data.resultCode;
            });
    },
    uploadUser (userId) {
        return instanse.get(`profile/`+ userId)
            .then(res => {
                return res.data
            })
    },
};

export const authAPI = {
    getAuth () {
        return instanse.get(`auth/me`)
            .then(res => {
                return res.data;
            })
    }
};
