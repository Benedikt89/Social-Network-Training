

let rerenderEntireTree = () => {

};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

let state = {
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
    newPostText: [''],
    newMessageText:[''],


};

export let textFieldMessage = (text) => {
    state.newMessageText = text;
    rerenderEntireTree(state);
}

export const textHolder = (text) => {
    state.newPostText = text;
    rerenderEntireTree(state);
};

export const addNewPost = () => {
    let newPost = {id: state.myFeed.length + 9001,
        userId: 1,
        content: state.newPostText,
        likeCount: 0,
        avatarImage: 'https://www.w3schools.com/howto/img_avatar2.png'};

    state.myFeed.unshift(newPost);

    rerenderEntireTree(state);
};

export const sendNewMessage = () => {
    let newMessage = {
        id: state.messages.length + 1001,
        userId: 1,
        messageContent: state.newMessageText,
        avatarImage: 'https://playjoor.com/assets/avatar/jenny.jpg',
    };

    state.messages.unshift(newMessage);
    state.newMessageText = '';
    rerenderEntireTree(state);

};

export default state;