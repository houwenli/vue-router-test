const Bar = { template: '<div>bar</div>' }
export const routes = [
    { path: '/', component: () => import('../views/home')},
    { path: '/home', component: () => import('../views/home')},
    { path: '/foo', component: () => import('../components/HelloWorld')},
    { path: '/bar', component: Bar }
  ]