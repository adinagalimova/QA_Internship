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
                    disableWebdriverStepsReporting: false, 
                    disableWebdriverScreenshotsReporting: false, 
                    useCucumberStepReporter: true, 
                    disableMochaHooks: true,
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
                        'intl.accept_languages': 'en,en_US',
                        "download.default_directory": downloadDir
                    }
                },
            },
        ],
    },
};
