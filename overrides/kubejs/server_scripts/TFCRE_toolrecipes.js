ServerEvents.loaded(event =>{
    event.server.scheduleInTicks(1,() =>{})
});
ItemEvents.firstRightClicked(event => {
    let MainHandItem = event.player.mainHandItem;
    let offHandItem = event.player.offHandItem;

    if (MainHandItem.isEmpty()) return; // 如果主手为空，则直接返回

    //锻造品质
    let forgingBonusMatch = /"tfc:forging_bonus":(\d+)/.exec(MainHandItem.nbt);
    let forgingBonus = forgingBonusMatch ? forgingBonusMatch[1] : 0;
    //工具变种
    let ToolTypesMatch = /tfc:([a-z_]+)+\/([a-z_]+)_head\/([a-z_]+)/.exec(MainHandItem.id);
    let ToolMaterial = ToolTypesMatch ? ToolTypesMatch[1] :null;
    let ToolTypes = ToolTypesMatch ? ToolTypesMatch[2] : null;
    let ToolMetal = ToolTypesMatch ? ToolTypesMatch[3] : null;

    if (MainHandItem.equals(Item.of(`tfc:${ToolMaterial}/${ToolTypes}_head/${ToolMetal}`,`{Damage:0,"tfc:forging_bonus":${forgingBonus}}`))||
    (`tfc:${ToolMaterial}/${ToolTypes}_head/${ToolMetal}`) && offHandItem === 'minecraft:stick') {
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.player.server.scheduleInTicks(20 * 1.21, () => {
            offHandItem.count--;
            MainHandItem.count--;
            event.player.giveInHand(Item.of(`tfc:${ToolMaterial}/${ToolTypes}/${ToolMetal}`, `{Damage:0,"tfc:forging_bonus":${forgingBonus}}`));
        });
    }
})
