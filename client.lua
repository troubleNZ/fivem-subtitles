local function writeText(options)
    if Config.UseInteractSound and options.sound then   
        TriggerServerEvent('InteractSound_SV:PlayOnSource', options.sound, 0.2)
    end
    
    SendNUIMessage({
        action = 'open',
        text = options.text,
        cooldown = tonumber(options.cooldown) or 1000,
        color = options.color or Config.DefaultColor,
        speed = tonumber(options.speed) or Config.DefaultSpeed,
        tts = options.tts
    })
end

exports('write', writeText)
