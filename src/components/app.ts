/* eslint-disable @typescript-eslint/no-explicit-any */
import CreatePlayers from "./player/CreatePlayers";
class App {
  players: any;
  filter: any;
  init() {
    this.players = new CreatePlayers("Pavel", 1500, 700);
    this.players.createDiv();
  }
}
export default App;
