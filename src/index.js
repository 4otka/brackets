module.exports = function check(str, bracketsConfig) {
    let skobki = bracketsConfig.join('').replace(/,/g, '');
    let stack = [];

    for (let skobka of str) {
        let bracketsIndex = skobki.indexOf(skobka)

        if (bracketsIndex % 2 === 0) {
            if (skobka === skobki[bracketsIndex + 1] && stack[stack.length - 1] === bracketsIndex){
                stack.pop();
            } else if (skobka === skobki[bracketsIndex + 1] && stack[stack.length - 1] !== bracketsIndex) {
                stack.push(bracketsIndex)
            }
            else{
                stack.push(bracketsIndex)
            }
        }
        else {
            if (stack.pop() !== bracketsIndex-1){
                return false;
            }
        }

    }

    return stack.length === 0
}
