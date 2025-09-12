let time = 0;

ClientEvents.tick(event => {
    if (global.applied) {

        if (time === 0) {
            VisualJS.applyEffect("blink", true);
            VisualJS.setUniform(0, "BlinkIntensity", [1.0]);
        }

        time += 0.16;
        let intensity = Math.max(0.0, 1.0 - time * 0.05);
        VisualJS.setUniform(0, "BlinkIntensity", [intensity]);

        if (intensity <= 0.05) {
            VisualJS.clearEffect();
            global.applied = false;
            time = 0;
        }
    }
});

ClientEvents.loggedOut(event => {
    VisualJS.clearEffect();
    global.applied = false;
    time = 0;
});
