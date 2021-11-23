import * as moment from 'moment';

export class DateHelper {
    static initiateTimeFromDate(dateInput: Date | moment.Moment) {
        let date = moment(dateInput)
        date.hours(0)
        date.minutes(0)
        date.seconds(0)
        date.milliseconds(0)
        return date.toDate()
      }
}