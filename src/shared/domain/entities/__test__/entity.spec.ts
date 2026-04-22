import { Entity } from '@/src/shared/domain/entities/entity'

type StubProps = {
    prop1: string
    prop2: number
}

function uuidValidate(uuid: string): boolean {
    const regex =
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i
    return regex.test(uuid)
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit test', () => {
    it('Should set props and id', () => {
        const props = { prop1: 'value_any', prop2: 123 }
        const entity = new StubEntity(props)

        expect(entity.props).toStrictEqual(props)
        expect(entity._id).not.toBeNull()
        expect(uuidValidate(entity._id)).toBeTruthy()
    })

    it('Should accept a valid uuid', () => {
        const props = { prop1: 'value_any', prop2: 123 }
        const id = 'f1666497-f3d6-4899-904f-7199b31cc9cf'
        const entity = new StubEntity(props, id)

        expect(uuidValidate(entity._id)).toBeTruthy()
        expect(entity._id).toBe(entity._id)
    })

    it('Should convert a entity to a Javascript Object', () => {
        const props = { prop1: 'value_any', prop2: 123 }
        const id = 'f1666497-f3d6-4899-904f-7199b31cc9cf'
        const entity = new StubEntity(props, id)

        expect(entity.toJSON()).toStrictEqual({
            id,
            ...props,
        })
    })
})
