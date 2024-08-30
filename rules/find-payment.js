module.exports = {
    create(context) {
        return {
            callExpression(node){
                if(node.callee.name === 'getPayments'){
                    context.report({
                        node: node,
                        message: "getPayments is deprecated. use getLatestPayment"
                    })
                }
            }
        }
    }
}