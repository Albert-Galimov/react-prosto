let state = {
    profile: {
        posts: [
            {message: 'Привет, это мой первый пост!', likeCount: 30},
            {message: 'React - это просто!', likeCount: 80},
            {message: 'Всё будет!', likeCount: 99},
            {message: 'Только вперёд', likeCount: 50},
            {message: 'Что за мотивирующие сообщения?', likeCount: 645}
        ]
    },
    dialog: {
        items: [
            {name: 'Альберт', id: 1},
            {name: 'Стас', id: 2},
            {name: 'Гузель', id: 3},
            {name: 'Денис', id: 4}
        ],
        messages: [
            {message: 'Привет, как дела?'},
            {message: 'как проект?'},
            {message: 'Да посмотрела видео'},
            {message: 'Только вперёд!'}
        ]
    },
    sidebar: {
        friends: [
            {name: "Хлоя", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Chloe_Moretz_2018_2.jpg/250px-Chloe_Moretz_2018_2.jpg"},
            {name: "Тариель", img: "https://klike.net/uploads/posts/2020-08/1597994286_2.jpg"},
            {name: "Карим", img: "https://uznayvse.ru/person/djohnson/dwayne_johnson03.jpg"}
        ]
    }
};

export default state;