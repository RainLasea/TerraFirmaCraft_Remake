const ToolTypes = ['axe','hammer',"hoe","javelin","knife","shovel"];
const Material = ['igneous_extrusive', 'igneous_intrusive', 'metamorphic', 'sedimentary'];

ItemEvents.tooltip(event => {
    ToolTypes.forEach(tooltype => {
        Material.forEach(material => {
            const itemId = `tfc:stone/${tooltype}/${material}`;
            
            event.addAdvanced(Item.of(itemId), (item, advanced, text) => {
                let uses = 1;
                if (item.nbt && item.nbt["tfc:uses"] !== undefined) {
                    uses = item.nbt["tfc:uses"];
                }
                text.add(
                    Text.translatable("tip.tfcre.stonetool.burnish")
                        .append(Text.of(`: ${uses}`))
                );
            });
        });
    });
});