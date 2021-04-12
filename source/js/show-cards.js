const taskTemplateCard = document.querySelector('#homepage__card').content;
const templateCard = taskTemplateCard.querySelector('.homepage__card-link');
const cardsContainer = document.querySelector('.homepage__cards-wrapper');

const typeHousing = {
    independent: 'IndependentLiving',
    support: 'SupportAvailable',
};

const typeHousingText = {
    IndependentLiving: 'Independent living',
    SupportAvailable: 'Restaurant & Support available',
};

const showCards = (data) => {
    const selectedCards = cardsContainer.querySelectorAll('.homepage__card-link');

    if (selectedCards.length !== 0) {
        selectedCards.forEach((selectedCard) => {
            selectedCard.remove();
        });
    }

    const cardsListFragment = document.createDocumentFragment();

    data.forEach((element) => {
        const cardClone = templateCard.cloneNode(true);
        const cardTitle = cardClone.querySelector('.card__text-name');
        const cardAddress = cardClone.querySelector('.card__text-address');
        const cardPrice = cardClone.querySelector('.card__text-price_number');
        const cardType = cardClone.querySelector('.card__text_info-living');

        cardClone.href = 'details/' + element.id;
        cardTitle.textContent = element.title;
        cardAddress.textContent = element.address;
        cardPrice.textContent = '£ ' + element.price;
        cardType.textContent = typeHousingText[element.type];
        if(element.type === typeHousing.independent) {
            cardType.classList.add('card__text_dark-theme');
        } else if (element.type === typeHousing.support) {
            cardType.classList.add('card__text_bright-theme');
        }
        cardsListFragment.appendChild(cardClone);
    });
    cardsContainer.appendChild(cardsListFragment);
};

export {showCards}