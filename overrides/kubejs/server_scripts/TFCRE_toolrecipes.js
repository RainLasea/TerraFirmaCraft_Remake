ServerEvents.loaded(event =>{
    event.server.scheduleInTicks(1,() =>{})
})
//石
ItemEvents.firstRightClicked(event => {
    if (event.player.mainHandItem == 'tfc:stone/axe_head/igneous_extrusive' && event.player.offHandItem == 'minecraft:stick') {
        let offHandItem = event.player.offHandItem;
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        //计时器
        event.server.scheduleInTicks(20*1.21,() =>{
            offHandItem.count--;
            event.item.count--;
            event.player.giveInHand('tfc:stone/axe/igneous_extrusive');
        })
    }
})
ItemEvents.firstRightClicked(event => {
    if (event.player.mainHandItem == 'tfc:stone/axe_head/igneous_intrusive' && event.player.offHandItem == 'minecraft:stick') {
        let offHandItem = event.player.offHandItem;
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20*1.21,() =>{
            offHandItem.count--;
            event.item.count--;
            event.player.giveInHand(Item.of('tfc:stone/axe/igneous_intrusive', '{Damage:0}'));
        })
    }
})
ItemEvents.firstRightClicked(event => {
    if (event.player.mainHandItem == 'tfc:stone/axe_head/metamorphic' && event.player.offHandItem == 'minecraft:stick') {
        let offHandItem = event.player.offHandItem;
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20*1.21,() =>{
            offHandItem.count--;
            event.item.count--;
            event.player.giveInHand(Item.of('tfc:stone/axe/metamorphic', '{Damage:0}'));
        })
    }
})
ItemEvents.firstRightClicked(event => {
    if (event.player.mainHandItem == 'tfc:stone/axe_head/sedimentary' && event.player.offHandItem == 'minecraft:stick') {
        let offHandItem = event.player.offHandItem;
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20*1.21,() =>{
            offHandItem.count--;
            event.item.count--;
            event.player.giveInHand(Item.of('tfc:stone/axe/sedimentary', '{Damage:0}'));
        })
    }
})
//铜
ItemEvents.firstRightClicked(event => {
    if (event.player.mainHandItem == 'tfc:metal/axe_head/copper' && event.player.offHandItem == 'minecraft:stick') {
        let offHandItem = event.player.offHandItem;
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20*1.21,() =>{
            offHandItem.count--;
            event.item.count--;
            event.player.giveInHand(Item.of('tfc:metal/axe/copper', '{Damage:0}'));
        })
    }
})
ItemEvents.firstRightClicked(event => {
    if (event.player.mainHandItem == (Item.of('tfc:metal/axe_head/bronze', '{"tfc:forging_bonus":1}')) && event.player.offHandItem == 'minecraft:stick') {
        let offHandItem = event.player.offHandItem;
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20*1.21,() =>{
            offHandItem.count--;
            event.item.count--;
            event.player.giveInHand(Item.of('tfc:metal/axe/bronze', '{Damage:0,"tfc:forging_bonus":1}'));
        })
    }
})
ItemEvents.firstRightClicked(event => {
    if (event.player.mainHandItem == (Item.of('tfc:metal/axe_head/bronze', '{"tfc:forging_bonus":2}')) && event.player.offHandItem == 'minecraft:stick') {
        let offHandItem = event.player.offHandItem;
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20*1.21,() =>{
            offHandItem.count--;
            event.item.count--;
            event.player.giveInHand(Item.of('tfc:metal/axe/bronze', '{Damage:0,"tfc:forging_bonus":2}'));
        })
    }
})
ItemEvents.firstRightClicked(event => {
    if (event.player.mainHandItem == (Item.of('tfc:metal/axe_head/bronze', '{"tfc:forging_bonus":3}')) && event.player.offHandItem == 'minecraft:stick') {
        let offHandItem = event.player.offHandItem;
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20*1.21,() =>{
            offHandItem.count--;
            event.item.count--;
            event.player.giveInHand(Item.of('tfc:metal/axe/bronze', '{Damage:0,"tfc:forging_bonus":3}'));
        })
    }
})
ItemEvents.firstRightClicked(event => {
    if (event.player.mainHandItem == (Item.of('tfc:metal/axe_head/bronze', '{"tfc:forging_bonus":4}')) && event.player.offHandItem == 'minecraft:stick') {
        let offHandItem = event.player.offHandItem;
        if(event.hand != "MAIN_HAND")return;
        event.player.triggerAnimation("tfcre:crafttool");
        event.server.scheduleInTicks(20*1.21,() =>{
            offHandItem.count--;
            event.item.count--;
            event.player.giveInHand(Item.of('tfc:metal/axe/bronze', '{Damage:0,"tfc:forging_bonus":4}'));
        })
    }
})