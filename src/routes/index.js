var express = require('express');
const {getAllNotes, getNote, removeNote, addNote, editNote, getNotesStats} = require('../services/notes');
const {validateNote, validateNoteFields} = require('../services/validations');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.route('/notes')
  .get((req, res) => res.json(getAllNotes()))
  .post((req, res, next ) => {validateNote(req.body); next()},
        (req, res)=> res.status(201).json(addNote(req.body)))

router.get('/notes/stats', (req, res) => res.json(getNotesStats()))

router.route('/notes/:id')
  .get((req, res) => res.json(getNote(req.params.id)))
  .delete((req, res) => {removeNote(req.params.id); res.end()})
  .patch((req, res, next ) => {validateNoteFields(req.body); next()},
         (req, res) => res.json(editNote(req.params.id, req.body)))

module.exports = router
