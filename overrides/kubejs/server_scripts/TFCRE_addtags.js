ServerEvents.tags("item", function(event) {
    var rocks = [
        "chalk", "chert", "claystone", "conglomerate",
        "dolomite", "granite", "limestone", "shale"
    ];

    function createOreList(grade) {
        var list = [];
        for (var i = 0; i < rocks.length; i++) {
            list.push("tfc:ore/" + grade + "_" + rocks[i] + "/aluminum");
        }
        return list;
    }

    var normalAluminums = createOreList("normal");
    var poorAluminums = createOreList("poor");
    var richAluminums = createOreList("rich");

    var allAluminums = normalAluminums.concat(poorAluminums).concat(richAluminums);

    event.add("forge:ores", allAluminums);
    event.add("tfc:ores/aluminum", allAluminums);
    event.add("tfc:ores/aluminum/normal", normalAluminums);
    event.add("tfc:ores/aluminum/poor", poorAluminums);
    event.add("tfc:ores/aluminum/rich", richAluminums);

    var toolHeads = ['pickaxe_head','propick_head','axe_head','shovel_head','hoe_head','chisel_head','hammer_head'];
    var toolHeadPattern = toolHeads.join('|');

    event.add('tfc:metal/toolhead', new RegExp("^tfc:metal/(" + toolHeadPattern + ")/.+$"));
    event.add('tfc:stone/toolhead', new RegExp("^tfc:stone/(" + toolHeadPattern + ")/.+$"));

    var stoneTools = ['pickaxe','propick','axe','shovel','hoe','chisel','hammer'];
    event.add('tfc:stonetools', new RegExp("^tfc:stone/(" + stoneTools.join('|') + ")/.+$"));

    var fuelTags = [
        "tfc:log_pile_logs",
        "tfc:firepit_fuel",
        "tfc:firepit_logs",
        "tfc:pit_kiln_logs",
        "firmalife:oven_fuel",
        "firmalife:smoking_fuel"
    ];
    for (var j = 0; j < fuelTags.length; j++) {
        var tag = fuelTags[j];
        event.removeAll(tag);
        event.add(tag, 'tfc:firewood');
    }
});
