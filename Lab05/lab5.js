// For testing js functions
function Test(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected: " + expected + " Result: " + found;
    }
}

function max(a, b) {
    if (a > b) {
        return a;
    } else
        return b;
}

printLines("Check max.");

console.log(
    "Expected output of max(20,10) is 20  " +
    Test(20, max(20, 10))
);
console.assert(20 > 10, Test(20, max(20, 10)))

console.log(
    "Expected output of max(40,79) is 79  " +
    Test(79, max(40, 79))
);
console.assert(79 > 40, Test(79, max(40, 79)))


function maxAmoungThreeItems(a, b, c) {
    return max(max(a, b), c);
}

printLines("Check max among three items.");
console.log(
    "Expected output of maxAmoungThreeItems(5,4,44) is 44  " +
    Test(44, maxAmoungThreeItems(5, 4, 44))
);
console.assert(44 > max(5, 4), Test(44, maxAmoungThreeItems(5, 4, 44)))

console.log(
    "Expected output of maxAmoungThreeItems(55,4,44) is 55  " +
    Test(55, maxAmoungThreeItems(55, 4, 44))
);
console.assert(55 > max(5, 4), Test(55, maxAmoungThreeItems(55, 4, 44)))


console.log(
    "Expected output of maxAmoungThreeItems(23, 2, 9) is 23  " +
    Test(55, maxAmoungThreeItems(23, 2, 9))
);
console.assert(55 < max(23, 2, 9), Test(55, maxAmoungThreeItems(23, 2, 9)))

function isVowel(a) {
    if (a.length == 0 || a.length > 1) {
        return false;
    } else {
        a = a.toLowerCase();
        if (a == "a" || a == ("e") || a == ("i") || a == ("o") || a == "u") {
            return true;
        }
    }
}

printLines("Check Vowel");
console.log(
    "Expected output of isVowel(apple) is false  " +
    Test(false, isVowel("apple"))
);
console.assert(Test(false, isVowel("apple")), Test(false, isVowel("apple")))

console.log(
    "Expected output of isVowel(a) is true  " +
    Test(true, isVowel("a"))
);
console.assert(Test(true, isVowel("a")), Test(true, isVowel("a")));

console.log(
    "Expected output of isVowel(u) is true  " +
    Test(true, isVowel("u"))
);
console.assert(Test(true, isVowel("u")), Test(true, isVowel("u")));

console.log(
    "Expected output of isVowel(U) is true  " +
    Test(true, isVowel("U"))
);
console.assert(Test(true, isVowel("U")), Test(true, isVowel("U")));

console.log(
    "Expected output of isVowel(c) is false  " +
    Test(true, isVowel("c"))
);
console.assert(isVowel("c"), Test(true, isVowel("c")));

function sum(a) {
    var sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
}

function multiply(a) {
    var mul = 1;
    for (let i = 0; i < a.length; i++) {
        mul = mul * a[i];
    }
    return mul;
}

printLines("Check SUM");
console.log(
    "Expected output of sum([1,2,3,4]) is 10  " +
    Test(10, sum([1, 2, 3, 4]))
);
console.assert((1 + 2 + 3 + 4 == 10), sum([1, 2, 3, 4]));

console.log(
    "Expected output of sum([1,2,3,4]) is 90  " +
    Test(90, sum([1, 2, 3, 4]))
);
console.assert((1 + 2 + 3 + 4 == 90), Test(90, sum([1, 2, 3, 4])));

printLines("Checking Multiplication.");
console.log(
    "Expected output of multiply([1,2,3,4]) is 24  " +
    Test(24, multiply([1, 2, 3, 4]))
);
console.log(
    "Expected output of multiply([1,2,3,4]) is 90  " +
    Test(90, multiply([1, 2, 3, 4]))
);
console.assert((1 * 2 * 3 * 4 == 90), Test(90, multiply([1, 2, 3, 4])));

function reverse(take) {
    var revStore = "";
    for (let i = take.length - 1; i >= 0; i--) {
        revStore = revStore + take.charAt(i);
    }
    return revStore;
}

printLines("Check Reverse");
console.log(
    "Expected output of reverse(apple) is elppa  " +
    Test("elppa", reverse("apple"))
);
console.log(
    "Expected output of reverse(apple) is aplpe  " +
    Test("aplpe", reverse("apple"))
);
console.assert("aplpe" == "elppa", Test("aplpe", reverse("apple")));

function findLongestWord(take) {
    if (take.length == 0) {
        return "Length 0";
    }
    var maxLen = take[0].length;
    for (let i = take.length - 1; i >= 0; i--) {
        if (maxLen < take[i].length) {
            maxLen = take[i].length;
        }
    }
    return maxLen;
}

printLines("Check the longest word");
console.log(
    "Expected output of findLongestWord([apple, cat, shuklaphant, vekx yek]) is 11  " +
    Test(11, findLongestWord(["apple", "cat", "shuklaphant", "vekx yek"]))
);
console.log(
    "Expected output of findLongestWord([sections, ok, done, now]) is 2  " +
    Test(2, findLongestWord(["sections", "ok", "done", "now"]))
);
console.assert("sections".length == 2, Test(2, findLongestWord(["sections", "ok", "done", "now"])));


/* ----------------------------------------------------------------------------------------------- */
function filterLongWords(params, mLen) {
    var filteredArr = [];
    for (let i = 0; i < params.length; i++) {
        if (params[i].length > mLen) {
            filteredArr.push(params[i]);
        }
    }
    return filteredArr;
}
printLines("Check the filtered long words.");
console.log(
    "Expected output of filterLongWords([apple, cat, shuklaphant, vekx yek], 3) is [apple,shuklaphant,vekx yek]  " +
    arrayEquals(["apple", "shuklaphant", "vekx yek"], filterLongWords(["apple", "cat", "shuklaphant", "vekx yek"], 3))
);
console.log(
    "Expected output of filterLongWords([sections, ok, done, now], 5) is 5  " +
    arrayEquals(2, filterLongWords(["sections", "ok", "done", "now"], 5))
);
console.assert(5 + 2 == 1, arrayEquals(2, filterLongWords(["sections", "ok", "done", "now"], 5)));


/* ----------------------------------------------------------------------------------------------- */

// a) multiply elements by 10; 
function multiplyAll(objArr, num) {
    return objArr.map(function (elem, i, array) {
        return elem * num + 3;
    })
}

// b) return array with all elements equal to 3; 
function findSimilarItems(objArr, num) {
    return objArr.filter(function (item, i, arr) {
        return item == num;
    });
};

// c) return the product of all elements;
function reduceByMultiplying(objArr) {
    return objArr.reduce(function (prev, curItem, i, arr) {
        return prev * curItem;
    });
}

console.log(multiplyAll([1, 3, 5, 3, 3], 3));

printLines("Checking multiplyAll findSimilarItems reduceByMultiplying")
console.log(
    "Expected output of multiplyAll([1,3,5,3,3], 10) is [13,33,53,33,33]  " +
    arrayEquals([13, 33, 53, 33, 33], multiplyAll([1, 3, 5, 3, 3], 10))
);

console.log(
    "Expected output of findSimilarItems([1,3,5,3,3], 3) is [3,3,3]  " +
    arrayEquals([3, 3, 3], findSimilarItems([1, 3, 5, 3, 3], 3))
);
console.log(
    "Expected output of reduceByMultiplying([1,3,5,3,3]) is 135  " +
    Test(135, reduceByMultiplying([1, 3, 5, 3, 3]))
);


/* ----------------------------------------------------------------------------------------------- */

function printLines(functionMsg) {
    console.log();
    console.log("-----------------------------------------------------------------------------------------------");
    console.log(functionMsg.toUpperCase());
    console.log();
}

function arrayEquals(a, b) {
    if (Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index])) {
        return "TEST SUCCEEDED - Result is the same as expected.";
    } else {
        return "TEST FAILED.  Result is not the same as expected.";
    }
}