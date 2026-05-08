import { faker } from '@faker-js/faker'
import { UserEntity, UserProps } from '../../user.entity'

export function UserDataBuilder(UserProps: Partial<UserProps>): UserProps {
  return {
    name: UserProps.name ?? faker.person.fullName(),
    email: UserProps.email ?? faker.internet.email(),
    password: UserProps.password ?? faker.internet.password(),
    createdAt: UserProps.createdAt,
  }
}
