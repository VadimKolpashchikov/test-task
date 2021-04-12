import '../less/style.less';
import {getData} from './api.js';
import {showCards} from './show-cards.js';
import {addInputHandlerToFilter} from './filter';

getData((data) => {
    showCards(data);
    addInputHandlerToFilter(data, showCards);
});

