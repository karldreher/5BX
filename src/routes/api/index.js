import json from '$lib/ladder.json'

export function get(){    
    let result = json
    return {body: result}
}
    