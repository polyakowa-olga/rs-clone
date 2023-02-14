/* eslint-disable */
import { Player, ICardsData } from "../../interfaces/interfaces"
import { GameCubeRoll } from "../../blocks/createNumbers"
import { FieldsRouter } from "./fieldsRouter"
import GameBoard from "./game-board"
import { Move } from "./move"




export class Game {
  static players: Player[]
  static currPlayer = 0
  static playersQnt: number

  static playerInterface: HTMLDivElement
  static cardsData: ICardsData[]
  constructor(players: Player[]) {
    Game.players = players
    Game.playersQnt = players.length
  }
  async init() {
    Game.cardsData = await GameBoard.getCardsData()
    Game.playerInterface = document.querySelector('#pmv') as HTMLDivElement
    this.newTurn(Game.players[Game.currPlayer])
  }
  newTurn(player: Player) {
    Game.playerInterface.innerHTML = ''
    const currPlayerChip = document.querySelectorAll('.fieldChip')[Game.currPlayer] as HTMLDivElement
    const rollBtn = document.createElement('button')
    rollBtn.innerText = 'roll'
    const tradeBtn = document.createElement('button')
    tradeBtn.innerText = 'trade'
    const endTurnBtn = document.createElement('button')
    endTurnBtn.innerText = 'end turn'
    Game.playerInterface.appendChild(rollBtn)
    Game.playerInterface.appendChild(tradeBtn)
    Game.playerInterface.appendChild(endTurnBtn)

    rollBtn.addEventListener('click', () => {
      GameCubeRoll.roll()
      Move.move(player, Game.currPlayer, GameCubeRoll.sum, currPlayerChip)
      const currPos = Game.cardsData[player.currentPosition - 1];
      FieldsRouter.route(player, currPos)
      // rollBtn.remove()
    })
    tradeBtn.addEventListener('click', () => {
      // trade logic...
    })
    endTurnBtn.addEventListener('click', () => {
      const giveNewPlayer = () => {
        Game.currPlayer += 1
        if (Game.currPlayer === Game.players.length) {
          Game.currPlayer = 0
        }
        let newPlayer = Game.players[Game.currPlayer] as Player
        if (Object.prototype.hasOwnProperty.call(newPlayer, "isBankrupt")) {
          giveNewPlayer()
        }
        return newPlayer
      }
      const newPlayer = giveNewPlayer()
      this.newTurn(newPlayer)
    })

  }

}

export { Player }
