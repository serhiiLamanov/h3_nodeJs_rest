const  mock = require("../repositories/mockNotes")
const {CATEGORIES_QUANTITY} = require("../repositories/notesMetadata")

function getAllNotes(){
    return (mock.notes)
}

function getNote(id){
    return mock.getNote(id)
}

function removeNote(id){
    mock.removeNote(id)
}

function addNote(note){
    return mock.addNote(note)
}

function editNote(id, note){
    return mock.editNote(id, note)
}


function getNotesStats(){
    const A = new Array(CATEGORIES_QUANTITY)
    for(let i=0; i<A.length; i++){
        A[i] = {active:0, archived:0}
    }

    return mock.notes.reduce((acc, curr) => ++acc[curr.category][curr.archived ? "archived" : "active"] && acc, A)
}

exports.getAllNotes = getAllNotes
exports.getNote = getNote
exports.removeNote = removeNote
exports.addNote = addNote
exports.editNote = editNote
exports.getNotesStats = getNotesStats