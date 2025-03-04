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
    event.create("tfc:firewood","basic").texture("kubejs:item/firewood").parentModel("kubejs:item/firewood").burnTime(300).maxStackSize(32)
    .tag("tfc:log_pile_logs")
    .tag("tfc:firepit_fuel")
    .tag("tfc:firepit_logs")
    .tag("tfc:pit_kiln_logs")
    .tag("firmalife:oven_fuel")
    .tag("firmalife:smoking_fuel");
});
StartupEvents.modifyCreativeTab('tfc:ores', event => {
    event.addAfter('tfc:ore/rich_tetrahedrite', ['tfc:ore/rich_aluminum', 'tfc:ore/normal_aluminum', 'tfc:ore/poor_aluminum']);
});

StartupEvents.modifyCreativeTab('tfc:misc', event => {
    event.addAfter('tfc:blank_disc', 'tfcre:music_disc_again')
    event.addAfter('tfc:powder/tetrahedrite', 'tfc:powder/aluminum')
    event.add('tfc:stone/arrow_hand');
});

StartupEvents.modifyCreativeTab('tfc:wood', event => {
    event.add('tfc:firewood');
});

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
    event.remove([
        'tfc:ore/rich_aluminum', 'tfc:ore/normal_aluminum', 'tfc:ore/poor_aluminum',
        'tfcre:music_disc_again', 'tfc:powder/aluminum', 'tfc:stone/arrow_hand',
        "tfc:firewood"
    ]);
});