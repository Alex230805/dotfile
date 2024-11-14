
import { as } from "./asound.mjs";


function user_agent(){
    if(as.set == 0){
        as.set = 1;
        console.log('change to 1');
    }else{
        as.set = 0;
        console.log('change to 0');
    }
    return;
}

user_agent();

