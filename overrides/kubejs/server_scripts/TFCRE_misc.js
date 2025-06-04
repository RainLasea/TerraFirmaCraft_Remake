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

let activeParticles = 0;

PlayerEvents.tick(event => {
    const { player, level, server } = event;
    if (!player) return;

    const mainIsTorch = player.getMainHandItem().is("minecraft:torch");
    const offIsTorch = player.getOffHandItem().is("minecraft:torch");

    if (activeParticles >= 1) return;
    if (!mainIsTorch && !offIsTorch) return;

    const yawDeg = player.yBodyRot;
    const yawRad = yawDeg * (JavaMath.PI / 180);

    const forwardX = -Math.sin(yawRad);
    const forwardZ = Math.cos(yawRad);

    const rightX = Math.cos(yawRad);
    const rightZ = Math.sin(yawRad);

    const forwardOffset = 0.37;
    const sideOffset = -0.4;
    const verticalOffset = -0.55;

    const px = player.x + forwardX * forwardOffset + rightX * sideOffset;
    const py = player.eyeY + verticalOffset;
    const pz = player.z + forwardZ * forwardOffset + rightZ * sideOffset;
    level.spawnParticles(
        'minecraft:lava',
        false,
        px, py, pz,
        1,
        0.05, 0.02, 0.05,
        0.005
    );

    activeParticles++;

    server.scheduleInTicks(20, () => {
        activeParticles = Math.max(0, activeParticles - 1);
    });
});