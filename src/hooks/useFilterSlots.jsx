export function useFilterSlots(categorySlots, startTime){
    let filtredSlots = []
    categorySlots.forEach(device=>{
        device.slots.forEach(slot=>{
            if(slot.start_time === startTime){
                filtredSlots.push({
                    name: device.name,
                    time: slot.start_time.slice(0, -3) + '-' + slot.end_time.slice(0, -3),
                    id: device.id
                })
            }
        })
    })
    return filtredSlots
}