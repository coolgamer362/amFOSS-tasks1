const fs= require('fs');
fs.readline('input.txt','utf8',{err,data})=>{
    if (err){
        console.error("Error reading the file",err);
        return;
    }

    fs.writeFile('output.txt',data,(err))=>{
        if (err)
            console.error("Error writin the file",err);
            return;

        }
    });
});
