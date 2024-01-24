import moment from 'moment'

export class Moment {
    static getCurrent(){
        return moment().format().replace("T", " ").split("+")[0]; 
    }
}