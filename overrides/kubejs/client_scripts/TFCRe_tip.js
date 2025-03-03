const ToolTypes = ['axe','hammer',"hoe","javelin","knife","shovel"];
const Material = ['igneous_extrusive', 'igneous_intrusive', 'metamorphic', 'sedimentary'];

ItemEvents.tooltip(event => {
  ToolTypes.forEach(tooltypes =>{
    Material.forEach(material =>{
      event.add(Item.of(`tfc:stone/${tooltypes}/${material}`),
      Text.translatable("tip.tfcre.stonetool.burnish"))
    })
  })
})