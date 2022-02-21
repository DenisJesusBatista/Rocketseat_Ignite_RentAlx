import {v4 as uuidv4 } from 'uuid'

class Specification {
    id?: string;
    name
    description: string;
    created_at: Data;

    constructor(){
        if(!this.id){
            this.id == uuidv4();
        }
    }

}

export { Specification }