const ToolTypes = ['axe','hammer',"hoe","javelin","knife","shovel"];
const Material = ['igneous_extrusive', 'igneous_intrusive', 'metamorphic', 'sedimentary'];

PlayerEvents.inventoryChanged(event => {
    let item = event.item;
    if (!item) return;

    if (item.id.toString().match(metalTool)) {
        let nbt = item.nbt || {};
        if (typeof nbt.tfc_uses !== 'number') {
            nbt.tfc_uses = 0;
            item.nbt = nbt;
        }
        if (item.damageValue >= item.maxDamage && nbt.tfc_uses === 1) {
            item.count = 0;
        }
    }
});
ServerEvents.recipes((event) => {
    event.recipes.kubejs.shapeless(
        Item.of('tfc:stone/axe/igneous_extrusive').withName([
            Text.translatable("工具会被修复，而不是变为展示的输出物"),
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
const banItems = [
    'minecraft:nether_star',
    'minecraft:lapis_lazuli',
    'minecraft:emerald',
    'minecraft:copper_ingot'
];
