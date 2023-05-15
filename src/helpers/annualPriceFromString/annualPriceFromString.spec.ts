import { annualPriceFromString } from './annualPriceFromString';

describe('annualPriceFromString', () => {
    it('should correctly extract and convert the price from a monthly string', () => {
        const string = '£10.99/month';
        const isMonthly = true;
        const result = annualPriceFromString(string, isMonthly);

        expect(result).toBe(10.99 * 12);
    });

    it('should correctly extract and return the price from a non-monthly string', () => {
        const string = '£99.99/year';
        const isMonthly = false;
        const result = annualPriceFromString(string, isMonthly);

        expect(result).toBe(99.99);
    });

    it('should handle strings with no price and return 0', () => {
        const string = 'No price specified';
        const isMonthly = true;
        const result = annualPriceFromString(string, isMonthly);

        expect(result).toBe(0);
    });
});
