import SoundsGame from "../../sounds/Sounds";
import { GameCubeRoll } from "../../blocks/createNumbers";
import { ICardsData, IPlayer } from "../../interfaces/interfaces";
import { CardValue } from "./card-value";
import { FieldsRouter } from "./fieldsRouter";
import { GameLayout } from "./game-layout";
import { Game } from "./init-game";
import { Lock } from "./lock-properties";
import { Move } from "./move";
import { PlayerCash } from "./playerCash";
import { RemovePlayer } from "./remove-player";
import { Trade } from "./trade";
import { chat } from "./components/chat/index"; // for chat
//import { chat } from "./components/chat/index"; // for chat

/* eslint-disable */
export class PlayerBtnsInterface {
  public static addRollBtn(player: IPlayer) {
    // Game.buttonTradePlayer = document.querySelector(`.block-button-trade-${player.id}`) as HTMLDivElement;
    const rollBtn = document.createElement('button')
    rollBtn.innerText = 'roll'
    if (localStorage.getItem("language") === "ru") {
      rollBtn.innerText = "Кинуть кубик";
    }
    rollBtn.addEventListener('click', async () => {
      const playerMainView = document.querySelector('.playerMainView') as HTMLDivElement
      const btns = Game.playerInterface
      playerMainView.removeChild(Game.playerInterface)
      Game.playerInterface
      GameCubeRoll.roll()
      await Game.timeout(3200)
      playerMainView.appendChild(btns)
      const cubeSum: number = GameCubeRoll.sum
      const isDouble: boolean = GameCubeRoll.isDouble
      const currField: number = player.currentPosition
      const tf = currField + cubeSum
      const targetField = tf === 38 ? 38 : tf % 38
      if (player.isInPrison) {
        if (!isDouble) {
          player.isInPrison -= 1
          console.log(`${player.name}: hasn't rolled a double. Left: ${player.isInPrison}`);
          let message = `${player.name}: hasn't rolled a double. Left: ${player.isInPrison}` ///// chat
          if (localStorage.getItem("language") === "ru") {
            message = `${player.name}: не выпал дубль. Следующий: ${player.isInPrison}`
          }
          chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
          PlayerBtnsInterface.clearEndTurn(player)
          return
        } else {
          delete player.isInPrison
          console.log(`${player.name}: has rolled a double and now broke free`);
          let message = `${player.name}: has rolled a double and now broke free` ///// chat
          if (localStorage.getItem("language") === "ru") {
            message = `${player.name}: выпал дубль и теперь бросай кубики снова`
          }
          chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
          // PlayerBtnsInterface.clearEndTurn(player)
          Game.playerInterface.innerHTML = '';
          PlayerBtnsInterface.baseComboBtns(player)
          return
        }
      }
      Move.move(player, targetField)
      const currPos: ICardsData = Game.cardsData[targetField - 1];

      FieldsRouter.route(player, currPos)
      rollBtn.remove()
    })
    Game.playerInterface.appendChild(rollBtn)
  }

  public static addTradeBtn(player: IPlayer) {
    const tradeBtn = document.createElement('button')
    tradeBtn.innerText = 'trade'
    if (localStorage.getItem("language") === "ru") {
      tradeBtn.innerText = "Торговля";
    }
    tradeBtn.addEventListener('click', () => {
      const playerInterface = document.querySelector(".trade") as HTMLDivElement;
      if (playerInterface) {
        playerInterface.remove();
      } else SoundsGame.OpenTrade();
      Trade.startTrading(player);
    })
    Game.playerInterface.appendChild(tradeBtn); // Game.buttonTradePlayer.appendChild(tradeBtn);
  }
  public static addEndTurnBtn(player: IPlayer) {
    const endTurnBtn = document.createElement('button')
    endTurnBtn.innerText = 'end turn'
    if (localStorage.getItem("language") === "ru") {
      endTurnBtn.innerText = "Переход хода";
    }
    endTurnBtn.addEventListener('click', () => PlayerBtnsInterface.endTurnHandler(player));
    Game.playerInterface.appendChild(endTurnBtn)
    return endTurnBtn
  }
  public static endTurnHandler(player: IPlayer) {
    if (!player.isBankrupt && GameCubeRoll.isDouble) {
      console.log(`${player.name} goes again because he threw off the double`);
      let message = `${player.name} goes again because he threw off the double`; ///// chat
      if (localStorage.getItem("language") === "ru") {
        message = `${player.name} снова ходит, потому-что выпал дубль`;
      }
      chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
      SoundsGame.againTurn();
      Game.newTurn(player);
      return
    }
    const giveNewPlayer: () => IPlayer = () => {
      Game.currPlayer += 1
      if (Game.currPlayer === Game.players.length) {
        Game.currPlayer = 0
      }
      let newPlayer = Game.players[Game.currPlayer] as IPlayer
      if (Object.prototype.hasOwnProperty.call(newPlayer, "isBankrupt")) {
        return giveNewPlayer()
      }
      return newPlayer
    }
    const newPlayer = giveNewPlayer();
    SoundsGame.endTurn();
    Game.newTurn(newPlayer)
  }

  public static outOfJailBtn(player: IPlayer) {
    const turnsLeft = player.isInPrison as number
    const sumToPay = turnsLeft !== 0 ? 50 : 150
    const payForOutBtn = document.createElement('button')
    payForOutBtn.addEventListener('click', () => {
      PlayerCash.removeMoneyFromPlayer(player, sumToPay)
      delete player.isInPrison
      PlayerBtnsInterface.baseComboBtns(player)
    })
    payForOutBtn.innerText = `Pay: ${sumToPay}k$ for out`;
    if (localStorage.getItem("language") === "ru") {
      payForOutBtn.innerText = `Выплата: ${sumToPay}k$ за выход`;
    }
    Game.playerInterface.appendChild(payForOutBtn)
  }

  public static baseComboBtns(player: IPlayer) {
    Game.playerInterface.innerHTML = ''
    PlayerBtnsInterface.addRollBtn(player)
    PlayerBtnsInterface.tradeAndLockComboBtns(player)
    PlayerBtnsInterface.addSharesBtns(player)
  }
  public static addSharesBtns(player: IPlayer) {
    PlayerBtnsInterface.addBuySharesBtn(player)
  }
  public static prisonComboBtns(player: IPlayer) {
    if (player.isInPrison !== 0) {
      PlayerBtnsInterface.addRollBtn(player)
    }
    PlayerBtnsInterface.outOfJailBtn(player)
    PlayerBtnsInterface.tradeAndLockComboBtns(player)
    PlayerBtnsInterface.addSharesBtns(player)
  }
  public static prisonComboBtnsWORoll(player: IPlayer) {
    PlayerBtnsInterface.outOfJailBtn(player)
    PlayerBtnsInterface.tradeAndLockComboBtns(player)
    PlayerBtnsInterface.addSharesBtns(player)
  }
  public static tradeAndLockComboBtns(player: IPlayer) {
    PlayerBtnsInterface.addTradeBtn(player)
    PlayerBtnsInterface.addLockBtn(player)
  }
  public static clearEndTurn(player: IPlayer) {
    Game.playerInterface.innerHTML = '';
    // Game.buttonTradePlayer.innerHTML = '';
    PlayerBtnsInterface.tradeAndLockComboBtns(player)
    PlayerBtnsInterface.addSharesBtns(player)
    PlayerBtnsInterface.addEndTurnBtn(player)
  }
  public static addBankruptBtn(player: IPlayer) {
    Game.playerInterface.innerHTML = '';
    // Game.buttonTradePlayer.innerHTML = '';
    const btn = PlayerBtnsInterface.addEndTurnBtn(player)
    btn.innerText = 'BANKRUPT!';
    if (localStorage.getItem("language") === "ru") {
      btn.innerText = 'БАНКРОТ!';
    }
  }
  public static createConcedeBtn(player: IPlayer) {
    const btn = document.createElement('button') as HTMLButtonElement
    btn.addEventListener('click', () => {
      let deletePlayer = confirm("do you want Bankrupt");
      if (deletePlayer) {
        RemovePlayer.remove(player)
        if (Game.players[Game.currPlayer] === player) {
          PlayerBtnsInterface.endTurnHandler(player)
        }
        let num = 0;
        Game.players.forEach(e => {
          if (!e.isBankrupt) {
            num += 1;
          }
        });
        if (num > 1) SoundsGame.Bankrupt();

        btn.remove();
      }
    });
    btn.classList.add('concede-btn')
    btn.innerText = 'concede'
    if (localStorage.getItem("language") === "ru") {
      btn.innerText = "Сдаться";
    }
    return btn
  }
  // shares
  public static addBuySharesBtn(player: IPlayer) {
    const buySharesBtn = document.createElement('button') as HTMLButtonElement
    buySharesBtn.classList.add('buySharesBtn')
    // --------
    const sellSharesBtn = document.createElement('button') as HTMLButtonElement
    sellSharesBtn.classList.add('sellSharesBtn')
    // --------
    const boardFieldsContainer = Game.boardFieldsContainer
    const playerFields = Game.cardsData.filter((field) => field.owner === player).map((field) => field.id)

    const isPlayerHaveMonopoly = [...CardValue.countryFields.values()].some((arr) => arr.every((n) => playerFields.includes(n)))
    if (!isPlayerHaveMonopoly) {
      return
    }

    /* all player monopoly fields [[2,4..],[],...] */
    const playerMonopolyFields: number[][] = [...CardValue.countryFields.values()].filter((arr) => arr.every((n) => playerFields.includes(n)))

    const sharesHandler = (e: Event, isBuy?: boolean) => {
      e.stopPropagation();
      const targetField = (e.target as HTMLDivElement).closest('.playField')
      const fieldId = targetField?.id as string
      if (fieldId) {
        const id = Number(fieldId.replace(/field/g, ''))
        if (playerFields.includes(id)) {
          const currMonopoly: number[] = playerMonopolyFields.filter((arr) => arr.includes(id))[0]
          if (currMonopoly) {
            if ([7, 26, 3, 30, 11, 22].includes(id)) {
              console.log(`Player ${player.id} can't buy shares for this property`);
              let message = `${player.name} can't buy shares for this property` ///// chat
              if (localStorage.getItem("language") === "ru") {
                message = `${player.name} не может купить акции для этой компании`;
              }
              chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
              return
            }
            const currField = Game.cardsData.find((val) => val.id === id) as ICardsData
            const currFieldSharesPrice = currField.sharesPrice as number

            // check pockets
            if (isBuy && !PlayerCash.isEnoughInCash(player, currFieldSharesPrice)) {
              return
            }
            // -------------
            const currMonopolyFields: ICardsData[] = currMonopoly.map((id) => Game.cardsData.find((val) => val.id === id)) as ICardsData[]
            const currFieldShares = currField.value?.shares as number[]
            let currFieldValue = currField.currValue
            let strictSell: boolean = false
            switch (currFieldValue) {
              case currFieldShares[0]:
                switch (isBuy) {
                  case true:
                    currField.currValue = currFieldShares[1]
                    console.log(`Player ${player.id} had bought 2 shares of ${currField.title}`);
                    let message = `${player.name} had bought 2 shares of ${currField.name}` ///// chat
                    if (localStorage.getItem("language") === "ru") {
                      message = `${player.name} купил две акции ${currField.name}`;
                    }
                    chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
                    break;
                  default:
                    currField.currValue = currField.value?.monopoly
                    console.log(`Player ${player.id} had sold 1 shares of ${currField.title}`);
                    let message1 = `${player.name} had sold 1 shares of ${currField.name}` ///// chat
                    if (localStorage.getItem("language") === "ru") {
                      message1 = `${player.name} продал одну акцию ${currField.name}`;
                    }
                    chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message1); ///// chat
                    break;
                }
                break;
              case currFieldShares[1]:
                switch (isBuy) {
                  case true:
                    currField.currValue = currFieldShares[2]
                    console.log(`Player ${player.id} had bought 3 shares of ${currField.title}`);
                    let message = `${player.name} had bought 3 shares of ${currField.name}` ///// chat
                    if (localStorage.getItem("language") === "ru") {
                      message = `${player.name} купил 3 акции ${currField.name}`
                    }
                    chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
                    break;
                  default:
                    currField.currValue = currFieldShares[0]
                    console.log(`Player ${player.id} had sold 2 shares of ${currField.title}`);
                    let message1 = `${player.name} had sold 2 shares of ${currField.name}` ///// chat
                    if (localStorage.getItem("language") === "ru") {
                      message1 = `${player.name} продал 2 акции ${currField.name}`
                    }
                    chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message1); ///// chat
                    break;
                }
                break;
              case currFieldShares[2]:
                switch (isBuy) {
                  case true:
                    currField.currValue = currFieldShares[3]
                    console.log(`Player ${player.id} had bought 4 shares of ${currField.title}`);
                    let message = `${player.name} had bought 4 shares of ${currField.name}` ///// chat
                    if (localStorage.getItem("language") === "ru") {
                      message = `${player.name} купил 4 акции ${currField.name}`
                    }
                    chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
                    break;
                  default:
                    currField.currValue = currFieldShares[1]
                    console.log(`Player ${player.id} had sold 3 shares of ${currField.title}`);
                    let message1 = `${player.name} had sold 3 shares of ${currField.name}` ///// chat
                    if (localStorage.getItem("language") === "ru") {
                      message1 = `${player.name} продал 3 акции ${currField.name}`
                    }
                    chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message1); ///// chat
                    break;
                }
                break;
              case currFieldShares[3]:
                switch (isBuy) {
                  case true:
                    currField.currValue = currFieldShares[4]
                    console.log(`Player ${player.id} had bought 100% shares of ${currField.title}`);
                    let message = `${player.name} had bought 100% shares of ${currField.name}` ///// chat
                    if (localStorage.getItem("language") === "ru") {
                      message = `${player.name} купил 100% акций ${currField.name}`
                    }
                    chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
                    break;
                  default:
                    currField.currValue = currFieldShares[2]
                    console.log(`Player ${player.id} had sold 4 shares of ${currField.title}`);
                    let message1 = `${player.name} had sold 4 shares of ${currField.name}` ///// chat
                    if (localStorage.getItem("language") === "ru") {
                      message1 = `${player.name} продал 4 акции ${currField.name}`
                    }
                    chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message1); ///// chat
                    break;
                }
                break;
              case currFieldShares[4]:
                switch (isBuy) {
                  case true:
                    console.log(`Player ${player.id} already have 100% shares of ${currField.title}`);
                    let message = `${player.name} already have 100% shares of ${currField.name}` ///// chat
                    if (localStorage.getItem("language") === "ru") {
                      message = `${player.name} уже владеет 100% акций ${currField.name}`
                    }
                    chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
                    break;
                  default:
                    currField.currValue = currFieldShares[3]
                    console.log(`Player ${player.id} had sold 5 shares of ${currField.title}`);
                    let message1 = `${player.name} had sold 5 shares of ${currField.name}` ///// chat
                    if (localStorage.getItem("language") === "ru") {
                      message1 = `${player.name} продал 5 акции ${currField.name}`
                    }
                    chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message1); ///// chat
                    break;
                }
                break;
              default:
                switch (isBuy) {
                  case true:
                    currField.currValue = currFieldShares[0]
                    console.log(`Player ${player.id} had bought his 1st share of ${currField.title}`);
                    let message = `${player.name} had bought his 1st share of ${currField.name}` ///// chat
                    if (localStorage.getItem("language") === "ru") {
                      message = `${player.name} купил свою 1 акцию ${currField.name}`
                    }
                    chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message); ///// chat
                    break;
                  default:
                    strictSell = true
                    console.log(`Player ${player.id} don't have shares of ${currField.title}`);
                    let message1 = `${player.name} don't have shares of ${currField.name}` ///// chat
                    if (localStorage.getItem("language") === "ru") {
                      message1 = `${player.name} нет акций ${currField.name}`
                    }
                    chat.run(Game.boardFieldsContainer, player, Game.cardsData[0], undefined, message1); ///// chat
                    break;
                }
                break;
            }
            switch (isBuy) {
              case true:
                if (currFieldValue !== currField.currValue) {
                  PlayerCash.removeMoneyFromPlayer(player, currFieldSharesPrice, true)
                }
                break;
              default:
                if (!strictSell) {
                  const sumToAdd = Math.ceil(currFieldSharesPrice / 2)
                  PlayerCash.addMoneyToPlayer(player, sumToAdd)
                }
                break;
            }
            GameLayout.changeFieldValue(<ICardsData[]>currMonopolyFields)
            // return
            switch (isBuy) {
              case true:
                if (currFieldValue !== currField.currValue) {
                  buySharesBtn.remove()
                }
                break;
              default:
                break;
            }
          }
        }
      }
    }
    buySharesBtn.addEventListener('click', () => {
      boardFieldsContainer.addEventListener('click', (e: Event) => sharesHandler(e, true), { once: true })
    })
    buySharesBtn.innerText = `BUY SHARES!`;
    if (localStorage.getItem("language") === "ru") {
      buySharesBtn.innerText = "КУПИТЬ АКЦИИ!";
    }
    Game.playerInterface.appendChild(buySharesBtn)



    sellSharesBtn.addEventListener('click', () => {
      boardFieldsContainer.addEventListener('click', (e: Event) => sharesHandler(e, false), { once: true })
    })
    sellSharesBtn.innerText = `sell shares`;
    if (localStorage.getItem("language") === "ru") {
      sellSharesBtn.innerText = "Продать акции";
    }
    Game.playerInterface.appendChild(sellSharesBtn)
  }

  public static addLockBtn(player: IPlayer) {
    const lockBtn = document.createElement('button')
    lockBtn.innerText = 'mortgage/return property';
    if (localStorage.getItem("language") === "ru") {
      lockBtn.innerText = "Ипотека/Возврат имущества";
    }
    lockBtn.addEventListener('click', () => Lock.lockProperties(player))

    const playerFields = Game.cardsData
      .filter((field) => field.owner === player)

    if (playerFields.length !== 0) {
      Game.playerInterface.append(lockBtn)
    }




  }

}

