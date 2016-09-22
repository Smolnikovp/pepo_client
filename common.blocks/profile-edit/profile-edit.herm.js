var config = require('../../server/config.js');

describe('Войти', function () {
    it('', function () {
        return this.browser
            .url(config.servers.frontend_server)
            .waitForVisible('.social-buttons__fb')
            .waitForVisible('.social-buttons__vk')
            .click('.social-buttons__vk')
            .waitForVisible('[name=\'email\']')
            .waitForVisible('[name=\'pass\']')
            .waitForVisible('.popup_login_btn')
            .setValue('[name=\'email\']', '+79788401345')
            .setValue('[name=\'pass\']', 'Counter1')
            .click('.popup_login_btn')
            .url(config.servers.frontend_server + '/profile-edit');
    });
});

describe('Блок profile-edit', function () {
    it('должен быть на странице', function () {
        return this.browser
            .waitForVisible('.profile-edit');
    });
});

describe('Блок profile-edit должен показать пользователю', function () {
    it('аватар', function () {
        return this.browser
            .waitForVisible('.profile-edit__avatar');
    });

    it('поле для ввода имени', function () {
        return this.browser
            .waitForVisible('.input_field_firstName');
    });

    it('поле для ввода фамилии', function () {
        return this.browser
            .waitForVisible('.input_field_lastName');
    });

    it('поле для ввода дополнительной информации', function () {
        return this.browser
            .waitForVisible('.textarea')
            .getAttribute('.textarea', 'id', 'description');
    });
});

describe('добавить данные', function () {
    it('', function () {
        return this.browser
            .setValue('[name=\'firstName\']', 'John')
            .setValue('[name=\'lastName\']', 'Doe')
            .setValue('[id=\'description\']', 'EXTERMINATE!');
    });
});

describe('Дополнительные кнопки', function () {
    it('найти подвал страницы', function () {
        return this.browser
            .waitForVisible('.profile-edit__footer');
    });

    it('найти кнопку "Назад"', function () {
        return this.browser
            .waitForVisible('.profile-edit__back');
    });

    it('найти кнопку "Сохранить"', function () {
        return this.browser
            .waitForVisible('.profile-edit__save');
    });
});

describe('Кнопка "Сохранить"', function () {
    it('при нажатии собирает данные', function () {
        return this.browser
            .getText('[name=\'firstName\']')
            .getText('[name=\'lastName\']')
            .getText('[id=\'description\']')
            .click('.profile-edit__save')
            .waitForExist('.page_view_profile');
    });
});

describe('Кнопка "Назад"', function () {
    it('возвращает на страницу профиля без сохранения данных', function () {
        return this.browser
            .url(config.servers.frontend_server + '/profile-edit')
            .click('.profile-edit__back')
            .waitForVisible('.page_view_profile');
    });
});
