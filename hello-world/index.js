module.exports = (plugin) => {
    plugin.getServer().getLogger().info('Hello World!')

    plugin.getCommandManager().registerCommand('hello-world', 'Says hello t everybody', (sender) => {
        plugin.getOnlinePlayers().forEach((player) => {
            player.sendMessage(`Hello ${player.name}!`)
        })
    })
}
