import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";

export const config = {
    ...mainConfig,
    ...{
        framework: 'cucumber',
        timeout: 20000,
        waitforTimeout: 20000,
        cucumberOpts: {
            require: ['./test/step-definitions/**/*.js'],
        },
        reporters: ['spec',
            ['allure',
                {
                    outputDir: 'allure-results',
                    disableWebdriverStepsReporting: true,
                    disableWebdriverScreenshotsReporting: true,
                },
            ]],
        specs: [
            '../test/features/**/*.feature'
        ],
        capabilities: [
            {
                browserName: "chrome",
                "goog:chromeOptions": {
                    prefs: {
                        "download.default_directory": downloadDir
                    }
                },
            },
        ],
    },
};
