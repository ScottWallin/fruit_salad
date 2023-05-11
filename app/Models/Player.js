import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"




export class Player {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.score = 0
  }

  get PlayerTemplate() {
    return `
          <p>${this.name}</p>
          <p>${this.score}</p>`

  }

  get activePlayerTemplate() {
    return `  <div>
        <h3>${this.name}</h3>
        <h3>${this.score}</h3>
      </div>`
  }
}



