import * as cheerio from 'cheerio';
import { SubscriptionPackage } from '../../types';
import { annualPriceFromString } from '../annualPriceFromString/annualPriceFromString';
import { isMonthlyFromString } from '../isMonthlyFromString/isMonthlyFromString';
import { discountValueFromString } from '../discountValueFromString/discountValueFromString';

export const scrapeSubscriptionPackages = (html: string): SubscriptionPackage[] => {
    const $ = cheerio.load(html);
    const subscriptionPackageElements = $('.package');
    const subscriptionPackages: SubscriptionPackage[] = [];

    subscriptionPackageElements.each((index, packageEl) => {
        // Get title
        const title: string = $(packageEl).find('h3').text().trim();

        // Get description
        const description: string = $(packageEl).find('.package-description').text().trim();

        // Get Price
        const priceBoxText: string = $(packageEl).find('.package-price').text();
        const priceString: string = $(packageEl).find('.package-price .price-big').text();
        const isMonthly: boolean = isMonthlyFromString(priceBoxText);
        const price: number = annualPriceFromString(priceString, isMonthly);

        // Get Discount value
        const discountText: string = $(packageEl).find('.package-price p').text();
        const discount = discountValueFromString(discountText);

        subscriptionPackages.push({
            title,
            description,
            price,
            discount,
        });
    });

    return subscriptionPackages;
}
