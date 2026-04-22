import { UserEntity, UserProps } from '@/src/users/domain/entities/user.entity'
import { faker } from '@faker-js/faker/locale/pt_BR'

describe('UserEntity unit test', () => {
    let props: UserProps
    let sut: UserEntity

    beforeEach(() => {
        props = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            createdAt: faker.date.past(),
        }

        sut = new UserEntity(props)
    })

    it('Constructor method ', () => {
        expect(sut.props.name).toBe(props.name)
        expect(sut.props.email).toBe(props.email)
        expect(sut.props.password).toBe(props.password)
        expect(sut.props.createdAt).toBeInstanceOf(Date)
    })

    it('Should Gets name defined', () =>{
        expect(sut.name).toBeDefined()
        expect(sut.name).toEqual(props.name)
        expect(typeof sut.props.name).toBe('string')
    })

    it('Should Gets email defined', () =>{
        expect(sut.email).toBeDefined()
        expect(sut.email).toEqual(props.email)
        expect(typeof sut.props.email).toBe('string')
    })

    it('Should Gets password defined', () =>{
        expect(sut.password).toBeDefined()
        expect(sut.password).toEqual(props.password)
        expect(typeof sut.props.password).toBe('string')
    })

    it('Should Gets createdAt defined', () =>{
        expect(sut.createdAt).toBeDefined()
        expect(sut.props.createdAt).toBeInstanceOf(Date)
    })
})
