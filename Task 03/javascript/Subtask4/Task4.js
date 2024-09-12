const fs = require('fs')
fs.readFile("input.txt","utf8",(err,data)=> {
    if (err){
        console.error("Error reading the file",err);
        return;

    }
    
    const n= parseInt(data.trim(),10);

    const mid= Math.floor(n/2);
    let result='';

    for(let i=0;i <=mid;i++){
        result+=' '.repeat(mid-1)+'*'.repeat(2*i+1)+'\n';

    }
    
    for(let i=mid-1;i >=0;i--){
        result+=' '.repeat(mid-i)+'*'.repeat(2*i+1)+'\n';

    }

    fs.writeFIle("output.txt",result,(err) => {
        if (err){
            console.error("Error writing the file",err);
            return;
        }
    });
});
