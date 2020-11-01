class HelloWorldPlugin {
    constructor(api) {
        this.api = api;
    }

    async onEnable() {
        this.api.getLogger().info('Hello World');
    }
    
    async onDisable() {
        this.api.getLogger().info('Goodbye World');
    }
};

module.exports.default = HelloWorldPlugin;
