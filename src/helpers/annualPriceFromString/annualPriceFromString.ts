// Purpose: Helper function to extract a number from a string that contains characters
// other than numbers and then converts it to an annual price if it is a monthly price.
export const annualPriceFromString = (string: string, isMonthly: boolean): number => {
    const cleanedString = string.replaceAll(/[^0-9.-]+/g, '');
    const price = cleanedString ? parseFloat(cleanedString) : 0;
    return isMonthly ? price * 12 : price;
};

