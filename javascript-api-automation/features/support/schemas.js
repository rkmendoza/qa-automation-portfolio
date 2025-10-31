// Schemas para validación JSON con Joi-like structure
export const bookingSchema = {
  firstname: (value) => typeof value === 'string' && value.length > 0,
  lastname: (value) => typeof value === 'string' && value.length > 0,
  totalprice: (value) => typeof value === 'number' && value >= 0,
  depositpaid: (value) => typeof value === 'boolean',
  bookingdates: {
    checkin: (value) => /^\d{4}-\d{2}-\d{2}$/.test(value),
    checkout: (value) => /^\d{4}-\d{2}-\d{2}$/.test(value)
  },
  additionalneeds: (value) => typeof value === 'string'
};

export const authSchema = {
  token: (value) => typeof value === 'string' && value.length > 0
};