import { RouteType } from '../type'

const user: RouteType = {
  path: '/user',
  name: 'User',
  component: () => import('@/view/User.vue'),
  meta: {
    title: '用户'
  }
}

export default user
