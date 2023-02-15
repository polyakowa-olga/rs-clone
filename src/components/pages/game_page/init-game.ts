/* eslint-disable */
import { IPlayer, ICardsData } from "../../interfaces/interfaces"
// import { GameCubeRoll } from "../../blocks/createNumbers"
// import { FieldsRouter } from "./fieldsRouter"
import GameBoard from "./game-board"
// import { Move } from "./move"
import { PlayerBtnsInterface } from "./player-btns"
// import { Move } from "./move"
import { PlayerBtnsInterface } from "./player-btns"




export class Game {
  static players: IPlayer[]
  static currPlayer = 0
  static playersQnt: number

  static playerInterface: HTMLDivElement
  static chatWindowBox: HTMLDivElement
  static cardsData: ICardsData[]
  constructor(players: IPlayer[]) {
    Game.players = players
    Game.playersQnt = players.length
  }
  async init() {
    Game.cardsData = await GameBoard.getCardsData()
    Game.playerInterface = document.querySelector('#pmv') as HTMLDivElement
    Game.chatWindowBox = document.querySelector('.chat') as HTMLDivElement
    Game.newTurn(Game.players[Game.currPlayer])
    Game.newTurn(Game.players[Game.currPlayer])
  }
  public static newTurn(player: IPlayer) {
    console.log(`player: ${player.id} turn...`);

    Game.playerInterface.innerHTML = ''

    if (player.isInPrison || player.isInPrison === 0) {
      if (player.isInPrison !== 0) {
        PlayerBtnsInterface.addRollBtn(player)
        if (player.isInPrison || player.isInPrison === 0) {
          if (player.isInPrison !== 0) {
            PlayerBtnsInterface.addRollBtn(player)
          }
          PlayerBtnsInterface.outOfJailBtn(player)
        } else {
          PlayerBtnsInterface.baseComboBtns(player)
        }

        PlayerBtnsInterface.outOfJailBtn(player)
      } else {
        PlayerBtnsInterface.baseComboBtns(player)
      }


    }

  }
