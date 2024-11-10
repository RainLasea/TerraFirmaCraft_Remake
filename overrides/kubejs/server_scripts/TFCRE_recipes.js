ServerEvents.recipes(event => {
    event.remove({id: 'tfc:crafting/stone/axe_igneous_extrusive'})
    event.remove({id: 'tfc:crafting/stone/axe_igneous_intrusive'})
    event.remove({id: 'tfc:crafting/stone/axe_metamorphic'})
    event.remove({id: 'tfc:crafting/stone/axe_sedimentary'})
    event.remove({id: 'tfc:crafting/metal/axe/copper'})
    event.remove({id: 'tfc:crafting/metal/axe/bismuth_bronze'})
    event.remove({id: 'tfc:crafting/metal/axe/black_bronze'})
    event.shapeless('tfc:kaolin_clay', ['minecraft:clay_ball','3x tfc:powder/flux'])
    event.shaped('tfc:fire_clay', [
        'KPK',
        'PCP',
        'KPK'
    ],
    {
        K: 'tfc:powder/kaolinite',
        P: 'tfc:powder/aluminum',
        C: 'minecraft:clay_ball'
    })
    event.recipes.tfc.quern('3x tfc:powder/aluminum','tfc:ore/poor_aluminum')
    event.recipes.tfc.quern('5x tfc:powder/aluminum','tfc:ore/normal_aluminum')
    event.recipes.tfc.quern('7x tfc:powder/aluminum','tfc:ore/rich_aluminum')

    event.shaped('minecraft:brush', [
        '  F',
        ' C ',
        'S  '
    ],
    {
        F: 'minecraft:feather',
        C: 'tfc:metal/sheet/copper',
        S: 'minecraft:stick'
    })
})