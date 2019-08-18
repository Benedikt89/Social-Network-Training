
let store = {

    // componentDidMount() {
    //     this.restoreState();
    // },
    // saveState() {
    //     let _stateAsString = JSON.stringify(this.state);
    //     localStorage.setItem("our-state", _stateAsString);
    // },
    // restoreState() {
    //     let state = {
    //         users: [
    //             {
    //                 name: 'Vasya',
    //                 id: 1,
    //                 avatarImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXVCQEfmyIF2ZSm5lw4GJ5BNy-hWEeRA8X0t3MPLGztI__Srv',
    //             },
    //             {
    //                 name: 'Anya',
    //                 id: 2,
    //                 avatarImage: 'https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1',
    //             },
    //             {
    //                 name: 'Tanya',
    //                 id: 3,
    //                 avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
    //             },
    //             {
    //                 name: 'Grigory',
    //                 id: 4,
    //                 avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
    //                 age: 43,
    //                 birthDate: '25 / 07 / 1987',
    //                 profession: 'trubouklad4ik',
    //                 education: 'some school on east',
    //
    //             },
    //         ],
    //         messages: [
    //             {
    //                 id: 1001,
    //                 userId: 2,
    //                 messageContent: 'Hello bro!',
    //                 avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
    //             },
    //             {
    //                 id: 1002,
    //                 userId: 2,
    //                 messageContent: 'Wats UP!',
    //                 avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
    //
    //             },
    //             {
    //                 id: 1003,
    //                 userId: 2,
    //                 messageContent: 'asdasf asdf sdfg er adf aefv adfvadv afdvadv adfv !',
    //                 avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
    //             },
    //             {
    //                 id: 1004,
    //                 userId: 1,
    //                 messageContent: 'SDV ASDVADFVADF AADS  vdfvdasfv adfvafdadfva sdf',
    //                 avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
    //             },
    //             {
    //                 id: 1005,
    //                 userId: 1,
    //                 messageContent: 'SDV ASDVADFVADF AADS  vdfvdasfv adfvafdadfva sdf',
    //                 avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
    //             },
    //             {
    //                 id: 1006,
    //                 userId: 2,
    //                 messageContent: '<img src=\'https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1\' />',
    //                 avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
    //             },
    //         ],
    //
    //         sideBar: [
    //             {
    //                 name: 'Vasya',
    //                 id: 1,
    //                 avatarImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXVCQEfmyIF2ZSm5lw4GJ5BNy-hWEeRA8X0t3MPLGztI__Srv',
    //             },
    //             {
    //                 name: 'Anya',
    //                 id: 2,
    //                 avatarImage: 'https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1',
    //             },
    //             {
    //                 name: 'Tanya',
    //                 id: 3,
    //                 avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
    //             },
    //             {
    //                 name: 'Grigory',
    //                 id: 4,
    //                 avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
    //                 age: 43,
    //                 birthDate: '25 / 07 / 1987',
    //                 profession: 'trubouklad4ik',
    //                 education: 'some school on east',
    //
    //             },
    //         ],
    //         myFeed: [
    //             {
    //                 id: 9001,
    //                 userId: 3,
    //                 content: 'OMG1111',
    //                 likeCount: 22,
    //                 avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
    //             },
    //             {
    //                 id: 9002,
    //                 userId: 4,
    //                 content: 'OMG NOOOOOOOOOO11',
    //                 likeCount: 2,
    //                 avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
    //             },
    //             {
    //                 id: 9003,
    //                 userId: 1,
    //                 content: 'How long, how long will i slide?',
    //                 likeCount: 11,
    //                 avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
    //             }
    //
    //         ],
    //         newPostText: [''],
    //         newMessageText: [''],
    //     };
    //
    //     let _stateAsString = localStorage.getItem("our-state");
    //     if (_stateAsString != null) {
    //         state = JSON.parse(_stateAsString);
    //     }
    //     this.setState(state);
    // },

    _state: {
        users: [
            {
                name: 'Vasya',
                id: 1,
                avatarImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXVCQEfmyIF2ZSm5lw4GJ5BNy-hWEeRA8X0t3MPLGztI__Srv',
            },
            {
                name: 'Anya',
                id: 2,
                avatarImage: 'https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1',
            },
            {
                name: 'Tanya',
                id: 3,
                avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
            },
            {
                name: 'Grigory',
                id: 4,
                avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
                age: 43,
                birthDate: '25 / 07 / 1987',
                profession: 'trubouklad4ik',
                education: 'some school on east',

            },
        ],
        messages: [
            {
                id: 1001,
                userId: 2,
                messageContent: 'Hello bro!',
                avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
            },
            {
                id: 1002,
                userId: 2,
                messageContent: 'Wats UP!',
                avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',

            },
            {
                id: 1003,
                userId: 2,
                messageContent: 'asdasf asdf sdfg er adf aefv adfvadv afdvadv adfv !',
                avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
            },
            {
                id: 1004,
                userId: 1,
                messageContent: 'SDV ASDVADFVADF AADS  vdfvdasfv adfvafdadfva sdf',
                avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
            },
            {
                id: 1005,
                userId: 1,
                messageContent: 'SDV ASDVADFVADF AADS  vdfvdasfv adfvafdadfva sdf',
                avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
            },
            {
                id: 1006,
                userId: 2,
                messageContent: '<img src=\'https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1\' />',
                avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
            },
        ],

        sideBar: [
            {
                name: 'Vasya',
                id: 1,
                avatarImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXVCQEfmyIF2ZSm5lw4GJ5BNy-hWEeRA8X0t3MPLGztI__Srv',
            },
            {
                name: 'Anya',
                id: 2,
                avatarImage: 'https://cdn.freelance.ru/img/portfolio/pics/00/37/9B/3644384.jpg?mt=57607de1',
            },
            {
                name: 'Tanya',
                id: 3,
                avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
            },
            {
                name: 'Grigory',
                id: 4,
                avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
                age: 43,
                birthDate: '25 / 07 / 1987',
                profession: 'trubouklad4ik',
                education: 'some school on east',

            },
        ],
        myFeed: [
            {
                id: 9001,
                userId: 3,
                content: 'OMG1111',
                likeCount: 22,
                avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
            },
            {
                id: 9002,
                userId: 4,
                content: 'OMG NOOOOOOOOOO11',
                likeCount: 2,
                avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
            },
            {
                id: 9003,
                userId: 1,
                content: 'How long, how long will i slide?',
                likeCount: 11,
                avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png',
            }

        ],
        newPostText: ['asd'],
        newMessageText: [''],
    },

    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        feedReducer(this._state, action);
        messagesReducer(this._state, action);

        this._callSubscriber(this._state);
    },

};
