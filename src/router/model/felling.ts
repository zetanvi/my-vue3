import { RouteType } from '../type'

const felling: RouteType = {
  path: '/felling',
  name: 'Felling',
  component: () => import('@/view/Felling.vue'),
  meta: {
    title: '伐木go'
  }
}

export default felling
