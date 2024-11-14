
import { exec } from 'child_process';



class asound{

    status = 0;
    set = 0;

    constructor(){}

    asound_daemon(){
        if(this.set == 1){
            this.status = this.change_sound();
            this.set = 0;
        }
    
    
    }
    
    
    async change_sound(){
        if(this.status == 0){
           await exec('amixer sset Front unmute', (err, stdout, stderr)=>{
                if(stderr || err){
                    console.log('error while changing volume');
                }
           });
           return this.status = 1;
        }
        if(this.status == 1){
            await exec('amixer sset Front mute', (err, stdout, stderr)=>{
                if(stderr || err){
                    console.log('error while changing volume');
                }
           });
           return this.status = 0;
        }
    }
    
    get_set(){
        return set;
    }
    
    
    load_set(new_set){
        set = new_set;
    }
    
}

let as = new asound();


setInterval(as.asound_daemon, 100);

export {as};