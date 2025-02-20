ServerEvents.loaded(event => {
    event.server.scheduleInTicks(1, () => {})
});

ItemEvents.firstRightClicked(event => {

    let MainHandItem = event.player.mainHandItem;
    let offHandItem = event.player.offHandItem;

    if (MainHandItem.isEmpty()) return;
    if (event.player.getPersistentData().isCrafting) return;
    
    let forgingBonusMatch = /"tfc:forging_bonus":(\d+)/.exec(MainHandItem.nbt);
    let forgingBonus = forgingBonusMatch ? forgingBonusMatch[1] : null;

    let ToolTypesMatch = /tfc:([a-z_]+)+\/([a-z_]+)_head\/([a-z_]+)/.exec(MainHandItem.id);
    let ToolMaterial = ToolTypesMatch ? ToolTypesMatch[1] : null;
    let ToolTypes = ToolTypesMatch ? ToolTypesMatch[2] : null;
    let ToolMetal = ToolTypesMatch ? ToolTypesMatch[3] : null;

    let MainHand = forgingBonus !== null ? 
        Item.of(`tfc:${ToolMaterial}/${ToolTypes}_head/${ToolMetal}`, `{Damage:0,"tfc:forging_bonus":${forgingBonus}}`) :
        `tfc:${ToolMaterial}/${ToolTypes}_head/${ToolMetal}`;

    if (MainHandItem.is(MainHand) && offHandItem.hasTag('forge:rods/wooden')) {
        if(event.hand != "MAIN_HAND") return;

        event.player.persistentData.isCrafting = 1;
        event.player.triggerAnimation("tfcre:crafttool");

        event.player.server.scheduleInTicks(20 * 1.21, () => {
            offHandItem.count--;
            MainHandItem.count--;
            event.player.giveInHand(Item.of(`tfc:${ToolMaterial}/${ToolTypes}/${ToolMetal}`, `{Damage:0,"tfc:forging_bonus":${forgingBonus}}`));
            
            event.player.persistentData.isCrafting = 0;
        });
    }
});
PlayerEvents.inventoryChanged(event => {
    if (event.player.persistentData.contains('has_seen_tagged_item')) return;
    if (event.item.hasTag('tfc:metal/toolhead') || event.item.hasTag('tfc:stone/toolhead')) {
        event.player.notify(Text.translatable('notify.kubejs.toolrecipes.title'),Text.translatable('notify.kubejs.toolrecipes.text'));
        event.player.persistentData.putBoolean('has_seen_tagged_item', true);
    }
});
