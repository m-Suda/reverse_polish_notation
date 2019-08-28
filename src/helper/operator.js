const OPERATOR = {
    PLUS: '+',
    SUBTRACT: '-',
    TIMES: '*',
    DIVIDED: '/'
};

/**
 * その文字は演算子である。
 * @param {string} c
 * @return {boolean}
 */
const isOperator = c => Object.values(OPERATOR).includes(c);



module.exports.isOperator = isOperator;
