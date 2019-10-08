import {getAuthUserData} from "./AuthReducer";

const INITIALISED_SUCCESS = 'INITIALISED_SUCCESS';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALISED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };

        default:
            return state;
    }
};


const _initialisedSuccess = () => {
    return ({type: INITIALISED_SUCCESS})
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(_initialisedSuccess());
        })
};

export default appReducer;