class HelloWorldPlugin {
    constructor(api) {
        this.api = api;
    }

    async onStart() {
        this.api.getLogger().info('Hello World');
    }
    async onExit() {
        this.api.getLogger().info('Goodbye World');
    }
};

module.exports.default = HelloWorldPlugin;
