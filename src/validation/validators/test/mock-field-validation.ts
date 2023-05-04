import type { FieldValidation } from '@/validation/protocols'

export class ValidationSpy implements FieldValidation {
  error: Error = null
  constructor(readonly field: string) {
    this.field = field
  }

  validate(value: string): Error {
    return this.error
  }
}
