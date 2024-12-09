import Joi from "joi";

const updateSchema = Joi.object({
  firstName: Joi.string()

    .trim()
    .messages({ "string.empty": "first name is required" }),
  lastName: Joi.string()

    .trim()
    .messages({ "string.empty": "last name is required" }),

  email: Joi.string().email({ tlds: false }).messages({
    "string.empty": "email address is required",
    "string.email": "invalid email address",
  }),

  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)

    .messages({
      "string.empty": "phone number is required",
      "string.pattern.base": "invalid phone number",
    }),

  address: Joi.string(),
  driverLicense: Joi.string(),
  password: Joi.string()
    .required()
    .pattern(/^[0-9a-zA-Z]{6,}$/) //อย่างต่ำ6ตัว ไม่จำกัดจำนวน
    .messages({
      "any.required": "password is required",
      "string.pattern.base":
        "password must be at least 6 characters and contain only alphabets and numbers",
    }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.required": "confirm password is required",
    "any.only": "password and confirm password do not match",
  }),
});

const validateUpdate = (input) => {
  const { error } = updateSchema.validate(input, { abortEarly: false });

  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});

    console.dir(error);
    return result;
  }
};

export default validateUpdate;
