import {RequestStatus} from '../../../types/http';

export const selectRequestStatus = ({requestStatus}: {requestStatus: RequestStatus}): RequestStatus => requestStatus;
