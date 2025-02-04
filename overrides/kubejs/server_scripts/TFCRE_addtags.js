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
    let ToolTypes = ['pickaxe_head','propick_head','axe_head','shovel_head','hoe_head','chisel_head','hammer_head'];
    let metalRegex = new RegExp(`^tfc:metal/(${ToolTypes.join('|')})/.+$`);
    let stoneRegex = new RegExp(`^tfc:stone/(${ToolTypes.join('|')})/.+$`);
    event.add('tfc:metal/toolhead', metalRegex);
    event.add('tfc:stone/toolhead', stoneRegex);
});
