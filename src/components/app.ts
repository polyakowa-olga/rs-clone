/* eslint-disable @typescript-eslint/no-explicit-any */
import CreatePlayers from "./player/CreatePlayers";
class App {
  static init() {
    throw new Error("Method not implemented.");
  }
  players: any;
  filter: any;
  init() {
    this.players = new CreatePlayers("Pavel", 1500, 700);
    this.players.init();
  }
}
export default App;
