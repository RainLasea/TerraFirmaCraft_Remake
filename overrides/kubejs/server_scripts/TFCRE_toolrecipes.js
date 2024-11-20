ServerEvents.loaded(event =>{
    event.server.scheduleInTicks(1,() =>{})
});
ItemEvents.firstRightClicked(event => {
    let MainHandItem = event.player.mainHandItem;
    let offHandItem = event.player.offHandItem;

    let StoneMatch = /tfc:stone\/(?:axe_head|hammer_head|hoe_head|javelin_head|knife_head|shovel_head)\/([^/]+)/.exec(MainHandItem.id);
    let Stone = StoneMatch ? StoneMatch[1] : null;// 如果没有找到，默认值为 null

    let forgingBonusMatch = /"tfc:forging_bonus":(\d+)/.exec(MainHandItem.nbt);
    let forgingBonus = forgingBonusMatch ? forgingBonusMatch[1] : 0;
    //石斧
    if(MainHandItem === (Item.of(`tfc:stone/axe_head/${Stone}`)) && offHandItem === 'minecraft:stick') {
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20 * 1.21, () => {
            offHandItem.count--;
            MainHandItem.count--;
            event.player.giveInHand(Item.of(`tfc:stone/axe/${Stone}`, '{Damage:0}'));
        });
    };
    //石锤
    if(MainHandItem === (Item.of(`tfc:stone/hammer_head/${Stone}`)) && offHandItem === 'minecraft:stick') {
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20 * 1.21, () => {
            offHandItem.count--;
            MainHandItem.count--;
            event.player.giveInHand(Item.of(`tfc:stone/hammer/${Stone}`, '{Damage:0}'));
        });
    };
    //石锄
    if(MainHandItem === (Item.of(`tfc:stone/hoe_head/${Stone}`)) && offHandItem === 'minecraft:stick') {
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20 * 1.21, () => {
            offHandItem.count--;
            MainHandItem.count--;
            event.player.giveInHand(Item.of(`tfc:stone/hoe/${Stone}`, '{Damage:0}'));
        });
    };
    //石标枪
    if(MainHandItem === (Item.of(`tfc:stone/javelin_head/${Stone}`)) && offHandItem === 'minecraft:stick') {
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20 * 1.21, () => {
            offHandItem.count--;
            MainHandItem.count--;
            event.player.giveInHand(Item.of(`tfc:stone/javelin/${Stone}`, '{Damage:0}'));
        });
    };
    //石刀
    if(MainHandItem === (Item.of(`tfc:stone/knife_headn/${Stone}`)) && offHandItem === 'minecraft:stick') {
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20 * 1.21, () => {
            offHandItem.count--;
            MainHandItem.count--;
            event.player.giveInHand(Item.of(`tfc:stone/knife/${Stone}`, '{Damage:0}'));
        });
    };
    //石铲
    if(MainHandItem === (Item.of(`tfc:stone/shovel_headn/${Stone}`)) && offHandItem === 'minecraft:stick') {
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20 * 1.21, () => {
            offHandItem.count--;
            MainHandItem.count--;
            event.player.giveInHand(Item.of(`tfc:stone/shovel/${Stone}`, '{Damage:0}'));
        });
    };
    if (MainHandItem === (Item.of(`tfc:metal/axe_head/copper`,`{Damage:0,"tfc:forging_bonus":${forgingBonus}}`)) && event.player.offHandItem === 'minecraft:stick') {
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.player.server.scheduleInTicks(20 * 1.21, () => {
            offHandItem.count--;
            MainHandItem.count--;
            event.player.giveInHand(Item.of(`tfc:metal/axe/copper`, `{Damage:0,"tfc:forging_bonus":${forgingBonus}}`));
        });
    }
})
