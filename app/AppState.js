// import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Player } from "./Models/Player.js"

class AppState extends EventEmitter {

  // values = loadState('values', [Value])
  /** @type {import('./Models/Player').Player|null} */
  activePlayer = null
  /** @type {import('./Models/Player').Player[]} */
  players = [
    new Player({
      name: 'gehrman',
      score: 5,
    }),
    new Player({
      name: 'BSB',
      score: 10,
    })
  ]










}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
