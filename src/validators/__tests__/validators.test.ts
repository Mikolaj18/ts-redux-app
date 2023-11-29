import {isMoreThanZero, isNumber, isPositiveInteger, notEmpty} from "../validators";
import exp from "constants";

describe('Validator - notEmpty function', () => {
    it('Should return true', () => {
       expect(notEmpty('5')).toBeTruthy();
       expect(notEmpty('sadnjnsa')).toBeTruthy();
       expect(notEmpty('{} {} {}')).toBeTruthy();
    });

    it('Should return false', () => {
       expect(notEmpty("")).toBeFalsy();
       expect(notEmpty("         ")).toBeFalsy();
    });
});

describe('Validator - isNumber function', () => {
   it('Should return true', () => {
       expect(isNumber("5")).toBeTruthy();
       expect(isNumber("25.5")).toBeTruthy();
       expect(isNumber("-12")).toBeTruthy();
       expect(isNumber("-622.444")).toBeTruthy();
   });

    it('Should return false', () => {
       expect(isNumber("injertyju")).toBeFalsy();
       expect(isNumber("0.2e")).toBeFalsy();
    });
});

describe('Validator - isMoreThanZero function', () => {
    it('Should return true', () => {
        expect(isMoreThanZero('5')).toBeTruthy();
        expect(isMoreThanZero('0.1')).toBeTruthy();
        expect(isMoreThanZero('0000.5567')).toBeTruthy();
    });
    it('Should return false', () => {
        expect(isMoreThanZero('0,2a')).toBeFalsy();
        expect(isMoreThanZero('-14')).toBeFalsy();
    });
});

describe('Validator - isPositiveInteger function', () => {
    it('Should return true', () => {
       expect(isPositiveInteger("11")).toBeTruthy();
    });
    it('Should return false', () => {
       expect(isPositiveInteger("-1")).toBeFalsy();
       expect(isPositiveInteger("-1.5")).toBeFalsy();
       expect(isPositiveInteger("-1.e5")).toBeFalsy();
       expect(isPositiveInteger("2a2")).toBeFalsy();
    });
});
