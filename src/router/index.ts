import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

let routes: any[] = []
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
  routes
})

export default router
