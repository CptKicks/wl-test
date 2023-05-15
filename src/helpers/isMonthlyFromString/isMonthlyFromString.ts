// Purpose: Helper function to check if the string includes "per month"
export const isMonthlyFromString = (string: string): boolean => {
    return string.toLowerCase().includes('per month');
};
