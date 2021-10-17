var express = require('express');
const {getAllNotes, getNote, removeNote, addNote, editNote, getNotesStats} = require('../services/notes');
const {validateNote, validateNoteFields} = require('../services/validations');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.route('/notes')
  .get(getAllNotes)
  .post(validateNote, addNote)

router.get('/notes/stats', getNotesStats)

router.route('/notes/:id')
  .get(getNote)
  .delete(removeNote)
  .patch(validateNoteFields, editNote)

module.exports = router
