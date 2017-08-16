import * as constants from '../../../src/utils/commonConstant'

export function products(qty){
    return {
        types: [constants.REQUEST, constants.SUCCESS, constants.FAILURE],
        path: 'getProduct',
        method: 'post',
        query:qty
    }
}

