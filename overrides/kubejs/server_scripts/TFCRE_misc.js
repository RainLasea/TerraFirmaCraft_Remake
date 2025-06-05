const $DoorBlock = Java.loadClass("net.minecraft.world.level.block.DoorBlock");
const $Boolean = Java.loadClass("java.lang.Boolean");
const $DoorHingeSide = Java.loadClass("net.minecraft.world.level.block.state.properties.DoorHingeSide");
const $Direction = Java.loadClass("net.minecraft.core.Direction");

BlockEvents.rightClicked(event => {
    if (event.getHand() != "MAIN_HAND") return;
    if (event.player.isShiftKeyDown()) return;
    let block = event.block;
    let bs = block.blockState;
    if (!(bs.block instanceof $DoorBlock)) return;
    if (block.id == 'minecraft:iron_door' || bs.block.idLocation.namespace == "create") return;
    let open = $DoorBlock.OPEN,
        facing = $DoorBlock.FACING,
        hinge = $DoorBlock.HINGE, neighborBlock;
    if (bs.getValue(hinge) == $DoorHingeSide.LEFT) {
        if (bs.getValue(facing) == $Direction.SOUTH) neighborBlock = block.west;
        else if (bs.getValue(facing) == $Direction.WEST) neighborBlock = block.north;
        else if (bs.getValue(facing) == $Direction.NORTH) neighborBlock = block.east;
        else if (bs.getValue(facing) == $Direction.EAST) neighborBlock = block.south;

    } else {
        if (bs.getValue(facing) == $Direction.SOUTH) neighborBlock = block.east;
        else if (bs.getValue(facing) == $Direction.WEST) neighborBlock = block.south;
        else if (bs.getValue(facing) == $Direction.NORTH) neighborBlock = block.west;
        else if (bs.getValue(facing) == $Direction.EAST) neighborBlock = block.north;
    }
    if (neighborBlock.id == block.id && neighborBlock.blockState.getValue(hinge) != bs.getValue(hinge)) {
        neighborBlock.setBlockState(neighborBlock.blockState.setValue(open, !bs.getValue(open) ? $Boolean.TRUE : $Boolean.FALSE), 3)
    }
})

PlayerEvents.advancement(event => {
    let { player, advancement } = event;
    if (advancement === 'tfcre:root') {
        if (!player.tags.contains('first_night_passed')) {
            player.tags.add('first_night_passed');
        }
    }
});
PlayerEvents.loggedIn(event=>{
    let player = event.player;
    if(!player.stages.has("oneInGame")){
        player.tell(Text.translatable("script.tfcre.firsttip"))
        player.stages.add("oneInGame")
    }
})
PlayerEvents.tick((event) => {
  let { player } = event;

  let blockConversions = {
    "tfc:grass/silt":"tfc:dirt/silt",
    "tfc:clay_grass/silt":"tfc:clay/silt",
    "tfc:grass/loam": "tfc:dirt/loam",
    "tfc:clay_grass/loam":"tfc:clay/loam",
    "tfc:grass/sandy_loam": "tfc:dirt/sandy_loam",
    "tfc:clay_grass/sandy_loam":"tfc:clay/sandy_loam",
    "tfc:grass/silty_loam":"tfc:dirt/silty_loam",
    "tfc:clay_grass/silty_loam":"tfc:clay/silty_loam",
    "tfc:peat_grass":"tfc:peat",
    "tfc:kaolin_clay_grass":"tfc:red_kaolin_clay"
  };

  let blockBelow = player.block.down.id;
  
  if (player.fallDistance > 1 && blockConversions[blockBelow]) {
    if (Math.random() < 0.03) {
      player.block.down.set(blockConversions[blockBelow]);
    }
  }
});

PlayerEvents.tick(event => {
    const { player, level } = event;
    if (!player) return;

    const data = player.getPersistentData();
    let timer = data.getInt("particleTimer") || 0;
    timer++;

    if (timer >= 5) {
        timer = 0;

        const mainIsTorch = player.getMainHandItem().is("tfc:torch");
        const offIsTorch  = player.getOffHandItem().is("tfc:torch");

        if (mainIsTorch) {
            spawnFlameParticleAtOffset(player, level, -0.4);
        }
        if (offIsTorch) {
            spawnFlameParticleAtOffset(player, level, 0.4);
        }
    }
    data.putInt("particleTimer", timer);

    const mainItem = player.getMainHandItem();
    const offItem  = player.getOffHandItem();
    const fluid    = player.getEyeInFluidType();
    let fluidName  = "";

    if (fluid && typeof fluid.getDescriptionId === "function") {
        fluidName = fluid.getDescriptionId();
    }

    const isInWater =
        fluidName.includes("block.minecraft.water");
        // fluidName.includes("block.tfc.spring_water") ||
        // fluidName.includes("block.tfc.salt_water");

    let extinguished = false;

    if (isInWater && mainItem.is("tfc:torch")) {
        const countMain = mainItem.count;
        player.setMainHandItem(Item.of("tfc:dead_torch").withCount(countMain));
        extinguished = true;
    }

    if (isInWater && offItem.is("tfc:torch")) {
        const countOff = offItem.count;
        player.setOffHandItem(Item.of("tfc:dead_torch").withCount(countOff));

        extinguished = true;
    }
});

function spawnFlameParticleAtOffset(player, level, sideOffset) {
    let yawRad = player.yBodyRot * (JavaMath.PI / 180);

    let forwardX = -Math.sin(yawRad);
    let forwardZ =  Math.cos(yawRad);
    let rightX   =  Math.cos(yawRad);
    let rightZ   =  Math.sin(yawRad);

    let forwardOffset  = 0.37;
    let verticalOffset = -0.55;

    let px = player.x + forwardX * forwardOffset + rightX * sideOffset;
    let py = player.eyeY + verticalOffset;
    let pz = player.z + forwardZ * forwardOffset + rightZ * sideOffset;

    level.spawnParticles(
        'minecraft:flame',
        false,
        px,
        py,
        pz,
        1,
        0.05,
        0.02,
        0.05,
        0.005
    );
}