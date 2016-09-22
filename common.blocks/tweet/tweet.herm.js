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

describe('Блок tweet на странице feed', function () {
    it('должен присутствовать', function () {
        return this.browser
            .waitForVisible('.tweet');
    });

    it('должен отобразить информацию о пользователе', function () {
        return this.browser
            .waitForVisible('.tweet .about-user');
    });

    it('должен отобразить аватар пользователя', function () {
        return this.browser
            .waitForVisible('.tweet .tweet__avatar');
    });

    it('должен отобразить контент', function () {
        return this.browser
            .waitForVisible('.tweet .tweet__content');
    });

    it('должны быть кнопки действий', function () {
        return this.browser
            .waitForVisible('.tweet .tweet__controls');
    });
});

describe('Кнопки действий', function () {
    it('like должна изменить цвет при нажатии', function () {
        return this.browser
            .click('.button_like')
            .waitForVisible('.button_type_good.button_like');
    });

    it('retweet должна изменить цвет при нажатии и перевести на страницу написания твита', function () {
        return this.browser
            .click('.button_repost')
            .waitUntil('.button_type_good.button_repost', 1000)
            .waitForExist('.page_view_compose');
    });
});
