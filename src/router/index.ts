import { createRouter, createWebHistory } from 'vue-router'
import { RouteType } from './type'

const root: RouteType = {
  path: '/',
  name: 'Root',
  redirect: '/home',
}
const routes: any[] = [root]
const globModules = import.meta.globEager('./model/*.ts')
console.log(globModules, 'globModules')
for (const module in globModules) {
  if (Object.prototype.hasOwnProperty.call(globModules, module)) {
    const element = globModules[module]
    console.log(element, 'element')
    routes.push(element.default)
  }
}
console.log(routes, 'routes')

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
