ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed', event => {global.blockBreak(event)});

/** @param {Internal.PlayerEvent$BreakSpeed} event */
global.blockBreak = event => {
   // /** @type {Internal.LivingEntity} */
    //let player = event.entity;
    //let tool = player.getMainHandItem()
    //if (tool.damageValue >= tool.maxDamage) {
        //event.setNewSpeed(0);
    //}
};