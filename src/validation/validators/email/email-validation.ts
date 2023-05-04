import { InvalidFieldError } from '@/validation/errors'
import type { FieldValidation } from '@/validation/protocols'

export class EmailValidation implements FieldValidation {
  constructor(readonly field: string) {}
  validate(value: string): InvalidFieldError {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return value.match(emailRegex) ? null : new InvalidFieldError()
  }
}
