const $KnappingContainer = Java.loadClass("net.dries007.tfc.common.container.KnappingContainer");
PlayerEvents.inventoryOpened((event) => {
    const { inventoryContainer, player } = event;

    if (inventoryContainer instanceof $KnappingContainer) {
        player.triggerAnimation("tfcre:hitstone", 1, "linear", false, false);
    }
});
PlayerEvents.inventoryClosed((event) => {
    const { inventoryContainer, player } = event;

    if (inventoryContainer instanceof $KnappingContainer) {
        player.stopAnimation("tfcre:hitstone");
    }
});
NetworkEvents.dataReceived("global.testKey.consumeClick", (event) => {
    event.player.triggerAnimation("tfcre:sit", 1, "linear", false, false);
  });
AnimationJS.universalController(event => {
    if (event.player.isMoving()) {
        event.stopAnimation("tfcre:sit")
    }
})
