import { appState } from "../AppState.js";
import { playerService } from "../Services/PlayerService.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js"


function _drawPlayers() {
  let players = appState.players
  let template = ''
  players.forEach(p => template += p.PlayerTemplate)
  setHTML('player', template)


}
function _drawActivePlayers() {
  let activePlayers = appState.activePlayer
  // @ts-ignore
  setHTML('active player', appState.activePlayer.activePlayerTemplate)

}

export class PlayerController {
  constructor() {
  }

  addPlayer() {
    const form = event?.target
    console.log('form works', form)
    let formData = getFormData(form)
    console.log('this is my form data', formData)
    playerService.addPlayer(formData)
    _drawPlayers()
  }


}