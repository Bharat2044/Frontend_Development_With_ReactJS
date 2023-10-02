let isUserPrime = true;
let isUserDiscovery = true;
let isUserAccorn = true;

if(isUserPrime) {
    if(isUserDiscovery) {
        if(isUserAccorn) {
            console.log("Enjoy all prime, discovery and Accorn content");
        }
        else {
            console.log("Enjoy both prime and discovery content");
        }        
    }    
    else if(isUserAccorn) {
        console.log("Enjoy both prime and accorn content");
    }
    else {
        console.log("Enjoy prime content");
    }
}
else {
    console.log("Please buy a subscription to enjoy content");
}