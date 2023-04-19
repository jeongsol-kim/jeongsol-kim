const prefix = '../data/projects/'
const full_path = (name) => (
    prefix + name
)

export const PostList = [
    {
        id: 0,
        path: full_path('test_v1'),
        title: 'Simple Implementation of JAX-LAX',
        thumbnail: process.env.PUBLIC_URL + '/logo512.png',
        content: require('./projects/test_v1').post
    },
    {
        id: 1,
        path: full_path('test_v2'),
        title: 'Test project Version 2',
        thumbnail: process.env.PUBLIC_URL + '/logo512.png',
        content: require('./projects/test_v2').post
    },
    {
        id: 2,
        path: full_path('test_v3'),
        title: 'Test project Version 3',
        thumbnail: process.env.PUBLIC_URL + '/logo512.png',
        content: require('./projects/test_v3').post
    },
];