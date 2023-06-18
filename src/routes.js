const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, getNoteByEditHandler, getNoteByDeleteHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: getNoteByEditHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: getNoteByDeleteHandler,
  },
];

module.exports = routes;
