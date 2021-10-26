import { RouteType } from '../type'

const user: RouteType = {
  path: '/user',
  name: 'User',
  components: () => import('@/view/User.vue'),
  // components: () => import('../../view/User.vue'),
  meta: {
    title: '用户'
  }
}

export default user
