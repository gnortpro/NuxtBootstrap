export const getters = {
  toggleDrawer: state => {
    return !state.toggleDrawer
  },
  toggleLeftSidebar: state => {
    return state.toggleLeftSidebar
  }
}
export const state = () => ({
  toggleDrawer: null,
  toggleLeftSidebar: null
})

export const mutations = {
  toggleDrawer: state => (state.toggleDrawer = !state.toggleDrawer),
  toggleLeftSidebar: (state, payload) => (state.toggleLeftSidebar = payload)
}

export const actions = {}
