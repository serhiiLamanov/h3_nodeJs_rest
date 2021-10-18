const { noteSchema, noteFieldsSchema } = require("../repositories/notesMetadata");

const validateNote = obj => noteSchema.validateSync(obj)
const validateNoteFields =  obj => noteFieldsSchema.validateSync(obj)

exports.validateNote = validateNote
exports.validateNoteFields = validateNoteFields