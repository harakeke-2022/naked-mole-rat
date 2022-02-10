import request from 'superagent'

const rootUrl = '/api/v1/add'

export function postNote (note) {
  return request
    .post(rootUrl)
    .send(note)
}
