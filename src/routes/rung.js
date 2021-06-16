import json from './ladder.json'

export function get(){    
    //let result = LadderArray.filter(r => r[0]==params);
    let result = json
    return {body: result}
}
    

