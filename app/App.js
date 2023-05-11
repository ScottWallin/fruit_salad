// import { ValuesController } from "./Controllers/ValuesController.js";
import { appState } from "./AppState.js";
import { PlayerController } from "./Controllers/PlayerController.js";
class App {
  // valuesController = new ValuesController();
  playerController = new PlayerController();
}

window["app"] = new App();
