ServerEvents.recipes(event => {
    event.remove({id:"tfc:crafting/stick_bunch"})
    event.remove({id:"tfc:crafting/stick_from_bunch"})
    event.remove({id:"tfc:crafting/stick_from_bundle"})
    event.remove({id:"scoutreforked:satchels"})
    event.shapeless('tfc:stick_bunch',['4x minecraft:stick'])
    event.shapeless('4x minecraft:stick',['tfc:stick_bunch'])
    event.shapeless('8x minecraft:stick',['tfc:stick_bundle'])
    event.shapeless('tfc:kaolin_clay', ['minecraft:clay_ball','3x tfc:powder/flux'])
    event.shaped('tfc:fire_clay', ['KPK','PCP','KPK'],{K: 'tfc:powder/kaolinite',P: 'tfc:powder/aluminum',C: 'minecraft:clay_ball'})
    
    event.recipes.tfc.quern('3x tfc:powder/aluminum','tfc:ore/poor_aluminum')
    event.recipes.tfc.quern('5x tfc:powder/aluminum','tfc:ore/normal_aluminum')
    event.recipes.tfc.quern('7x tfc:powder/aluminum','tfc:ore/rich_aluminum')

    event.shaped('minecraft:brush', ['  F',' C ','S  '],{F: 'minecraft:feather',C: 'tfc:metal/sheet/copper',S: 'minecraft:stick'})
    event.remove({id: 'minecraft:brush'})
    event.remove({id: 'minecraft:arrow'})
    event.shaped('minecraft:arrow',
        [' A ',' S ',' F '],{A:'tfc:stone/arrow_hand',S:'minecraft:stick',F:'minecraft:feather'}
    )
});
ServerEvents.recipes((event) => {
    let { kubejs } = event.recipes;
  
    kubejs
      .shapeless("4x tfc:firewood", ["#minecraft:logs", "#minecraft:axes"])
      .damageIngredient("#minecraft:axes",3);
  });
//床
ServerEvents.recipes(event => {
    event.remove({output: '#minecraft:beds'});
    let ingredients = {L: '#tfc:lumber', P: '#minecraft:planks', H: 'minecraft:hay_block'};

    let createBed = (color, dye) => {
        event.shaped(`minecraft:${color}_bed`, ['DDD', 'HHH', 'LPL'], Object.assign({}, ingredients, {D: `minecraft:${dye}`}));
    };
    event.shaped('minecraft:white_bed', ['HHH', 'LPL'], ingredients);
    
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