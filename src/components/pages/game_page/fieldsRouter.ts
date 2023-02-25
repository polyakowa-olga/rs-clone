import { Game } from "./init-game";
import { PlayerCash } from "./playerCash";
import { IPlayer, ICardsData } from "../../interfaces/interfaces";
import { Move } from "./move";
import { PlayerBtnsInterface } from "./player-btns";
import { chat } from "./components/chat/index"; // for chat
import EventMessages from "../../messages/chanceMessages"; // for chat
import { CardValue } from "./card-value";
import { GameCubeRoll } from "../../blocks/createNumbers";
import { GameLayout } from "./game-layout";
import SoundsGame from "../../sounds/Sounds";
/* eslint-disable */
export class FieldsRouter {// for chat
  static MessageDataGetter = new EventMessages();// for chat
  public static route(player: IPlayer, field: ICardsData) {
    switch (field.type) {
      case 'common':
        this.commonRoute(player, field)
        break;
      case 'trade':
        this.tradeRoute(player, field)
        break;
    }
  }

  protected static commonRoute(player: IPlayer, field: ICardsData) {
    // start 1
    // force major 6, 25
    // tax 17, 36
    // chance 8, 27
    // free parking 20
    // prison 13
    // go to prison 32
    // free parking 20
    // prison 13
    // go to prison 32
    const fieldId = field.id
    let message;// for chat
    switch (true) {
      case ([6, 25].includes(fieldId)):
        // create message to chat and take some money from player

        message = FieldsRouter.MessageDataGetter.forceMajeureMessages();
        chat.run(Game.chatWindowBox, player, field, message); ///// chat fm

        const sumToPay = message.sum /* res of func */
        const forceMajorBtn = document.createElement('button') as HTMLButtonElement
        forceMajorBtn.innerText = `PAY: ${sumToPay}k$`
        Game.playerInterface.appendChild(forceMajorBtn)
        forceMajorBtn.addEventListener('click', () => {
          const isEnough = PlayerCash.checkCapital(player, sumToPay)
          if (!isEnough) {
            console.log(`Player ${player.id} doesn't have enough in cash.\n
            You need to sold something...`);
            return
          }
          // check bankrupt logic
          PlayerCash.removeMoneyFromPlayer(player, sumToPay)
          console.log(`Player ${player.id} lost ${sumToPay}`);

          chat.run(Game.chatWindowBox, player, field, undefined, "lost", sumToPay);///// chat fm
          // --------------------
          PlayerBtnsInterface.clearEndTurn(player)
        });
        SoundsGame.ForceorTax();
        break;
      case ([17, 36].includes(fieldId)):
        // create message to chat and take some money from player

        chat.run(Game.chatWindowBox, player, field);///// chat tax

        const taxToPay = Math.floor(player.capital * 6 / 100);
        const taxBtn = document.createElement('button') as HTMLButtonElement;
        taxBtn.innerText = `PAY: ${taxToPay}k$`
        Game.playerInterface.appendChild(taxBtn)
        taxBtn.addEventListener('click', () => {
          const isEnough = PlayerCash.checkCapital(player, taxToPay)
          if (!isEnough) {
            console.log(`Player ${player.id} doesn't have enough in cash.\n
            You need to sold something...`);
            return
          }
          PlayerCash.removeMoneyFromPlayer(player, taxToPay)
          console.log(`Player ${player.id} lost ${taxToPay}`);
          PlayerBtnsInterface.clearEndTurn(player)
          SoundsGame.ForceorTax();

          chat.run(Game.chatWindowBox, player, field, undefined, "pay"); ///// chat tax
        });
        break;
      case ([8, 27].includes(fieldId)):
        // create message to chat and give some money to player

        ////// chat start
        message = FieldsRouter.MessageDataGetter.chanceMessages();

        chat.run(Game.chatWindowBox, player, field, message);

        ///// chat end

        const sumToGet = message.sum /* res */;
        const chanceBtn = document.createElement('button') as HTMLButtonElement;
        chanceBtn.innerText = `GET: ${sumToGet}k$`
        SoundsGame.ChanceorRelax();
        Game.playerInterface.appendChild(chanceBtn);
        chanceBtn.addEventListener('click', () => {
          PlayerCash.addMoneyToPlayer(player, sumToGet)
          console.log(`Player ${player.id} get ${sumToGet}`);
          ////// chat start
          chat.run(Game.chatWindowBox, player, field, undefined, "get", sumToGet);
          ///// chat end
          PlayerBtnsInterface.clearEndTurn(player)
        })
        break;
      case ([13].includes(fieldId)):
        // create message to chat like "{player} got on prison zone, nothing happend"
        ////// chat start

        chat.run(Game.chatWindowBox, player, field);

        ///// chat end
        console.log(`Player ${player.id} got on prison zone, nothing happend`);
        PlayerBtnsInterface.clearEndTurn(player);
        SoundsGame.PickUp();
        break;
      case ([1].includes(fieldId)):
        // create message to chat like "{player} got on prison zone, nothing happend"
        ////// chat start

        chat.run(Game.chatWindowBox, player, field);

        ///// chat end
        console.log(`Player ${player.id} has passed a lap`);
        PlayerBtnsInterface.clearEndTurn(player)
        break;
      case ([20].includes(fieldId)):
        console.log(`Player ${player.id} decided to rest for a bit`);
        // create message to chat like "{player} got on prison zone, nothing happend"
        ////// chat start

        chat.run(Game.chatWindowBox, player, field);

        ///// chat end
        PlayerBtnsInterface.clearEndTurn(player);
        SoundsGame.PickUp();
        break;
      case ([32].includes(fieldId)):
        // create message to chat like "{player} broke the law and ended up in jail"
        ////// chat start

        chat.run(Game.chatWindowBox, player, field);

        ///// chat end
        player.isInPrison = 3
        SoundsGame.ForceorTax();
        Move.move(player, 13)
        console.log(`Player ${player.id} broke the law and ended up in jail`);
        PlayerBtnsInterface.clearEndTurn(player);

        SoundsGame.PickUp();
    }
  }

  protected static tradeRoute(player: IPlayer, field: ICardsData) {
    switch (field.owner) {
      case player:
        // chat message "you got on your own property"
        ////// chat start

        chat.run(Game.chatWindowBox, player, field);

        ///// chat end
        console.log(`Player ${player.id} got on his own property`);
        PlayerBtnsInterface.clearEndTurn(player)
        break;
      case null:
        // chat message "you got on nobody's property"
        ////// chat start

        chat.run(Game.chatWindowBox, player, field);

        ///// chat end
        const buyBtn = document.createElement('button') as HTMLButtonElement;
        const fieldPrice = field.price as number
        buyBtn.innerText = `Buy ${field.title}`
        buyBtn.addEventListener('click', () => {
          if (player.money >= fieldPrice) {
            field.owner = player
            PlayerCash.removeMoneyFromPlayer(player, fieldPrice, true)
            // changing currValue and refresh html
            CardValue.setCurrentValue(player, field)
            // ------------------
            console.log(`Player ${player.id} buying ${field.title}`);
            ////// chat start
            chat.run(Game.chatWindowBox, player, field, undefined, "buy");
            ///// chat end
            // color field
            GameLayout.playerColorField(player, field);
            SoundsGame.BuyCard();
            // -----------
          } else {
            console.log(`Player ${player.id} doesn't have enough in cash to buy ${field.title}`);
            SoundsGame.AdminSound();
            ////// chat start
            chat.run(Game.chatWindowBox, player, field, undefined, "nobuy");
            ///// chat end
            return
          }
          PlayerBtnsInterface.clearEndTurn(player)
        })
        PlayerBtnsInterface.clearEndTurn(player)
        Game.playerInterface.appendChild(buyBtn)
        // Auction logic
        // -------------
        break;

      default:
        // chat message "{player} got on {player} property. Need to pay {sum} to {other player}"
        ////// chat start

        chat.run(Game.chatWindowBox, player, field);

        ///// chat end
        if (field.lock) {
          console.log(`${player.name} got on pawned field. Nothing happend`);

          chat.run(Game.chatWindowBox, player, field);///// chat new

          PlayerBtnsInterface.clearEndTurn(player)
          return
        }
        const currFieldValue = field.currValue ? field.currValue : field.price as number
        const sumToPay = [7, 26].includes(field.id) ? (currFieldValue * GameCubeRoll.sum) : currFieldValue as number /* SUM TO PAY other player {field.value}, south-korea check*/
        const payBtn = document.createElement('button') as HTMLButtonElement;
        payBtn.innerText = `PAY: ${sumToPay}k$`;
        payBtn.addEventListener('click', () => {
          const isEnough = PlayerCash.checkCapital(player, sumToPay)
          if (!isEnough) {
            console.log(`Player ${player.id} doesn't have enough in cash.\n
            You need to sold something...`);
            chat.run(Game.chatWindowBox, player, field, undefined, "sold");///// chat new
            return
          }
          const isBankrupt = PlayerCash.payPlayer2Player(player, sumToPay, field)
          switch (isBankrupt) {
            case true:
              PlayerBtnsInterface.addBankruptBtn(player)
              break;
            default:
              PlayerBtnsInterface.clearEndTurn(player)
              break;
          }
          ////// chat start
          chat.run(Game.chatWindowBox, player, field, undefined, "payto");
          ///// chat end
        })
        Game.playerInterface.appendChild(payBtn)
        break;
    }
  }




}