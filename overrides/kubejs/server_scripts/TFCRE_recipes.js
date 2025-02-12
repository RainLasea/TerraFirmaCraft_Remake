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
    event.remove({id: 'minecraft:brush'})

    event.remove({id: 'minecraft:arrow'})
    event.shaped('minecraft:arrow',
        [' A ',' S ',' F '],{A:'tfc:stone/arrow_hand',S:'minecraft:stick',F:'minecraft:feather'}
    )
});
//床
ServerEvents.recipes(event => {
    event.remove({output: '#minecraft:beds'});
    let ingredients = {S: 'tfc:stick_bunch', L: '#minecraft:logs', H: 'minecraft:hay_block'};

    let createBed = (color, dye) => {
        event.shaped(`minecraft:${color}_bed`, ['DDD', 'HHH', 'SLS'], Object.assign({}, ingredients, {D: `minecraft:${dye}`}));
    };
    event.shaped('minecraft:white_bed', ['HHH', 'SLS'], ingredients);
    
    let beds = [
        {color: 'light_gray', dye: 'light_gray_dye'},
        {color: 'gray', dye: 'gray_dye'},
        {color: 'black', dye: 'black_dye'},
        {color: 'brown', dye: 'brown_dye'},
        {color: 'red', dye: 'red_dye'},
        {color: 'orange', dye: 'orange_dye'},
        {color: 'yellow', dye: 'yellow_dye'},
        {color: 'lime', dye: 'lime_dye'},
        {color: 'green', dye: 'green_dye'},
        {color: 'cyan', dye: 'cyan_dye'},
        {color: 'light_blue', dye: 'light_blue_dye'},
        {color: 'blue', dye: 'blue_dye'},
        {color: 'purple', dye: 'purple_dye'},
        {color: 'magenta', dye: 'magenta_dye'},
        {color: 'pink', dye: 'pink_dye'}
    ];

    beds.forEach(bed => createBed(bed.color, bed.dye));
});