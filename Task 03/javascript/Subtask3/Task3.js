const readline= require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter width of diamond:"),(input) => {
    const n =parseInt(Input,10);

    const midd= Math.floor(n/2);

    for(let i=0;i <= mid-1; i >=0;i--){
        console.log(''.repeat(mid-1)+'*'.repeat(2*i+1));
    }
    for(let i=mid-1;i>=0;i--){
        console.log(''.repeat(mid-1)+'*'.repeat(2*i+1));
    }

    rl.close()

});
