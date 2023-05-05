import type { FieldValidation } from '@/validation/protocols'

export class FieldValidationSpy implements FieldValidation {
  error: Error = null
  constructor(readonly field: string) {
    this.field = field
  }

  validate(value: string): Error {
    return this.error
  }
}
