import { SubscriptionPackage } from './types';
import { fetchWebpage, scrapeSubscriptionPackages, sortSubscriptionPackagesByDescPrice } from './helpers';

const URL = 'https://wltest.dns-systems.net';

fetchWebpage(URL)
    .then((html: string): SubscriptionPackage[] => {
        const subscriptionPackages = scrapeSubscriptionPackages(html);
        const packagesSortedByDescPrice = sortSubscriptionPackagesByDescPrice(subscriptionPackages);
        console.log(packagesSortedByDescPrice);
        return packagesSortedByDescPrice;
    })
    .catch((error: string) => {
        console.error(error);
        return error;
    });
