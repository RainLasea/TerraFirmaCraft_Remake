Ponder.registry((event) => {
    event
        .create("tfc:ceramic/unfired_jug")
        .scene("kubejs:pit_kiln", "Pit Kiln", "kubejs:pit_kiln", (scene, util) => {
            for (let x = 0; x < 3; x++) {
                for (let z = 0; z < 3; z++) {
                    scene.world.showSection([x, 0, z], Facing.DOWN);
                }
                scene.idle(3);
            };
            for (let z = 0; z < 3; z++) { 
                for (let x = 0; x < 3; x++) { 
                    scene.world.showSection([x, 1, z], Facing.DOWN);
                }
                scene.idle(2);
            };
            for (let x = 0; x < 5; x++) { 
                for (let z = 0; z < 5; z++) { 
                    scene.world.showSection([x, 2, z], Facing.DOWN);
                }
                scene.idle(1);
            };
            scene.world.setBlocks([1, 2, 1], "tfc:placed_item");
            scene.text(30, "Press\u0027§aV§r\u0027to place the item", [1, 2.5, 1]).colored(PonderPalette.MEDIUM);
            scene.world.modifyTileNBT([1, 2, 1], (nbt) => {
                nbt.inventory = {
                    Size: 4,
                    Items: [
                        {
                            Slot: 0,
                            id: "tfc:straw",
                            Count: 1
                        }
                    ]
                }
            });
            scene.idle(6);
            scene.world.modifyTileNBT([1, 2, 1], (nbt) => {
                nbt.inventory = {
                    Size: 4,
                    Items: [
                        {
                            Slot: 0,
                            id: "tfc:straw",
                            Count: 1
                        },
                        {
                            Slot: 1,
                            id: "tfc:straw",
                            Count: 1
                        }
                    ]
                }
            });
            scene.idle(4);
            scene.world.modifyTileNBT([1, 2, 1], (nbt) => {
                nbt.inventory = {
                    Size: 4,
                    Items: [
                        {
                            Slot: 0,
                            id: "tfc:straw",
                            Count: 1
                        },
                        {
                            Slot: 1,
                            id: "tfc:straw",
                            Count: 1
                        },
                        {
                            Slot: 2,
                            id: "tfc:straw",
                            Count: 1
                        }
                    ]
                }
            });
            scene.idle(2);
            scene.world.modifyTileNBT([1, 2, 1], (nbt) => {
                nbt.inventory = {
                    Size: 4,
                    Items: [
                        {
                            Slot: 0,
                            id: "tfc:straw",
                            Count: 1
                        },
                        {
                            Slot: 1,
                            id: "tfc:straw",
                            Count: 1
                        },
                        {
                            Slot: 2,
                            id: "tfc:straw",
                            Count: 1
                        },
                        {
                            Slot: 3,
                            id: "tfc:straw",
                            Count: 1
                        }
                    ]
                }
            });
            scene.idle(35);
            scene.addLazyKeyframe()
            scene.world.setBlocks([1, 2, 1], "minecraft:air");
            scene.idle(3);
            scene.world.setBlocks([1, 1, 1], "minecraft:air");
            scene.idle(6);
            scene.world.hideSection([0, 0, 0, 1, 1, 0], Facing.NORTH);
            scene.idle(12);
            scene.world.setBlocks([1, 1, 1], "tfc:placed_item");
            scene.world.modifyTileNBT([1, 1, 1], (nbt) => {
                nbt.inventory = {
                    Size: 4,
                    Items: [
                        {
                            Slot: 0,
                            id: "tfc:ceramic/unfired_jug",
                            Count: 1
                        },
                        {
                            Slot: 1,
                            id: "tfc:ceramic/unfired_jug",
                            Count: 1
                        },
                        {
                            Slot: 2,
                            id: "tfc:ceramic/unfired_jug",
                            Count: 1
                        },
                        {
                            Slot: 3,
                            id: "tfc:ceramic/unfired_jug",
                            Count: 1
                        }
                    ]
                }
            });
            scene.idle(12);
            scene.showControls(30, [1, 1, 1], "left")
            .rightClick()
            .withItem("tfc:straw")
            scene.world.setBlocks([1, 1, 1],"tfc:pit_kiln");
            scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("stage", "7"), false);
            scene.idle(36);
            scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("stage", "11"), false);
            scene.idle(4);
            scene.showControls(30, [1, 1, 1], "left")
            .rightClick()
            .withItem("tfc:wood/log/oak")
            scene.idle(4);
            scene.world.modifyBlock([1, 1, 1], (curState) => curState.with("stage", "15"), false);
            scene.idle(46);
            scene.showControls(30, [1, 2, 1], "left")
            .rightClick()
            .withItem("minecraft:flint_and_steel")
            scene.idle(4);
            scene.world.setBlocks([1, 2, 1], "minecraft:fire");
            scene.idle(40);
        });
});
