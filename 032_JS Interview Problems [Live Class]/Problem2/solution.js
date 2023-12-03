function setCancellableTimeout(cb, delay) {
    const timerId = setTimeout(cb, delay);

    return () => {
        clearTimeout(timerId);
    }    
}

function setCancellableTimeout2(cb, delay) {
    let flag = true;
    
    setTimeout(() => {
        if(!flag) {
            return;
        }
        cb();
    }, delay);

    return () => {
        flag = false; 
    }    
}


setCancellableTimeout2(() => {
    console.log("Hi");
}, 3000);
