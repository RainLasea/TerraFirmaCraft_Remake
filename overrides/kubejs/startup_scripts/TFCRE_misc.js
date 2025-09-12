TFCEvents.birthdays((event) => {
    event.add("november", 8, "Abyss_Lasea");
});

if (global.drunkLevel === undefined) global.drunkLevel = 0;
if (global.drunkStartTime === undefined) global.drunkStartTime = 0;

function getDrunkStage() {
    const level = global.drunkLevel;
    if (level >= 70) return "heavy";
    if (level >= 50) return "medium";
    if (level >= 30) return "light";
    return "none";
}

function addDrunk(amount) {
    global.drunkLevel = Math.min(100, global.drunkLevel + amount);
    global.drunkStartTime = Date.now();
}

ForgeEvents.onEvent("net.minecraftforge.client.event.ViewportEvent$ComputeCameraAngles", event => {
    let level = global.drunkLevel;
    if (level <= 0) return;

    let t = (Date.now() - global.drunkStartTime) / 1000;
    let yaw = event.getYaw();
    let pitch = event.getPitch();

    let minFreq = 0.05;
    let maxFreq = 0.25;
    let frequency = minFreq + (maxFreq - minFreq) * (level / 100);

    let minYawAmp = 1;
    let maxYawAmp = 8;
    let yawAmp = minYawAmp + (maxYawAmp - minYawAmp) * (level / 100);

    let minPitchAmp = 0.5;
    let maxPitchAmp = 4;
    let pitchAmp = minPitchAmp + (maxPitchAmp - minPitchAmp) * (level / 100);

    let yawOffset = JavaMath.sin(t * 2 * JavaMath.PI * frequency) * yawAmp;
    let pitchOffset = JavaMath.cos(t * 2 * JavaMath.PI * frequency) * pitchAmp;

    event.setYaw(yaw + yawOffset);
    event.setPitch(pitch + pitchOffset);
});

ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Finish", event => {
    let entity = event.getEntity();
    if (!entity.isPlayer()) return;

    let item = event.getItem();
    if (item.id === "tfc:ceramic/jug") {
        let nbt = item.getNbt();
        if (nbt && nbt.contains("fluid")) {
            let fluidName = nbt.getCompound("fluid").getString("FluidName");
            if (fluidName === "tfc:beer") {
                addDrunk(10);
            } else if (fluidName === "tfc:whiskey") {
                addDrunk(20);
            }
        }
    }
});