import { RouteType } from '../type'

const home: RouteType = {
  path: '/home',
  name: 'Home',
  component: () => import('@/view/Home.vue'),
  meta: {
    title: '主页'
  }
}

export default home
