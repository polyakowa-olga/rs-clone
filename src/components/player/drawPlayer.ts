/* eslint-disable prettier/prettier */
import { IPlayer } from "../interfaces/interfaces";

class DrawPlayer {
  player: IPlayer;
  constructor(player: IPlayer) {
    this.player = player;
  }

  drawplayer() {
    this.drawmoney();
    this.drawCapital();
  }
  drawmoney() {
    const money = (document.getElementById(`money-${this.player.id}`)) as HTMLSpanElement;
    money.innerText = this.player.money.toString();
  }

  drawCapital() {
    const capital = document.getElementById(`capital-${this.player.id}`) as HTMLSpanElement;
    capital.innerText = this.player.money.toString();
  }
}

export default DrawPlayer;
