/* eslint-disable prettier/prettier */
import Page from './templates/page';
import Header from './header/header';
import Footer from './footer/footer';
import StartPage from './pages/start_page/start_page';
import GamePage from './pages/game_page/game_page';
import WinnersPage from './pages/winners_page/winners_page';
import ErrorPage from './pages/error_page/error_page';

export const enum PageIds {
    StartPage = 'start-page',
    GamePage = 'game-page',
    WinnersPage = 'winners-page',
    ErrorPage = 'error-page',
}

class App {
    private static container = document.body;
    private static startPageID = PageIds.StartPage;
    private header: Header;
    private initPage: StartPage;
    private footer: Footer;

    static returnNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`.main`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }
        let page: Page | null = null;

        if (idPage === PageIds.StartPage) {
            page = new StartPage(idPage);
        } else if (idPage === PageIds.GamePage) {
            page = new GamePage(idPage);
        } else if (idPage === PageIds.WinnersPage) {
            page = new WinnersPage(idPage);
        } else {
            page = new ErrorPage(PageIds.ErrorPage);
        }

        if (page) {
            const pageHTML = page.returnHTML();
            return pageHTML;
        }
    }

    private knowHashchange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            const page = App.returnNewPage(hash);
            if (page !== undefined) {
                (<HTMLElement>document.querySelector('header')).after(page);
            }
        });
    }

    constructor() {
        this.header = new Header('header', ['header']);
        this.initPage = new StartPage(PageIds.StartPage);
        this.footer = new Footer('footer', ['footer']);
    }

    run() {
        App.container.prepend(this.header.returnHTML());

        const page = App.returnNewPage(App.startPageID);
        if (page !== undefined) {
            (<HTMLElement>document.querySelector('header')).after(page);
        }

        App.container.append(this.footer.returnHTML());

        this.knowHashchange();
        window.addEventListener('load', () => (window.location.hash = `#${PageIds.StartPage}`));
    }
}

export default App;
