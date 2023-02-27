import { IMessage } from "../interfaces/interfaces";

class EventMessages {
  static chanceMessages: IMessage;
  static forceMajeureMessages: IMessage;

  chanceMessages() {
    const ArrayMesasges = [
      {
        text: "Bank pays you dividend of $50!  COLLECT $50.",
        sum: 50
      },
      {
        text:
          "You set aside time every week to hang out with your elderly neighbor – you’ve heard some amazing stories! COLLECT $100.",
        sum: 100
      },
      {
        text:
          "Meow! You knit cozy sweaters for the hairless cats at your local animal shelter. COLLECT $20.",
        sum: 20
      },
      {
        text:
          "Just when you think you can’t go another step, you finish that foot race – and raise money for your local hospital! ADVANCE TO GO. COLLECT $200.",
        sum: 200
      },
      {
        text:
          "You weed the community garden and discover a new bug! Name it something fun! THEN COLLECT $25.",
        sum: 25
      },
      {
        text:
          "You volunteer your art skills and paint a mural at the local school! COLLECT $50.",
        sum: 50
      },
      {
        text:
          "Your cousin forgot their wallet! You happily pay for dinner. PAY $50.",
        sum: 50
      },
      {
        text: "You organize a family reunion! COLLECT $200.",
        sum: 200
      },
      {
        text:
          "You spend the day playing games with kids at a local children’s hospital. COLLECT $100.",
        sum: 100
      },
      {
        text:
          "You organize a group to clean up your town’s footpaths. COLLECT $50.",
        sum: 50
      },
      {
        text:
          "You volunteered at a blood donation. There were free cookies! COLLECT $10.",
        sum: 10
      },
      {
        text:
          "You help your neighbor bring in her groceries. She makes you lunch to say thanks! COLLECT $20.",
        sum: 20
      },
      {
        text:
          "You help your neighbors clean up their Gardens after a big storm. COLLECT $200.",
        sum: 200
      },
      {
        text: "You organize a bake sale for your local school. COLLECT $25.",
        sum: 25
      },
      {
        text: "Your building loan matures. Collect $150",
        sum: 150
      },
      {
        text: "Bank error in your favor! Collect $75.",
        sum: 75
      },
      {
        text: "Income Tax refund - collect $20",
        sum: 20
      },
      {
        text: "You have won a prize in a beauty contest",
        sum: 10
      },
      {
        text: "You inherit $100",
        sum: 100
      },
      {
        text: "From sale of stock you get $50",
        sum: 50
      }
    ];

    const ArrayMesasgesRu = [
      {
        text: "Банк выплачивает вам дивиденды в размере $50!  СОБИРАТЬ $50.",
        sum: 50
      },
      {
        text:
          "Каждую неделю вы проводите время со своим престарелым соседом - вы слышали удивительные истории! СОБИРАЙТЕ $100.",
        sum: 100
      },
      {
        text:
          "Мяу! Вы вязали уютные свитера для лысых кошек в местном приюте для животных. СОБИРАЙТЕ $20.",
        sum: 20
      },
      {
        text:
          "Как раз тогда, когда вы думаете, что вы не можете пойти еще один шаг, вы заканчиваете эту гонку - и собрать деньги для вашей местной больницы! АВАНС ИДТИ. СОБРАТЬ $200.",
        sum: 200
      },
      {
        text:
          "Вы травите сад сообщества и обнаружить новый клоп! Назовите его что-то весело! ТОГДА СОБИРАЙТЕ $25.",
        sum: 25
      },
      {
        text:
          "Ты добровольно предлагаешь свои художественные навыки и рисуешь фреску в местной школе! СОБЕРИ 50 долларов.",
        sum: 50
      },
      {
        text:
          "Твой кузен забыл бумажник! Ты с радостью платишь за ужин. ЗАПЛАТИ 50 долларов",
        sum: 50
      },
      {
        text: "Вы организуете воссоединение семьи! СОБЕРИТЕ $200.",
        sum: 200
      },
      {
        text:
          "Вы проводите день, играя с детьми в местной детской больнице. СОБЕРИТЕ $100.",
        sum: 100
      },
      {
        text:
          "Вы организуете группу, чтобы очистить тропинки вашего города. СОБИРАЙТЕ $50.",
        sum: 50
      },
      {
        text:
          "Вы добровольно пожертвовали кровь. Там были бесплатные печенья! СОБЕРИТЕ $10.",
        sum: 10
      },
      {
        text:
          "Вы помогаете соседу принести ее продукты. Она делает вам обед, чтобы сказать спасибо! СБОР $ 20.",
        sum: 20
      },
      {
        text:
          "Вы помогаете своим соседям убирать их сады после большого шторма. СОБЕРИТЕ $200.",
        sum: 200
      },
      {
        text:
          "Вы организовываете продажу выпечки для вашей местной школы. СОБИРАЙТЕ $25.",
        sum: 25
      },
      {
        text: "Срок погашения кредита на строительство здания. Соберите $150",
        sum: 150
      },
      {
        text: "Банковская ошибка в вашу пользу! Соберите $75.",
        sum: 75
      },
      {
        text: "Возврат подоходного налога - сбор $20.",
        sum: 20
      },
      {
        text: "Вы выиграли приз конкурса красоты",
        sum: 10
      },
      {
        text: "Вы наследуете $100",
        sum: 100
      },
      {
        text: "От продажи акций вы получаете $50",
        sum: 50
      }
    ];
    const number =
      Math.floor(Math.random() * (ArrayMesasges.length + 1 - 0)) + 0;
    if (localStorage.getItem("language") === "ru") {
      return ArrayMesasgesRu[number];
    }
    return ArrayMesasges[number];
  }

  forceMajeureMessages() {
    const ArrayMesasges = [
      {
        text: "Doctor’s fee. Pay $50",
        sum: 50
      },
      {
        text:
          "You go to the local school’s car wash fundraiser – but you forget to close your windows! PAY $100.",
        sum: 100
      },
      {
        text: "You didn’t shop local! PAY $50.",
        sum: 50
      },
      {
        text: "You help build a new school playground! PAY $100.",
        sum: 100
      },
      {
        text: "You donate your birthday money to a community center! PAY $50.",
        sum: 50
      },
      {
        text:
          "You buy a few bags of cookies from that school bake sale. Yum! PAY $50.",
        sum: 50
      },
      {
        text:
          "Your fuzzy friends at the animal shelter will be thankful for your donation. PAY $50.",
        sum: 50
      },
      {
        text: "Pay your insurance premium $50! PAY $50.",
        sum: 50
      },
      {
        text: "Parking fine $15",
        sum: 15
      },
      {
        text: "Speeding fine $15",
        sum: 15
      },
      {
        text: "Life Insurance Matures. Pay $100",
        sum: 100
      },
      {
        text: "Pay Hospital Fees of $100",
        sum: 100
      },
      {
        text: "Pay School Fees of $50",
        sum: 50
      },
      {
        text: "Consultancy Fee. Pay $25",
        sum: 25
      },
      {
        text: "You are assessed for street repairs. Pay $40",
        sum: 40
      }
    ];

    const ArrayMesasgesRu = [
      {
        text: "Оплата врачу. 50 долларов",
        sum: 50
      },
      {
        text:
          "Вы идете на сбор средств на мойку машин местной школы - но забываете закрыть окна! ПЛАТНО $100.",
        sum: 100
      },
      {
        text: "Ты не ходил по местным магазинам! ЗАПЛАТИ 50$",
        sum: 50
      },
      {
        text: "Вы помогаете построить новую школьную площадку! PAY $100.",
        sum: 100
      },
      {
        text:
          "Вы жертвуете свои деньги на день рождения в общественный центр! ОПЛАТИТЕ $50.",
        sum: 50
      },
      {
        text:
          "Вы покупаете несколько мешков печенья от продажи выпечки в школе. Ням! ОПЛАТИТЕ $50.",
        sum: 50
      },
      {
        text:
          "Ваши нечеткие друзья в приюте для животных будут благодарны за ваше пожертвование. ЗАПЛАТИТЕ $50.",
        sum: 50
      },
      {
        text: "Оплатите страховой взнос $50! ОПЛАТИТЕ $50.",
        sum: 50
      },
      {
        text: "Парковка штраф $15",
        sum: 15
      },
      {
        text: "Превышение скорости $15",
        sum: 15
      },
      {
        text: "Страхование жизни Взрослые. Оплатить $100",
        sum: 100
      },
      {
        text: "Оплатить больничный сбор в $100",
        sum: 100
      },
      {
        text: "Оплатить школьные сборы в размере $50",
        sum: 50
      },
      {
        text: "Плата за консультацию. Оплатить $25",
        sum: 25
      },
      {
        text: "Вы оценены в ремонте улиц. Оплатите $40",
        sum: 40
      }
    ];
    const number =
      Math.floor(Math.random() * (ArrayMesasges.length + 1 - 0)) + 0;
    if (localStorage.getItem("language") === "ru") {
      return ArrayMesasgesRu[number];
    }
    return ArrayMesasges[number];
  }
}

export default EventMessages;
