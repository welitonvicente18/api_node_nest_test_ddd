import { UserEntity, UserProps } from '@/src/users/domain/entities/user.entity'
import { UserDataBuilder } from '@/src/users/testing/helpers/user-data-builder'

describe('UserEntity unit test', () => {
    let props: UserProps
    let sut: UserEntity

    beforeEach(() => {
        props = UserDataBuilder({})
        sut = new UserEntity(props)
    })

    it('Constructor method ', () => {
        expect(sut.props.name).toBe(props.name)
        expect(sut.props.email).toBe(props.email)
        expect(sut.props.password).toBe(props.password)
        expect(sut.props.createdAt).toBeInstanceOf(Date)
    })

    it('Should Gets name defined', () => {
        expect(sut.name).toBeDefined()
        expect(sut.name).toEqual(props.name)
        expect(typeof sut.props.name).toBe('string')
    })

    it('Should Set name defined', () => {
        sut['name'] = 'name any'
        expect(sut.props.name).toEqual('name any')
        expect(typeof sut.props.name).toBe('string')
    })

    it('Should Gets email defined', () => {
        expect(sut.email).toBeDefined()
        expect(sut.email).toEqual(props.email)
        expect(typeof sut.props.email).toBe('string')
    })

    it('Should Gets password defined', () => {
        expect(sut.password).toBeDefined()
        expect(sut.password).toEqual(props.password)
        expect(typeof sut.props.password).toBe('string')
    })

    it('Should Set password defined', () => {
        sut['password'] = 'password_any'
        expect(sut.props.password).toEqual('password_any')
        expect(typeof sut.props.password).toBe('string')
    })

    it('Should Gets createdAt defined', () => {
        expect(sut.createdAt).toBeDefined()
        expect(sut.props.createdAt).toBeInstanceOf(Date)
    })

    it('Should update the name of a user with success', () => {
        sut.update('name any')
        expect(sut.props.name).toEqual('name any')
        expect(typeof sut.props.name).toBe('string')
    })

    it('Should update the password of a user with success', () => {
        sut.updatePassword('password_any')
        expect(sut.props.password).toEqual('password_any')
        expect(typeof sut.props.password).toBe('string')
    })
})
