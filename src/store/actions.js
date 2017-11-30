// Here is where you can put async operations.
// See the Vuex official docs for more information.

export const TYPE_MESSAGE = async ({commit, state}, message) => {
  const text = message.text
  return new Promise((resolve, reject) => {
    let index = 0

    ;(function typeChar (delay = Math.floor(Math.random() * (200 - 100) + 100)) {
      if (index >= text.length) {
        return resolve()
      }
      commit('EMULATE_TYPING', text[index])
      index++
      setTimeout(typeChar, delay)
    })()
  }).then(() => commit('ADD_MESSAGE', message))
}
