# Fivem Subtitles

**Description**: A simple standalone subtitles script 

## Configuration

```lua
Config.UseInteractSound = true
Config.DefaultSpeed = 100
Config.DefaultColor = '#171717'
```

## Options

```lua
exports['subtitles']:write({
    text = {}, -- Text table
    color = '#4E4F54', -- The color of the text (HEX, RGB, Keyword, etc..)
    sound = 'example', -- Optional sound (Won't work if "Config.UseInteractSound" is **false**)
    cooldown = 1500, -- Cooldown between text
    speed = 500, -- Writing speed (ms)
    tts = false -- Text to speech
})
```

## Examples

**Here is a [preview](https://i.imgur.com/pQUqmVf.mp4)**
```lua
exports['subtitles']:write({
    text = { 'You look way too fuckin\' stupid to wash any money', 'Honestly', 'Jesus Christ' },
    color = 'white', -- The color of the text (HEX, RGB, Keyword, etc..)
    sound = 'money_wash', -- Optional sound (Interact-Sound)
    cooldown = 100, -- Cooldown between text
    speed = 75, -- Writing speed (ms)
    tts = false -- Text to speech
})
```

**Here is a [preview](https://i.imgur.com/i8WkacM.mp4)**
```lua
exports['subtitles']:write({
    text = { 'If You Could Erase One Event From History,', 'Which One Would You Erase?' },
    color = 'white', -- The color of the text (HEX, RGB, Keyword, etc..)
    cooldown = 600, -- Cooldown between text
    speed = 50, -- Writing speed (ms)
    tts = true -- Text to speech
})
```
