class Pubsub {

    constructor() {
        this.subscribers = {}; // {'eventName': [cb_subs1, cb_subs2, cb_subs3...]}
    }

    /**
     * 
     * @param event -> It is a string denoting unique event fired 
     * @param callback -> For a subscriber what method should be executed when an event is fired
     */
    subscribe(event, callback) {
        if(!this.subscribers[event]) {
            // Currently no subscriber callback was registered for the event
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);

        return () => this.unsubscribe(event, callback);
    }

    unsubscribe(event, callback) {
        if(!this.subscribers[event]) return;
        this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback );
    }

    /**
     * 
     * @param event -> It is a string denoting unique event fired 
     * @param data -> For the given event what data should be passed along with publishing the event
     */
    publish(event, data) {
        if(!this.subscribers[event]) return;
        this.subscribers[event].forEach(callback => callback(data));
    }
}

// const pb = new Pubsub();

// const ubsubAirforce1 = pb.subscribe('airforce', 
//         (data) => console.log("Subscriber 1 of airforce", data))
// const ubsubAirforce2 = pb.subscribe('airforce', 
//         (data) => console.log("Subscriber 2 of airforce", data))
// const unsubNewBalance1 = pb.subscribe('new balance', 
//         (data) => console.log("Subscriber 1 of new balance", data));
// pb.publish('airforce', {shoeName: 'jordan airforce'});
// pb.publish('new balance', {shoeName: 'something'});
// ubsubAirforce2();
// pb.publish('airforce', {shoeName: 'jordan new shoes'});