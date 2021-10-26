import { FormattedContent } from '../types.d';
/* eslint-disable-next-line import/named */
import { Appointment as dxSchedulerAppointment } from '../../../../../ui/scheduler';

export const defaultGetTextAndFormatDate = (): FormattedContent => ({ text: '', formatDate: '' });
export const defaultGetSingleAppointment = (): dxSchedulerAppointment => ({});
