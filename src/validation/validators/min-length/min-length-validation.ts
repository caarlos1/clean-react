import type { FieldValidation } from '@/validation/protocols'
import { InvalidFieldError } from '@/validation/errors'

export class MinLengthValidation implements FieldValidation {
  constructor(readonly field: string, private readonly minLength: number) {}
  validate(value: string): InvalidFieldError {
    return value.length >= this.minLength ? null : new InvalidFieldError()
  }
}
