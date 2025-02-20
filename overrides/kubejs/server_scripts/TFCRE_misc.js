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