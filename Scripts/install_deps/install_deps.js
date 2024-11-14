const fs = require("fs");
const { exec } = require("child_process");


async function install_deps(){
    if(process.argv.lenght === 2){
        console.log("argument required!");
        return;
    }
    let path = process.argv[2];
    let json = fs.readFileSync(path, {encodind: 'UTF-8'}, (err,data)=>{
        if(err){
            console.log(err);
            return;
        }
    });

    let json_ps = JSON.stringify(JSON.parse(json)?.dependencies);
    if(json_ps != null){
        parser(json_ps);
    }
    json_ps = JSON.stringify(JSON.parse(json)?.devDependencies);
    if(json_ps != null){
        parser(json_ps);
    }
}


async function parser(json_ps){
    json_ps = json_ps.split(",");
    console.log(json_ps);

    for(let i=0;i,json_ps.length;i++){
        try{
            let phrase = json_ps[i]?.split(':');
            phrase = phrase[0]?.toString()+"@"+phrase[1]?.toString();
            let package = "";
    
            for(let z=0;z<phrase.length;z++){
                if(!(phrase[z] == "{" || phrase[z] == "}" || phrase[z] == '"' || phrase[z] == '^' || phrase[z] == '~')){
                    package += phrase[z];
                }
            }
            await exec("npm install "+package, (error,stdout,stderr) =>{
                if(error){
                    console.log('error: '+error);
                }
                if(stderr){
                    console.log('stderr: '+stderr);
                }
                console.log(stdout);
            });
        }catch(error){
            return;
        }
    }

}


install_deps();