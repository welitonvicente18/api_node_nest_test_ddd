import { Entity } from '@/src/shared/domain/entities/entity'

export type UserProps = {
    name: string
    email: string
    password: string
    createdAt?: Date
}

export class UserEntity extends Entity<UserProps> {
    constructor(
        public readonly props: UserProps,
        id?: string,
    ) {
        super(props, id)
        this.props.createdAt = this.props.createdAt ?? new Date()
    }

    update(value: string) {
        this.props.name = value
    }

    updatePassword(value: string) {
        this.props.password = value
    }

    get name() {
        return this.props.name
    }

    set name(value: string) {
        this.props.name = value
    }

    get email() {
        return this.props.email
    }

    get password() {
        return this.props.password
    }

    set password(password: string) {
        this.props.password = password
    }

    get createdAt() {
        return this.props.createdAt
    }
}
