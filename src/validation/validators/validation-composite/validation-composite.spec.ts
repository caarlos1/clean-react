import { ValidationComposite } from './validation-composite'
import { FieldValidationSpy } from '@/validation/test'
import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationsSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationsSpy = [new FieldValidationSpy(fieldName), new FieldValidationSpy(fieldName)]
  const sut = ValidationComposite.build(fieldValidationsSpy)
  return { sut, fieldValidationsSpy }
}

describe('ValidationComposite', () => {
  test('Should return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut, fieldValidationsSpy } = makeSut(fieldName)
    const errorMessage = faker.lorem.word()

    fieldValidationsSpy[0].error = new Error(errorMessage)
    fieldValidationsSpy[1].error = new Error(faker.lorem.word())

    const error = sut.validate(fieldName, 'any_value')
    expect(error).toBe(errorMessage)
  })

  test('Should return falsy if validation pass', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)
    const error = sut.validate(fieldName, faker.lorem.word())
    expect(error).toBeFalsy()
  })
})
