const ToolTypes = ['axe','hammer',"hoe","javelin","knife","shovel"];
const Material = ['igneous_extrusive', 'igneous_intrusive', 'metamorphic', 'sedimentary'];

ServerEvents.recipes((event) => {
    event.recipes.kubejs.shapeless(
        Item.of('tfc:stone/axe/igneous_extrusive').withName([
            Text.translatable("recipes.tfcre.stonetool.burnish"),
        ]),
        [
            "#tfc:stonetools",
            "tfc:straw",
        ]
    ).modifyResult((grid, result) => {
        let toolItem = grid.find(Ingredient.of("#tfc:stonetools"));
        if (toolItem.damageValue === 0) {
            return 'minecraft:air';
        }
        if (!toolItem.damageValue >= toolItem.maxDamage) {
            return 'minecraft:air';
        }
        if (toolItem && toolItem.nbt && toolItem.nbt["tfc:uses"] !== undefined) {
            return 'minecraft:air';
        }
        return Item.of(toolItem).withNBT({ Damage:0,"tfc:uses": parseInt(1) });
    });
});
