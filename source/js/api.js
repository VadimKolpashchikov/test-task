const SERVER_ADDRESS = 'https://603e38c548171b0017b2ecf7.mockapi.io/homes';

const getData = (onSuccess) => {
    fetch(SERVER_ADDRESS)
        .then((response) => response.json())
        .then((data) => {
            onSuccess(data);
        })
        .catch(() => {
           throw new Error();
        });
};

export {getData}