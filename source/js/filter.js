const filter = document.querySelector('.filter');
const filterInput = filter.querySelector('.filter__input');

const addInputHandlerToFilter = (data, callback) => {
    filterInput.addEventListener('input', () => {

        if (filterInput.value.length >= 3) {
            let filteredData = Array();
            data.forEach((element) => {
                if(element.title.toLowerCase().includes(filterInput.value.toLowerCase())) {
                    filteredData.push(element);
                }
            })
            callback(filteredData);
        } else {
            callback(data);
        }
    })
};

export {addInputHandlerToFilter}