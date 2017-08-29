let _events = [];

export function getAllEvents() {
    return new Promise((resolve, reject) => {
        // if(_events && _events.length === 0){
        //     reject('No events present');
        // }
        resolve(_events);
    });
}

export function addEvent(event) {
    return new Promise((resolve, reject) => {
        if(event.title.length <= 3){
            reject('The title must be greater than 3 characters');
            return;
        }

        _events = [..._events, Object.assign({}, event)];

        resolve(event);
    });
}

export function findEventsByDate(date) {
    return new Promise((resolve, reject) => {
        resolve(_events.filter(event => event.date === date));
    });
}