function sleep(ms) {
    return new Promise((res, rej) => {
        setTimeout(res, ms);
    });
}

function blockingSleep(ms) {
    let timeNow = new Date().getTime();   // t=0

    // while(new Date().getTime() < timeNow + ms) {
    //     // wait
    // }

    while(true) {
        const y = new Date().getTime() 
        // console.log(y, timeNow, timeNow + ms);
        if(y > timeNow + ms) 
            break;
    }
}

async function process() {
    console.log('Hello!');
    // await sleep(2000);
    blockingSleep(10000);
    console.log('Bye');
}

console.log("Starting");
process();
console.log("Ending");