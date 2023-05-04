import { ValidationComposite } from './validation-composite'
import { ValidationSpy } from '../test/mock-field-validation'

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const validationSpy = new ValidationSpy('any_field')
    const validationSpy2 = new ValidationSpy('any_field')

    validationSpy2.error = new Error('any_error')
    const sut = new ValidationComposite([validationSpy, validationSpy2])
    const error = sut.validate('any_field', 'any_value')

    expect(error).toBe('any_error')
  })
})