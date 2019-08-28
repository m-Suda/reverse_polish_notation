export const OPERATOR = {
    PLUS: '+',
    SUBTRACT: '-',
    TIMES: '*',
    DIVIDED: '/'
};

export const isOperator = (c: string): boolean => {
    return Object.values(OPERATOR).includes(c);
};

export const isHigherPriorityThanOperator = (c: string, comparison: string): boolean => {
    // 左結合の定義により演算子が同じなら優先度が高い
    if (c === comparison) {
        return true;
    }

    // 演算子とスタックトップがともに+ or -の時、左結合の定義に当てはまる
    if (c === OPERATOR.PLUS || c === OPERATOR.SUBTRACT) {
        if (comparison === OPERATOR.PLUS || comparison === OPERATOR.SUBTRACT) {
            return true;
        }
    }

    // 演算子が* or /の時、スタックトップがどの演算子でも優先度は高い。
    // スタックトップが+ or -の時、演算子の優先度の関係
    // スタックトップが* or /の時、左結合の関係
    return c === OPERATOR.TIMES || c === OPERATOR.DIVIDED;
};