ServerEvents.loaded(event =>{
    event.server.scheduleInTicks(1,() =>{})
});
//石
ItemEvents.firstRightClicked(event => {
    let MainHandItem = event.player.mainHandItem;
    let offHandItem = event.player.offHandItem;
    let aex_stoneMatch = /tfc:stone\/axe_head\/(.*)/.exec(MainHandItem.id);
    let aex_stone = aex_stoneMatch[1];
    if(MainHandItem === (Item.of(`tfc:stone/axe_head/${aex_stone}`)) && offHandItem === 'minecraft:stick') {
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20 * 1.21, () => {
            offHandItem.count--;
            MainHandItem.count--;
            event.player.giveInHand(Item.of(`tfc:stone/axe/${aex_stone}`, '{Damage:0}'));
        });
    }
});
ItemEvents.firstRightClicked(event => {
    let MainHandItem = event.player.mainHandItem;
    let offHandItem = event.player.offHandItem;
    let ItemNbt = event.player.mainHandItem.nbt;
    let forgingBonusMatch = /"tfc:forging_bonus":(\d+)/.exec(ItemNbt);
    let forgingBonus = forgingBonusMatch ? forgingBonusMatch[1] : 0; // 如果没有找到，默认值为 0
    if (MainHandItem === Item.of(`tfc:metal/axe_head/copper`,`{Damage:0,"tfc:forging_bonus":${forgingBonus}}`) && event.player.offHandItem === 'minecraft:stick') {
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.player.server.scheduleInTicks(20 * 1.21, () => {
            offHandItem.count--;
            MainHandItem.count--;
            event.player.giveInHand(Item.of(`tfc:metal/axe/copper`, `{Damage:0,"tfc:forging_bonus":${forgingBonus}}`));
        });
    }
})


