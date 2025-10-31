export class SchemaValidator {
  static validate(schema, data, path = '') {
    const errors = [];

    for (const [key, validator] of Object.entries(schema)) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (typeof validator === 'object' && !(validator instanceof Function)) {
        // Sub-schema
        if (data[key] === undefined) {
          errors.push(`Campo faltante: ${currentPath}`);
        } else {
          errors.push(...this.validate(validator, data[key], currentPath));
        }
      } else if (validator instanceof Function) {
        // Validator function
        if (data[key] === undefined) {
          errors.push(`Campo faltante: ${currentPath}`);
        } else if (!validator(data[key])) {
          errors.push(`Validación fallida: ${currentPath} = ${data[key]}`);
        }
      }
    }

    return errors;
  }

  static assertSchema(schema, data) {
    const errors = this.validate(schema, data);
    if (errors.length > 0) {
      throw new Error(`Schema validation failed:\n${errors.join('\n')}`);
    }
  }
}