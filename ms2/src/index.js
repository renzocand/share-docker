const app = require('./app');

async function main(){
    await app.listen(3100);
    console.log('puerto 3100 async');
}

main();