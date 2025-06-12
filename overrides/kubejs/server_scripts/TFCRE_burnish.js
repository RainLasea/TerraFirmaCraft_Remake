const ToolTypes = ['axe','hammer',"hoe","javelin","knife","shovel"];
const Material = ['igneous_extrusive', 'igneous_intrusive', 'metamorphic', 'sedimentary'];

ServerEvents.recipes(event => {
    event.recipes.kubejs.shapeless(
        Item.of('tfc:stone/axe/igneous_extrusive'),
        ['#tfc:stonetools', 'tfc:straw']
    ).id('tfcre:stone_tool_repair').modifyResult((grid, result) => {
        const toolItem = grid.find(Ingredient.of("#tfc:stonetools"));
        
        if (!toolItem) return 'minecraft:air';

        if (toolItem.damageValue === 0) return 'minecraft:air';
        if (toolItem.damageValue >= toolItem.maxDamage) return 'minecraft:air';

        if (toolItem.nbt && toolItem.nbt["tfc:uses"] === 0) {
            return 'minecraft:air';
        }

        const newNbt = {
            Damage: 0,
            "tfc:uses": 0
        };

        return Item.of(toolItem.id)
            .withNBT(newNbt)
            .withCount(1);
    });
});