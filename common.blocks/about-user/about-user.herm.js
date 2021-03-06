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
            .click('.popup_login_btn');
    });
});

describe('Блок about-user должен отобразить информацию о пользователе', function () {
    it('на странице profile', function () {
        return this.browser
            .url(config.servers.frontend_server + '/profile')
            .getText('.about-user .text_username')
            .getText('.about-user .text_id');
    });

    it('в ленте', function () {
        return this.browser
            .waitForVisible('.tweet .about-user')
            .getText('.tweet .text_time')
            .getText('.tweet .text_username')
            .getText('.tweet .text_id');
    });
});

describe('В блоке tweet на странице feed должны быть ', function () {
    it('время добавления записи, имя пользователя и его логин', function () {
        return this.browser
            .url(config.servers.frontend_server + '/feed')
            .getText('.about-user .text_time')
            .getText('.about-user .text_username')
            .getText('.about-user .text_id');
    });
});
