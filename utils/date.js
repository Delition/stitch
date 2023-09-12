import moment from 'moment';
import { POSTED_DATE_FORMAT } from '../constants/date';

export const getPostedDate = (date) => {
    return moment(date).format(POSTED_DATE_FORMAT)
};