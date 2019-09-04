const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';


let initialState = {
    users: [
        {
            name: 'Vasya',
            id: 1,
            avatarImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXVCQEfmyIF2ZSm5lw4GJ5BNy-hWEeRA8X0t3MPLGztI__Srv',
            followed: true,
        },
        {
            name: 'Anya',
            id: 2,
            avatarImage: 'https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1',
            followed: false,
        },
        {
            name: 'Tanya',
            id: 3,
            avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
            followed: true,
        },
        {
            name: 'Grigory',
            id: 4,
            avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
            age: 43,
            birthDate: '25 / 07 / 1987',
            profession: 'trubouklad4ik',
            education: 'some school on east',
            followed: true,
        },
    ],
};

const friendsReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map( u =>
                    u.id === action.userId ? {...u, followed: true}: u
                )
            };

        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map( u =>
                    u.id === action.userId ? {...u, followed: false}: u
                )
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };

        default:
            return state;
    }
};


export const followActionCreator = (userId) => {
    return ({
        type: FOLLOW_USER, userId: userId
    })
};
export const unfollowActionCreator = (userId) => {
    return ({type: UNFOLLOW_USER, userId: userId})
};
export const setUsersActionCreator = (users) => {
    return ({type: SET_USERS, users: users})
};


export default friendsReducer;