Platform.setModName("kubejs", "TerraFirmaCraft");

StartupEvents.registry("block", (event) => {
    const blockTypes = ["poor", "normal", "rich"];

    /** @param {String} id @returns {Internal.BlockBuilder_} */
    const aluminumOreBlockBuilder = (id) =>
        event
            .create(id)
            .stoneSoundType()
            .renderType("cutout")
            .hardness(4.5)
            .tagBlock("forge:ores")
            .tagBlock("forge:ores/aluminum")
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("minecraft:needs_stone_tool")
            .tagBlock("tfc:can_collapse")
            .tagBlock("tfc:can_start_collapse")
            .tagBlock("tfc:can_trigger_collapse")
            .tagBlock("tfc:monster_spawns_on")
            .tagBlock("tfc:powderkeg_breaking_blocks")
            .tagBlock("tfc:prospectable")
            .tagBlock("tfc:rock/ores")
            .requiresTool(true);

    /** @param {String} id */
    const commonAluminumOreBlockBuilder = (id) => {
        for (let type of blockTypes) {
            aluminumOreBlockBuilder(`tfc:ore/${type}_${id}/aluminum`)
                .model(`kubejs:block/ore/${type}/${id}_aluminum`)
                .tagBlock(`forge:ores/aluminum/${type}`);
        }
    };

    commonAluminumOreBlockBuilder("granite"); // 花岗岩
    commonAluminumOreBlockBuilder("shale"); // 页岩
    commonAluminumOreBlockBuilder("claystone"); // 黏土岩
    commonAluminumOreBlockBuilder("limestone"); // 石灰岩
    commonAluminumOreBlockBuilder("conglomerate"); // 砾岩
    commonAluminumOreBlockBuilder("dolomite"); // 白云岩
    commonAluminumOreBlockBuilder("chert"); // 硅质岩
    commonAluminumOreBlockBuilder("chalk"); // 白垩岩
});
StartupEvents.modifyCreativeTab('tfc:ores', event => {
    let blockTypes = ["poor", "normal", "rich"];
    let rockTypes = ["granite", "shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"];
    for (let rock of rockTypes) {
        for (let type of blockTypes) {
            event.add(`tfc:ore/${type}_${rock}/aluminum`);
        }
    }
});
StartupEvents.modifyCreativeTab('kubejs:tab', event =>{
    let blockTypes = ["poor", "normal", "rich"];
    let rockTypes = ["granite", "shale", "claystone", "limestone", "conglomerate", "dolomite", "chert", "chalk"];
    for (let rock of rockTypes) {
        for (let type of blockTypes) {
            event.remove([`tfc:ore/${type}_${rock}/aluminum`,'tfcre:farmer_hat','tfcre:hunter_hat']);
        }
    }
})