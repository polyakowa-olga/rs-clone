/* eslint-disable */
import { IPlayer, ICardsData } from "../../interfaces/interfaces"
// import { GameCubeRoll } from "../../blocks/createNumbers"
// import { FieldsRouter } from "./fieldsRouter"
import GameBoard from "./game-board"
import { GameLayout } from "./game-layout"
// import { Move } from "./move"
import { PlayerBtnsInterface } from "./player-btns"





export class Game {
  static players: IPlayer[]
  static currPlayer = 0
  static playersQnt: number
  static time = 0
  static playerInterface: HTMLDivElement
  static chatWindowBox: HTMLDivElement
  static cardsData: ICardsData[]
  static boardFieldsContainer: HTMLDivElement
  constructor(players: IPlayer[]) {
    Game.players = players
    Game.playersQnt = players.length
  }
  async init() {
    Game.cardsData = await GameBoard.getCardsData()
    Game.playerInterface = document.querySelector('#pmv') as HTMLDivElement
    Game.boardFieldsContainer = document.querySelector('.boardFieldsContainer') as HTMLDivElement
    Game.chatWindowBox = document.querySelector('.chat') as HTMLDivElement
    Game.newTurn(Game.players[Game.currPlayer])
    Game.hideExtraChips(Game.playersQnt)
    Game.timerStart()
    const arrayplayer = document.querySelectorAll(".player");
    arrayplayer.forEach((el, i) => el.append(PlayerBtnsInterface.createConcedeBtn(Game.players[i])))
  }
  // timers
  public static timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public static timerStart() {
    Game.time += 1
    GameLayout.timerHTML(Game.time)
    console.log(Game.time);
    setTimeout(Game.timerStart, 1000)
  }
  // ------
  public static newTurn(player: IPlayer) {
    console.log(`player: ${player.id} turn...`);
    const arrayplayer = document.querySelectorAll(".player"); // Anton active block players
    arrayplayer.forEach(e => {
      if (player.id === Number(e.id)) {
        e.classList.add("active-palyer");
      } else e.classList.remove("active-palyer");
    });

    Game.playerInterface.innerHTML = ''

    if (player.isInPrison || player.isInPrison === 0) {
      if (player.isInPrison !== 0) {
        PlayerBtnsInterface.addRollBtn(player)
      }
      PlayerBtnsInterface.outOfJailBtn(player)
    } else {
      PlayerBtnsInterface.baseComboBtns(player)
    }
  }
  public static hideExtraChips(playersQnt: number) {
    const arr = [...Array(playersQnt).keys()].map((n) => n + 1);
    const hide = [1, 2, 3, 4, 5].filter((n) => !arr.includes(n))
    hide.forEach((n) => {
      const chip = document.querySelector(`.color_${n}`) as HTMLDivElement
      chip.style.display = 'none'
    })
  }
}
