const { noteSchema, noteFieldsSchema } = require("../repositories/notesMetadata");

const validationCreator = schema => (req, res, next) =>{
    try{
        schema.validateSync(req.body)
    }catch(error){ 
        error.status = 422
        throw error
    }
    next()
}
const validateNote = validationCreator(noteSchema)
const validateNoteFields = validationCreator(noteFieldsSchema)

exports.validateNote = validateNote
exports.validateNoteFields = validateNoteFields