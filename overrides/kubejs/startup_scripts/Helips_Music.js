//350 277 231 344 272 233 351 203 275 346 230 257 344 270 272 344 275 240 346 211 276 347 232 204 351 237 263 344 271 220
//346 210 221 345 276 210 345 226 234 346 254 242 350 277 231 344 272 233 345 256 203 344 273 254 345 276 210 345 245 275 345 220 254
//345 245 275 345 245 275 344 272 253 345 217 227 345 220 247 344 272 262 347 210 261 347 232 204
StartupEvents.registry("sound_event",event =>{
    event.create("tfcre:music.again")
})
StartupEvents.registry("item",event =>{
    event.create("tfcre:music_disc_again","music_disc")
    .texture("kubejs:item/music_disc_again")
    .song("tfcre:music.again",35)
    .tag("music_discs")
})