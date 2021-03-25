"use strict";
function checaParenteses(string) {
    var stack = [];
    for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
        var char = string_1[_i];
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        }
        else {
            var lastOpeningChar = stack.pop();
            if (!lastOpeningChar) {
                return false;
            }
            else if ((lastOpeningChar === "(" && char !== ")") ||
                (lastOpeningChar === "[" && char !== "]") ||
                (lastOpeningChar === "{" && char !== "}")) {
                return false;
            }
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
}
console.log(checaParenteses("()"));
