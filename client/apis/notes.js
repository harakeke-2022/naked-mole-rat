import request from 'superagent'

const rootUrl = '/api/v1/add'

export function postNote(note) {
  return request
    .post(rootUrl)
    .send(note)
}
// the data enters from router (backend) and we access it through fetchNotes function
// this returns the notes data from res.body

export function fetchNotes() {
  return request
    .get('/api/v1/list')
    .then(res => {
      return res.body
    })
}
