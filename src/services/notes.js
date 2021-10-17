const  mock = require("../repositories/mockNotes")
const {CATEGORIES_QUANTITY} = require("../repositories/notesMetadata")

function getAllNotes(req, res){
    res.json(mock.notes)
}

function getNote(req, res){
    res.json(mock.getNote(req.params.id))
}

function removeNote(req, res){
    mock.removeNote(req.params.id)
    res.end()
}

function addNote(req, res){
    const newNote = mock.addNote(req.body)
    res.status(201).json(newNote)
}

function editNote(req, res){
    res.json(mock.editNote(req.params.id, req.body))
}


function getNotesStats(req, res){
    const A = new Array(CATEGORIES_QUANTITY)
    for(let i=0; i<A.length; i++){
        A[i] = {active:0, archived:0}
    }

    res.json(mock.notes.reduce((acc, curr) => ++acc[curr.category][curr.archived ? "archived" : "active"] && acc, A))
}

exports.getAllNotes = getAllNotes
exports.getNote = getNote
exports.removeNote = removeNote
exports.addNote = addNote
exports.editNote = editNote
exports.getNotesStats = getNotesStats