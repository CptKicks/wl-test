import { isMonthlyFromString } from './isMonthlyFromString';

describe('isMonthlyFromString', () => {
    it('should return true when the string contains "per month"', () => {
        const string = 'Price: £9.99 pEr MoNTh';
        const result = isMonthlyFromString(string);

        expect(result).toBe(true);
    });

    it('should return false when the string does not contain "per month"', () => {
        const string = 'Price: £99.99 per year';
        const result = isMonthlyFromString(string);

        expect(result).toBe(false);
    });

    it('should return false when an empty string is provided', () => {
        const string = '';
        const result = isMonthlyFromString(string);

        expect(result).toBe(false);
    });
});
