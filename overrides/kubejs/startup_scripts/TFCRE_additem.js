StartupEvents.registry('minecraft:item', event => {
    event.create('tfc:ore/poor_aluminum', 'basic')
    .texture("kubejs:item/poor_aluminum")
    .tag('tfc:ore_pieces')
    .tag('sns:allowed_in_ore_sack')
    .maxStackSize(16)
    event.create('tfc:ore/normal_aluminum', 'basic')
    .texture("kubejs:item/normal_aluminum")
    .tag('tfc:ore_pieces')
    .tag('sns:allowed_in_ore_sack')
    .maxStackSize(16)
    event.create('tfc:ore/rich_aluminum', 'basic')
    .texture("kubejs:item/rich_aluminum")
    .tag('tfc:ore_pieces')
    .tag('sns:allowed_in_ore_sack')
    .maxStackSize(16)
    event.create('tfc:powder/aluminum', 'basic')
    .texture("kubejs:item/powder_aluminum")
    .tag('tfc:powders')
    .tag('forge:dusts')
    .maxStackSize(64)
})
