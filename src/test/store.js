import { defineStore } from 'pinia'

export const useTestStore = defineStore({
  id: 'test',
  state: () => ({
    name: 'mellow',
    age: 21,
    cat: '十一'
  }),
  getters: {
    getName() {
      return this.name + '是最棒的'
    }
  },
  actions: {
    changeName() {
      this.name = this.name === 'mellow' ? 'billow' : 'mellow'
    }
  }
})
