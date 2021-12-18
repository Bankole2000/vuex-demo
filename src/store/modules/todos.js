export default {
  namespaced: true,
  state: {
    todos: []
  },
  mutations: {
    ADD_TODO(state, payload) {
      state.todos.push(payload)
    },
    REMOVE_TODO(state, payload) {
      const indexToDelete = state.todos.find(todo => todo.id == payload)
      state.todos.splice(indexToDelete, 1)
    },
    UPDATE_TODO(state, payload) {
      const indexToUpdate = state.todos.findIndex(todo => todo.id == payload.id)
      state.todos[indexToUpdate] = payload
    }
  },
  actions: {
    addTodo({ state, commit }, payload) {
      payload.id = state.todos.length + 1;
      payload.completed = false;
      commit('ADD_TODO', payload)
    },
    removeTodo({ commit }, payload) {
      commit('REMOVE_TODO', payload.id)
    },
    updateTodo({ commit }, payload) {
      commit('UPDATE_TODO', payload)
    }
  },
  getters: {
    todos: state => state.todos,
  }
}