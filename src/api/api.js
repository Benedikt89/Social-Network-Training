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
};

export const profileAPI = {
    uploadUser (userId) {
        return instanse.get(`profile/`+ userId)
            .then(res => {
                return res.data
            })
    },
    uploadStatus (userId) {
        return instanse.get(`profile/status/`+ userId)
            .then( res => {
                if (res.data) {
                    return res.data
                }
            })
    },
    updateStatus (status) {
        return instanse.put(`profile/status/`, {status: status})
            .then( res => {
                return res.data.resultCode;
            })
    },
    updateProfile (profile) {
        return instanse.put(`profile`, profile)
            .then( res => {
                return res.data;
            })
    },
    saveAvatar (photo) {
        let formData = new FormData();
        formData.append('image', photo);
        return instanse.put(`profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
            .then( res => {
                return res.data;
            })
    },
};

export const authAPI = {
    getAuth () {
        return instanse.get(`auth/me`)
            .then(res => {
                return res.data;
            })
    },
    login (email, password, rememberMe = false, captcha = null) {
        return instanse.post(`auth/login/`, {email, password, rememberMe, captcha})
            .then(res => {
                return res.data;
            })
    },
    logOut () {
        return instanse.delete(`auth/login/`)
            .then(res => {
                return res.data;
            })
    },
    getCaptchaUrl () {
        return instanse.get(`security/get-captcha-url`)
            .then(res => {
                return res.data;
            })
    }
};
