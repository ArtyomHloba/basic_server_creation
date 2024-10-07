const yup = require('yup');

module.exports.CREATE_USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .min(2)
    .max(50)
    .required()
    .matches(/^[A-Z][a-z]{1,49}$/, 'Name must be starts with capital letter'),
  lastName: yup
    .string()
    .min(2)
    .max(50)
    .required()
    .matches(/^[A-Z][a-z]{1,49}$/, 'Name must be starts with capital letter'),
  email: yup.string().email(),
  tel: yup
    .string()
    .matches(/^\+380\d{9}$/)
    .required(),
});
