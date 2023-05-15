import { SubscriptionPackage } from '../../types';

export const sortSubscriptionPackagesByDescPrice = (subscriptionPackages: SubscriptionPackage[]): SubscriptionPackage[] => {
    return [...subscriptionPackages].sort((a: SubscriptionPackage, b: SubscriptionPackage) => {
        return b.price - a.price;
    });
}
