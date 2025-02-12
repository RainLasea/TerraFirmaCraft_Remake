TFCEvents.data((event) => {
    event.itemSize("tfc:ore/poor_aluminum", "small", "medium");
    event.itemSize("tfc:ore/normal_aluminum", "small", "medium");
    event.itemSize("tfc:ore/rich_aluminum", "small", "medium");
});
//箭头
ServerEvents.recipes(event => {
    let patterns = [
        ['XX XX', 'X  X ', '     ', 'XX XX', 'X  X '],
        ['XX XX', ' X  X', '     ', 'XX XX', ' X  X'],
        ['X  X ', 'XX XX', '     ', 'X  X ', 'XX XX'],
        [' X  X', 'XX XX', '     ', ' X  X', 'XX XX']
    ];
    patterns.forEach(pattern => {
        event.recipes.tfc.knapping('4x tfc:stone/arrow_hand', 'tfc:rock', pattern)
            .outsideSlotRequired(false);
    });
});