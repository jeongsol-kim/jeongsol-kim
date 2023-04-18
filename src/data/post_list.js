const prefix = '../data/projects/'
const full_path = (name) => (
    prefix + name
)

export const PostList = [
    {
        id: 0,
        path: full_path('test_project_v1'),
        title: 'Test project Version 1',
        thumbnail: process.env.PUBLIC_URL + 'imgs/logo192.png',
        content: require('./projects/test_project_v1').post
    },
    {
        id: 1,
        path: full_path('test_project_v2'),
        title: 'Test project Version 2',
        thumbnail: process.env.PUBLIC_URL + 'imgs/logo192.png',
        content: require('./projects/test_project_v2').post
    },
    {
        id: 2,
        path: full_path('test_project_v3'),
        title: 'Test project Version 3',
        thumbnail: process.env.PUBLIC_URL + 'imgs/logo192.png',
        content: require('./projects/test_project_v3').post
    },
];