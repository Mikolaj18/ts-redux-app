
export const notEmpty = (entry: string): boolean => {
    if(typeof entry === "undefined") return false;

    return entry.trim().length > 0;
}

export const isNumber = (entry: string): boolean => {
    return !isNaN(Number(entry));
}

export const isMoreThanZero = (entry: string): boolean => {
    return isNumber(entry) && parseFloat(entry) > 0;
}

export const isPositiveInteger = (entry: string): boolean => {
    return isMoreThanZero(entry) && Number.isInteger(Number(entry));
}