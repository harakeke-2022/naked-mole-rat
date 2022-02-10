import request from 'superagent'
// the data enters from router (backend) and we access it through fetchNotes function
const rootUrl = '/api/v1'
// this returns the notes data from res.body
export function fetchNotes () {
  return request
    .get(rootUrl + '/list')
    .then(res => {
      return res.body
    })
}
