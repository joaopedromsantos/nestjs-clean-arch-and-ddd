import { faker } from '@faker-js/faker'
import { UserEntity, UserProps } from '../../user.entity'
import { UserDataBuilder } from '../../testing/factories/user-factory'

describe('UserEntity Unit Tests', () => {
  let userProps: UserProps
  let sut: UserEntity

  beforeEach(() => {
    jest.clearAllMocks()

    userProps = UserDataBuilder({})

    sut = new UserEntity(userProps)
  })

  it('Constructor method should initialize properties correctly', () => {
    expect(sut.props.name).toBe(userProps.name)
    expect(sut.props.email).toBe(userProps.email)
    expect(sut.props.password).toBe(userProps.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('Getter of name field should return the correct value', () => {
    expect(sut.name).toBeDefined()
    expect(sut.name).toBe(userProps.name)
    expect(typeof sut.name).toBe('string')
  })

  it('Getter of email field should return the correct value', () => {
    expect(sut.email).toBeDefined()
    expect(sut.email).toBe(userProps.email)
    expect(typeof sut.email).toBe('string')
  })

  it('Getter of password field should return the correct value', () => {
    expect(sut.password).toBeDefined()
    expect(sut.password).toBe(userProps.password)
    expect(typeof sut.password).toBe('string')
  })

  it('Getter of createdAt field should return the correct value', () => {
    expect(sut.createdAt).toBeDefined()
    expect(sut.createdAt).toBeInstanceOf(Date)
  })
})
