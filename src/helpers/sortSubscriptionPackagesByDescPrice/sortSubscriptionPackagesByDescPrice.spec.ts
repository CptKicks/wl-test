import { SubscriptionPackage } from '../../types';
import { sortSubscriptionPackagesByDescPrice } from './sortSubscriptionPackagesByDescPrice';

describe('sortSubscriptionPackagesByDescPrice', () => {
    let mockSubscriptionPackages: SubscriptionPackage[];
    beforeEach(() => {
        mockSubscriptionPackages = [
            {
                title: 'Basic',
                description: 'Basic package',
                price: 100,
                discount: 0,
            },
            {
                title: 'Premium',
                description: 'Premium package',
                price: 200,
                discount: 12,
            },
            {
                title: 'Middle',
                description: 'Middle package',
                price: 150,
                discount: 15,
            }
        ]
    })

    it('should sort the subscription packages by desc annual price', () => {
        const sortedPackages = sortSubscriptionPackagesByDescPrice([...mockSubscriptionPackages]);
        expect(sortedPackages).toEqual([
            mockSubscriptionPackages[1],
            mockSubscriptionPackages[2],
            mockSubscriptionPackages[0]
        ])
    });
});
