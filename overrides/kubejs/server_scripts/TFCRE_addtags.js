ServerEvents.tags("item", (event) => {
    const NORMAL_ALUMINUMS = [
        "tfc:ore/normal_chalk/aluminum",
        "tfc:ore/normal_chert/aluminum",
        "tfc:ore/normal_claystone/aluminum",
        "tfc:ore/normal_conglomerate/aluminum",
        "tfc:ore/normal_dolomite/aluminum",
        "tfc:ore/normal_granite/aluminum",
        "tfc:ore/normal_limestone/aluminum",
        "tfc:ore/normal_shale/aluminum",
    ];
    const POOR_ALUMINUMS = [
        "tfc:ore/poor_chalk/aluminum",
        "tfc:ore/poor_chert/aluminum",
        "tfc:ore/poor_claystone/aluminum",
        "tfc:ore/poor_conglomerate/aluminum",
        "tfc:ore/poor_dolomite/aluminum",
        "tfc:ore/poor_granite/aluminum",
        "tfc:ore/poor_limestone/aluminum",
        "tfc:ore/poor_shale/aluminum",
    ];

    const RICH_ALUMINUMS = [
        "tfc:ore/rich_chalk/aluminum",
        "tfc:ore/rich_chert/aluminum",
        "tfc:ore/rich_claystone/aluminum",
        "tfc:ore/rich_conglomerate/aluminum",
        "tfc:ore/rich_dolomite/aluminum",
        "tfc:ore/rich_granite/aluminum",
        "tfc:ore/rich_limestone/aluminum",
        "tfc:ore/rich_shale/aluminum",
    ];

    const ALUMINUMS = NORMAL_ALUMINUMS.concat(POOR_ALUMINUMS, RICH_ALUMINUMS);

    event.add("forge:ores", ALUMINUMS);
    event.add("tfc:ores/aluminum", ALUMINUMS);

    event.add("tfc:ores/aluminum/normal", NORMAL_ALUMINUMS);
    event.add("tfc:ores/aluminum/poor", POOR_ALUMINUMS);
    event.add("tfc:ores/aluminum/rich", RICH_ALUMINUMS);
    event.add("tfc:metal/toolhead",new RegExp ('tfc:metal/pickaxe_head/'))
    event.add("tfc:metal/toolhead",new RegExp ('tfc:metal/propick_head/'))
    event.add("tfc:metal/toolhead",new RegExp ('tfc:metal/axe_head/'))
    event.add("tfc:metal/toolhead",new RegExp ('tfc:metal/shovel_head/'))
    event.add("tfc:metal/toolhead",new RegExp ('tfc:metal/hoe_head/'))
    event.add("tfc:metal/toolhead",new RegExp ('tfc:metal/chisel_head/'))
    event.add("tfc:metal/toolhead",new RegExp ('tfc:metal/hammer_head/'))
    event.add("tfc:metal/toolhead",new RegExp ('tfc:metal/saw_blade/'))
    event.add("tfc:metal/toolhead",new RegExp ('tfc:metal/knife_blade/'))
    event.add("tfc:metal/toolhead",new RegExp ('tfc:metal/scythe_blade/'))
    event.add("tfc:metal/toolhead",new RegExp ('tfc:metal/javelin_head/'))
    event.add("tfc:metal/toolhead",new RegExp ('tfc:metal/sword_blade/'))
    event.add("tfc:metal/toolhead",new RegExp ('tfc:metal/mace_head/'))

});
