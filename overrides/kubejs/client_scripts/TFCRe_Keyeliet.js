ClientEvents.tick((event) => {
    const { player } = event;
    const { testKey } = global;

    if (testKey.consumeClick()) {
        event.player.triggerAnimation("tfcre:sit");
        player.sendData("global.testKey.consumeClick");
    }
});
