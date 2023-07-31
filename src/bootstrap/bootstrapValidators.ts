import { Container } from 'inversify'
import * as yup from 'yup';
import { IValidationType } from '@Interface/validator/IValidatorType'
import { MapTypes } from '@MapTypes'
import { VALIDATOR_TYPES } from '@/enums/ValidatorTypes'
import { IWFSFeatureInput } from '@Interface/WFS/IWFSFeatureInput';


export function bootstrapValidators(container: Container): void {
    container.bind(MapTypes.Valiadtors).toFactory(() =>
        <T>(validationType: IValidationType<T>): { validate(obj: unknown): Promise<unknown> } => {
            switch (validationType) {
                case VALIDATOR_TYPES.WFSController.getWFSFeatures: {
                    const schema = yup.object({
                        redirectUri: yup.string().required().max(320),
                    });
                    return {
                        async validate(obj: unknown): Promise<IWFSFeatureInput> {
                            return schema.validate(obj, { abortEarly: false });
                        },
                    };
                }

                default:
                    throw new Error('no such validation type');
            }
        });
}
