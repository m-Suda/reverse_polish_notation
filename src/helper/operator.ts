export const OPERATOR = {
    PLUS: '+',
    SUBTRACT: '-',
    TIMES: '*',
    DIVIDED: '/',
    LEFT_BRACKETS: '(',
    RIGHT_BRACKETS: ')'
};

export const isLeftBrackets = (c: string): boolean => {
    return c === OPERATOR.LEFT_BRACKETS;
};

export const isRightBrackets = (c: string): boolean => {
    return c === OPERATOR.RIGHT_BRACKETS;
};

export const isOperator = (c: string): boolean => {
    return Object.values(OPERATOR).includes(c);
};

export const isHigherPriorityThanOperator = (c: string, stackTop: string): boolean => {

    // 左結合の定義
    if (c === OPERATOR.PLUS || c === OPERATOR.SUBTRACT) {
        if (stackTop === OPERATOR.PLUS || stackTop === OPERATOR.SUBTRACT) {
            return true;
        }
    }

    // 左結合の定義
    if (c === OPERATOR.TIMES || c === OPERATOR.DIVIDED) {
        if (stackTop === OPERATOR.TIMES || stackTop === OPERATOR.DIVIDED) {
            return true;
        }
    }

    // 演算子優先度の関係。演算子=>a, スタックトップをbとしたとき、
    // 演算子の優先度が a < b ならばスタックから全て降ろす。
    if (c === OPERATOR.PLUS || c === OPERATOR.SUBTRACT) {
        if (stackTop === OPERATOR.TIMES || stackTop === OPERATOR.DIVIDED) {
            return true;
        }
    }

    // 残りのパターンはスタックに積む。
    return false;
};