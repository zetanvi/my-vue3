import { RouteType } from '../type'

const testForm: RouteType = {
  path: '/test-from',
  name: 'TestForm',
  component: () => import('@/view/TestForm.vue'),
  meta: {
    title: '测试表单',
  },
}

export default testForm
