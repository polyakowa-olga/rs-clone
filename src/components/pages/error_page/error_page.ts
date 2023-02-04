import Page from '../../templates/page';

class ErrorPage extends Page {
    constructor(id: string) {
        super(id);
    }

    createError() {
        const message = document.createElement('div');
        message.textContent = 'Error 404! The page was not found.';
        message.classList.add('message');
        return message;
    }

    returnHTML() {
        this.container.append(this.createError());
        return this.container;
    }
}

export default ErrorPage;
