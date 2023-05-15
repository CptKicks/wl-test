import { discountValueFromString } from './discountValueFromString';

describe('discountValueFromString', () => {
    it('should return the correct discount value when a valid string with float number is provided', () => {
        const string = 'Discount of £10.99';
        const result = discountValueFromString(string);

        expect(result).toBe(10.99);
    });

    it('should return 0 when an empty string is provided', () => {
        const string = '';
        const result = discountValueFromString(string);

        expect(result).toBe(0);
    });
});
