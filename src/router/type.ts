import { RouteRecord } from 'vue-router'
import { defineComponent } from 'vue'

type Components<T extends any = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>)
export interface RouteType extends Omit<Partial<RouteRecord>, 'components'|'component'> {
  components?: Components
  component?: Components
}
