block('compose').elem('body')(
    content()(function () {
        return {
            block: 'textarea',
            mods: { theme: 'islands', size: 'm', width: 'available' },
            mix: { block: 'compose', elem: 'textarea' },
            placeholder: 'Ваш текст должен быть здесь'
        };
    })
);
