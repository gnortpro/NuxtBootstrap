export const getters = {
  toggleDrawer: state => {
    return !state.toggleDrawer
  }
}
export const state = () => ({
  toggleDrawer: null
})

export const mutations = {
  toggleDrawer: state => (state.toggleDrawer = !state.toggleDrawer)
}

export const actions = {}
