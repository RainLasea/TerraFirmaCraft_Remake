StartupEvents.registry("minecraft:item", (event) => {
    /**
     * @param {String} id
     * @returns {Internal.BasicItemJS$Builder_}
     */
    const aluminumOreItemBuilder = (id) =>
        event.create(id).tag("tfc:ore_pieces").tag("sns:allowed_in_ore_sack").maxStackSize(16);

    aluminumOreItemBuilder("tfc:ore/poor_aluminum").texture("kubejs:item/poor_aluminum");
    aluminumOreItemBuilder("tfc:ore/normal_aluminum").texture("kubejs:item/normal_aluminum");
    aluminumOreItemBuilder("tfc:ore/rich_aluminum").texture("kubejs:item/rich_aluminum");

    event
        .create("tfc:powder/aluminum")
        .texture("kubejs:item/powder_aluminum")
        .tag("tfc:powders")
        .tag("forge:dusts")
        .maxStackSize(64);

    event.create("tfcre:farmer_hat").texture("kubejs:item/farmer_hat")
    event.create("tfcre:hunter_hat").texture("kubejs:item/hunter_hat")
    event.create("tfc:stone/arrow_hand").texture("kubejs:item/arrow_hand").maxStackSize(16)
});
