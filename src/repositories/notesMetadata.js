const yup = require("yup")

const CATEGORIES_QUANTITY = 4

const isStrIsoDate = {
    name:"isIsoDate",
    message: "${path} is not ISO Date",
    test: value => /^\d{4}-\d\d-\d\d$/.test(value) && !isNaN(Date.parse(value))
}

const noteFieldsSchema = yup.object().shape({
    name:yup.string(),
    category:yup.number().integer().moreThan(-1).lessThan(CATEGORIES_QUANTITY),
    content:yup.string(),
    archived:yup.bool()
}).strict().noUnknown()

const noteSchema = yup.object().shape({
    name:yup.string().required(),
    category:yup.number().required().integer().moreThan(-1).lessThan(CATEGORIES_QUANTITY),
    content:yup.string(),
    created:yup.string().required().test(isStrIsoDate),
    archived:yup.bool().required()
}).strict().noUnknown()


exports.CATEGORIES_QUANTITY = CATEGORIES_QUANTITY
exports.noteSchema = noteSchema
exports.noteFieldsSchema = noteFieldsSchema