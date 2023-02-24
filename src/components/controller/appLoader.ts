import { Loader } from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '77a23ec595544db398f6d7159ae6da1a', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
