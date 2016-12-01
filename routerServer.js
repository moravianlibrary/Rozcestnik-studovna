/* KRAMERIUS */
Router.route('digital-library-acho', {
    where: 'server',
    action: function () {
        this.response.statusCode = 200;
        this.response.setHeader("Content-Type", "application/acho");
        this.response.end(`host: digitalniknihovna.mzk.cz\nlang: cs`);
    },
    i18n: {
        languages: {
            en: {
                action: function () {
                    this.response.statusCode = 200;
                    this.response.setHeader("Content-Type", "application/acho");
                    this.response.end(`host: digitalniknihovna.mzk.cz\nlang: en`);
                }
            }
        }
    }
});

/* WEBARCHIV */
Router.route('webarchiv-acho', {
    where: 'server',
    action: function () {
        this.response.statusCode = 200;
        this.response.setHeader("Content-Type", "application/acho");
        this.response.end(`host: webarchiv.cz\nlang: cs`);
    },
    i18n: {
        languages: {
            en: {
                action: function () {
                    this.response.statusCode = 200;
                    this.response.setHeader("Content-Type", "application/acho");
                    this.response.end(`host: webarchiv.cz\nlang: en\n`);
                }
            }
        }
    }
});

Router.route('/kramerius-acho/:host/:lang/:uuid', {
    where: 'server',
    action: function () {
        this.response.statusCode = 200;
        this.response.setHeader("Content-Type", "application/acho");
        this.response.end(`host: ${this.params.host}\nlang: ${this.params.lang}\npid: ${this.params.uuid}`);
    }
});