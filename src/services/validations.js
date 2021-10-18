const { noteSchema, noteFieldsSchema } = require("../repositories/notesMetadata");

const validationCreator = schema => (obj) =>{
    try{
        schema.validateSync(obj)
    }catch(error){ 
        error.status = 422
        throw error
    }
}
const validateNote = validationCreator(noteSchema)
const validateNoteFields = validationCreator(noteFieldsSchema)

exports.validateNote = validateNote
exports.validateNoteFields = validateNoteFields