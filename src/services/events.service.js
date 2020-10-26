import BaseHttpService from './base-http.service';
import queryString from 'query-string';

export default class EventsService extends BaseHttpService {
  fetchEvent({ status, search }) {
    console.log('fetchevent')
    const queryObj = {};

    if (status.length) {
      queryObj.status = status;
    }

    if (search.length) {
      queryObj.search = search;
    }

    const queryStr = queryString.stringify(queryObj);
    return this.get('event' + (queryStr ? `?${queryStr}` : ''));
  }

  async deleteEvent(id) {
    await this.delete(`tasks/${id}`);
  }

  updateEvent(id, status) {
    return this.patch(`tasks/${id}/status`, { status });
  }

  createEvent(title, description) {
    return this.post(`tasks`, { title, description });
  }
}
