"use strict";

let userFormObject = new UserForm();

userFormObject.loginFormCallback = (data) => {

    ApiConnector.login(data, response => {
        console.log(response);
        if (response.success) {
            location.reload();
        } else {
            userFormObject.setLoginErrorMessage(response.error);
        };

    });

};

userFormObject.registerFormCallback = (data) => {

    ApiConnector.register(data, response => {
        console.log(response);
        if (response.success) {
            location.reload();
        } else {
            userFormObject.setRegisterErrorMessage(response.error);
        };

    });

};

