import { Player } from "../Models/Player.js";
import { appState } from "../AppState.js";
// import { PlayerController } from "../Controllers/PlayerController.js";

class PlayerService {
  addPlayer(formData) {
    let newPlayer = new Player(formData)
    appState.players.push(newPlayer)
    appState.emit('players')
  }
}

export const playerService = new PlayerService()