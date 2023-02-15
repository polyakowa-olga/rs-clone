import { GameCubeRoll } from "../../blocks/createNumbers";
import { ICardsData, Player } from "../../interfaces/interfaces";
import { FieldsRouter } from "./fieldsRouter";
import { Game } from "./init-game";
import { Move } from "./move";
import { PlayerCash } from "./playerCash";
/* eslint-disable */
export class PlayerBtnsInterface {
  public static addRollBtn(player: Player) {
    const rollBtn = document.createElement('button')
    rollBtn.innerText = 'roll'

    rollBtn.addEventListener('click', () => {
      GameCubeRoll.roll()
      const cubeSum: number = GameCubeRoll.sum
      const isDouble: boolean = GameCubeRoll.isDouble
      const currField: number = player.currentPosition
      const targetField = (currField + 5) === 38 ? 38 : (currField + 5) % 38/* cubeSum here */
      console.log(`cube1:${GameCubeRoll.cube1}; cube2:${GameCubeRoll.cube2} double:${isDouble}`);

      if (player.isInPrison) {
        if (!isDouble) {
          player.isInPrison -= 1
          console.log(`player ${player.id}: hasn't rolled a double. Left: ${player.isInPrison}`);
          PlayerBtnsInterface.clearEndTurn(player)
          return
        } else {
          delete player.isInPrison
          console.log(`player ${player.id}: has rolled a double and now broke free`);
          // PlayerBtnsInterface.clearEndTurn(player)
          Game.playerInterface.innerHTML = ''
        }
      }
      Move.move(player, targetField)
      const currPos: ICardsData = Game.cardsData[targetField - 1];

      FieldsRouter.route(player, currPos)
      rollBtn.remove()
    })
    Game.playerInterface.appendChild(rollBtn)
  }

  public static addTradeBtn(player: Player) {
    const tradeBtn = document.createElement('button')
    tradeBtn.innerText = 'trade'

    Game.playerInterface.appendChild(tradeBtn)
  }
  public static addEndTurnBtn(player: Player) {
    const endTurnBtn = document.createElement('button')
    endTurnBtn.innerText = 'end turn'
    endTurnBtn.addEventListener('click', () => {
      const giveNewPlayer: () => Player = () => {
        Game.currPlayer += 1
        if (Game.currPlayer === Game.players.length) {
          Game.currPlayer = 0
        }
        let newPlayer = Game.players[Game.currPlayer] as Player
        if (Object.prototype.hasOwnProperty.call(newPlayer, "isBankrupt")) {
          return giveNewPlayer()
        }
        return newPlayer
      }
      const newPlayer = giveNewPlayer()
      Game.newTurn(newPlayer)
    })
    Game.playerInterface.appendChild(endTurnBtn)
  }
  public static outOfJailBtn(player: Player) {
    const turnsLeft = player.isInPrison as number
    const sumToPay = turnsLeft !== 0 ? 50 : 150
    const payForOutBtn = document.createElement('button')
    payForOutBtn.addEventListener('click', () => {
      PlayerCash.removeMoneyFromPlayer(player, sumToPay)
      delete player.isInPrison
      Game.playerInterface.innerHTML = ''

      PlayerBtnsInterface.addRollBtn(player)
    })
    payForOutBtn.innerText = `Pay: ${sumToPay}k$ for out`
    Game.playerInterface.appendChild(payForOutBtn)
  }

  public static baseComboBtns(player: Player) {
    PlayerBtnsInterface.addRollBtn(player)
    PlayerBtnsInterface.tradeAndLockComboBtns(player)
  }
  public static prisonComboBtns(player: Player) {
    PlayerBtnsInterface.addRollBtn(player)
    PlayerBtnsInterface.outOfJailBtn(player)
  }
  public static tradeAndLockComboBtns(player: Player) {
    PlayerBtnsInterface.addTradeBtn(player)
    // PlayerBtnsInterface.addLockBtn(player)
  }
  public static clearEndTurn(player: Player) {
    Game.playerInterface.innerHTML = ''
    PlayerBtnsInterface.tradeAndLockComboBtns(player)
    PlayerBtnsInterface.addEndTurnBtn(player)
  }


}

