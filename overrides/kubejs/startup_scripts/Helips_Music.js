//124 150 145 040 167 157 162 154 144 040 150 141 163 040 142 145 145 156 040 144 145 163 145 162 164 145 144 040 146 157 162 040 141 040 167 150 151 154 145
//101 162 145 040 171 157 165 040 164 162 171 151 156 147 040 164 157 040 147 151 166 145 040 165 160 054 040 144 145 141 162 077
StartupEvents.registry("sound_event",event =>{
    event.create("tfcre:music.again")
})
StartupEvents.registry("item",event =>{
    event.create("tfcre:music_disc_again","music_disc")
    .texture("kubejs:item/music_disc_again")
    .song("tfcre:music.again",35)
    .tag("music_discs")
})