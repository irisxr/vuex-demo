import routerDemo from './components/routerDemo'
import RouterChildrenDemo from './components/RouterChildrenDemo'


const routes = [
    {path: '/foo', component: routerDemo, name: '1'},
    { path: '/user/:id',
        component: routerDemo,
        name: '3',
        props: true,
        children: [
            {
                // 当 /user/:id/profile 匹配成功，
                // RouterChildrenDemo 会被渲染在 RouterDemo 的 <router-view/> 中
                path: 'profile',
                component: RouterChildrenDemo,
                name: '3-1'
            },
            {
                // 当 /user/:id/posts 匹配成功
                // RouterChildrenDemo 会被渲染在 RouterDemo 的 <router-view/> 中
                path: 'posts',
                component: RouterChildrenDemo
            }
        ]
    },
]

export default routes