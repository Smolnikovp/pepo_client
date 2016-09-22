module.exports = {
    specs: ['./common.blocks/**/*.herm.js'],

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    }
};
