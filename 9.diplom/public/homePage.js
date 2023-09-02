"use strict";

const logoutButtonObject = new LogoutButton();
const ratesBoardObject = new RatesBoard();
const moneyManagerObject = new MoneyManager();
const favoritesWidgetObject = new FavoritesWidget();

// Выход из личного кабинета
logoutButtonObject.action = () => {
    ApiConnector.logout((response) => {
        if (response.success) {
            location.reload();
        };
    });
};
// Получение информации о пользователе
ApiConnector.current((response) => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    };
});
// Получение текущих курсов валюты
ratesBoardObject.getExRates = () => {
    ApiConnector.getStocks((response) => {
        if (response.success) {
            // console.log('exRates upd');
            ratesBoardObject.clearTable();
            ratesBoardObject.fillTable(response.data);
        };
    })
};
ratesBoardObject.getExRates()
setInterval(ratesBoardObject.getExRates, 60000);

// ** Операции с деньгами **

// Пополнение баланса
moneyManagerObject.addMoneyCallback = (data) => {
    ApiConnector.addMoney(data, (response) => {
        if (response.success) {
            ProfileWidget.showProfile(response.data);
            moneyManagerObject.setMessage(true, "Done!");
        } else {
            moneyManagerObject.setMessage(false, "Error");
        };
    });
};
// Конвертирование валюты
moneyManagerObject.conversionMoneyCallback = (data) => {
    ApiConnector.convertMoney(data, (response) => {
        if (response.success) {
            ProfileWidget.showProfile(response.data);
            moneyManagerObject.setMessage(true, "Done!");
        } else {
            moneyManagerObject.setMessage(false, "Error");
        };
    });
};
// Перевод валюты
moneyManagerObject.sendMoneyCallback = (data) => {
    ApiConnector.transferMoney(data, (response) => {
        if (response.success) {
            ProfileWidget.showProfile(response.data);
            moneyManagerObject.setMessage(true, "Done!");
        } else {
            moneyManagerObject.setMessage(false, "Error");
        };
    });
};

// ** Работа с избранным **

// Начальный список избранного
ApiConnector.getFavorites((response) => {
    if (response.success) {
        // console.log('test list favorites done!');
        favoritesWidgetObject.clearTable();
        favoritesWidgetObject.fillTable(response.data);
        moneyManagerObject.updateUsersList(response.data);
    };
});

// Добавление пользователя в список избранных
favoritesWidgetObject.addUserCallback = (data) => {
    ApiConnector.addUserToFavorites(data, response => {
        if (response.success) {
            // console.log('test add favorites user done!');
            favoritesWidgetObject.clearTable();
            favoritesWidgetObject.fillTable(response.data);
            moneyManagerObject.updateUsersList(response.data);
            favoritesWidgetObject.setMessage(true, "Done!");
        } else {
            favoritesWidgetObject.setMessage(false, "Error");
        };
    });
};

// Удаление пользователя из избранного
favoritesWidgetObject.removeUserCallback = (data) => {
    ApiConnector.removeUserFromFavorites(data, response => {
        if (response.success) {
            // console.log('test delete favorites user done!');
            favoritesWidgetObject.clearTable();
            favoritesWidgetObject.fillTable(response.data);
            moneyManagerObject.updateUsersList(response.data);
            favoritesWidgetObject.setMessage(true, "Done!");
        } else {
            favoritesWidgetObject.setMessage(false, "Error");
        };
    });
};