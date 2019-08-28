import {isOperator, isHigherPriorityThanOperator} from '../src/helper/operator';

describe('演算子比較テスト', () => {
    describe('truthy', () => {
        test('+', () => {
            expect(isOperator('+')).toBeTruthy();
        });
        test('-', () => {
            expect(isOperator('-')).toBeTruthy();
        });
        test('*', () => {
            expect(isOperator('*')).toBeTruthy();
        });
        test('/', () => {
            expect(isOperator('/')).toBeTruthy();
        });
    });
    describe('falsy', () => {
        test('', () => {
            expect(isOperator('')).toBeFalsy();
        });
        test(' ', () => {
            expect(isOperator(' ')).toBeFalsy();
        });
        test('a', () => {
            expect(isOperator('a')).toBeFalsy();
        });
        test('A', () => {
            expect(isOperator('A')).toBeFalsy();
        });
        test('1', () => {
            expect(isOperator('1')).toBeFalsy();
        });
    });
});

describe('演算子優先度テスト', () => {
    describe('左結合テスト', () => {
        describe('同じ演算子', () => {
            test('+, +', () => {
                const c = '+';
                const stackTop = '+';
                expect(isHigherPriorityThanOperator(c, stackTop)).toBeTruthy();
            });
            test('*, *', () => {
                const c = '*';
                const stackTop = '*';
                expect(isHigherPriorityThanOperator(c, stackTop)).toBeTruthy();
            });
        });
        describe('同じ優先度の演算子', () => {
            test('-, +', () => {
                const c = '-';
                const stackTop = '+';
                expect(isHigherPriorityThanOperator(c, stackTop)).toBeTruthy();
            });
            test('/, *', () => {
                const c = '/';
                const stackTop = '*';
                expect(isHigherPriorityThanOperator(c, stackTop)).toBeTruthy();
            });
        });
    });
    describe('優先度テスト', () => {
        describe('演算子の優先度 高い', () => {
            test('*, +', () => {
                const c = '*';
                const stackTop = '+';
                expect(isHigherPriorityThanOperator(c, stackTop)).toBeFalsy();
            });
            test('/, -', () => {
                const c = '/';
                const stackTop = '-';
                expect(isHigherPriorityThanOperator(c, stackTop)).toBeFalsy();
            });
        });
        describe('演算子の優先度 低い', () => {
            test('+, *', () => {
                const c = '+';
                const stackTop = '*';
                expect(isHigherPriorityThanOperator(c, stackTop)).toBeTruthy();
            });
            test('-, /', () => {
                const c = '-';
                const stackTop = '/';
                expect(isHigherPriorityThanOperator(c, stackTop)).toBeTruthy();
            });
        });
    });
});