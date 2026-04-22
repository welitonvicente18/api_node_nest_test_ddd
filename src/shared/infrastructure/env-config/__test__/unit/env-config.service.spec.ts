import { Test, TestingModule } from '@nestjs/testing'
import { EnvConfigService } from '../../env-config.service'
import { ConfigService } from '@nestjs/config'

describe('EnvConfigService', () => {
    let sut: EnvConfigService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                EnvConfigService,
                {
                    provide: ConfigService,
                    useValue: {
                        get: jest.fn((key: string) => {
                            if (key === 'PORT') return 3000
                            if (key === 'NODE_ENV') return 'development'
                            return undefined
                        }),
                    },
                },
            ],
        }).compile()

        sut = module.get<EnvConfigService>(EnvConfigService)
    })

    it('should be defined', () => {
        expect(sut).toBeDefined()
    })

    it('should return the variable PORT ', () => {
        expect(sut.getAppPort()).toBe(3000)
    })

    it('should return the variable NODE_ENV ', () => {
        expect(sut.getNodeEnv()).toBe('development')
    })
})
