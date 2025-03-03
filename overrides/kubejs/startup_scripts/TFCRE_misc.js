TFCEvents.birthdays((event) => {
    event.add("november", 8, "Abyss_Lasea");
});
ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed', event => {
    global.blockBreak(event);
});

/** @param {Internal.PlayerEvent$BreakSpeed} event */
global.blockBreak = event => {
    let tool = event.entity.getMainHandItem();
    if (tool.damageValue >= tool.maxDamage) {
        event.setNewSpeed(0);
    }
};
