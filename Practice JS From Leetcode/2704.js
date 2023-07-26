/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    var result = {
    toBe:  function(x){
        if(val === x){
            return true;
        } else {
            throw new Error("Not Equal");
        }
    },
    notToBe:  function(y){
        if(val !== y){
            return true;
        } else{
            throw new Error("Equal");
        }
    }
    }

    return result;
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */