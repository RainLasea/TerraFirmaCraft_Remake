ServerEvents.recipes(event => {
    event.remove({input: '#tfc:metal/toolhead'})
    event.remove({input: '#tfc:stone/toolhead'})
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
});

