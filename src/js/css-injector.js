const settings = require('electron-settings');
const fs = require('fs-extra');

class CssInjector {
    constructor() {
        this.settingsExist = fs.existsSync(`${app.getPath('userData')}/Settings`);
    }
}

CssInjector.main = `
    /* hide the vertical ad bar */
    .${this.settingsExist ? settings.get('verticalAdsClass') : ''} {
        display: none !important;
    }

    /* hide the small ad bar in other email page */
    .${this.settingsExist ? settings.get('smallAdsClass') : ''} {
        display: none !important;
    }

    /* hide the upgrade premium ad bar */
    .${this.settingsExist ? settings.get('premiumAdsClass') : ''} {
        display: none !important;
    }
`

CssInjector.noFrame = `
    /* make the header higher and dragable */
    ._1Kg3ffZABPxXxDqcmoxkBA {
        padding-top: 30px !important;
        -webkit-app-region: drag;
    }

    /* make the clickable component in header not dragable */
    .ms-FocusZone,
    ._3Nd2PGu67wifhuPZp2Sfj5 {
        -webkit-app-region: no-drag;
    }
`

module.exports = CssInjector