// Purpose: Helper function to extract a number from a string that contains characters other than numbers
export const discountValueFromString = (string: string): number => {
    const foundDiscount: RegExpMatchArray | null = string.match(/£[0-9]+(?:\.[0-9]+)?/g);
    return foundDiscount ? parseFloat(foundDiscount[0].replaceAll(/[^0-9.-]+/g, '')) : 0;
};
