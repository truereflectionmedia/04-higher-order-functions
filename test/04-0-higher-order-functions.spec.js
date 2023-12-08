describe("bae.last", function () {
  it("should pull the last element from an array", function () {
    expect(bae.last([1, 2, 3])).toEqual(3);
  });

  it("should accept an index argument", function () {
    expect(bae.last([1, 2, 3], 2)).toEqual([2, 3]);
  });

  it("should return empty array if zero is passed in as the index", function () {
    expect(bae.last([1, 2, 3], 0)).toEqual([]);
  });

  it("should return all the array's elements if the index argument is larger than the length of the array", function () {
    expect(bae.last([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });
});

describe("bae.first", function () {
  it("should be able to pull out the first element of an array", function () {
    expect(bae.first([1, 2, 3])).toEqual(1);
  });

  it("should accept an index argument", function () {
    expect(bae.first([1, 2, 3], 2)).toEqual([1, 2]);
  });

  it("should return empty array if zero is passed in as the index", function () {
    expect(bae.first([1, 2, 3], 0)).toEqual([]);
  });

  it("should return all the array's elements if the index argument is larger than the length of the array", function () {
    expect(bae.first([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });
});

describe("bae.each", function () {
  it("should iterate over arrays, providing access to the element, index, and array itself", function () {
    var animals = ["ant", "bat", "cat"];
    var iterationInputs = [];

    bae.each(animals, function (animal, index, list) {
      iterationInputs.push([animal, index, list]);
    });

    expect(iterationInputs).toEqual([
      ["ant", 0, animals],
      ["bat", 1, animals],
      ["cat", 2, animals],
    ]);
  });

  it("should only iterate over the array elements, not properties of the array", function () {
    var animals = ["ant", "bat", "cat"];
    var iterationInputs = [];

    animals.shouldBeIgnored = "Ignore me!";

    bae.each(animals, function (animal, index, list) {
      iterationInputs.push([animal, index, list]);
    });

    expect(iterationInputs).toEqual([
      ["ant", 0, animals],
      ["bat", 1, animals],
      ["cat", 2, animals],
    ]);
  });

  it("should iterate over objects, providing access to the element, index, and object itself", function () {
    var animals = { a: "ant", b: "bat", c: "cat" };
    var iterationInputs = [];

    bae.each(animals, function (animal, key, object) {
      iterationInputs.push([animal, key, object]);
    });

    expect(iterationInputs).toEqual([
      ["ant", "a", animals],
      ["bat", "b", animals],
      ["cat", "c", animals],
    ]);
  });
});

describe("bae.indexOf", function () {
  it("should find 40 in the list", function () {
    var numbers = [10, 20, 30, 40, 50];

    expect(bae.indexOf(numbers, 40)).toEqual(3);
  });

  it("should be able to compute indexOf even when the native function is undefined", function () {
    var numbers = [10, 20, 30];

    expect(bae.indexOf(numbers, 20)).toEqual(1);
  });

  it("returns -1 when the target cannot be found not in the list", function () {
    var numbers = [10, 20, 30, 40, 50];

    expect(bae.indexOf(numbers, 35)).toEqual(-1);
  });

  it("returns the first index that the target can be found at when there are multiple matches", function () {
    var numbers = [1, 40, 40, 40, 40, 40, 40, 40, 50, 60, 70];

    expect(bae.indexOf(numbers, 40)).toEqual(1);
  });
});

describe("bae.filter", function () {
  it("should return all even numbers in an array", function () {
    var isEven = function (num) {
      return num % 2 === 0;
    };
    var evens = bae.filter([1, 2, 3, 4, 5, 6], isEven);

    expect(evens).toEqual([2, 4, 6]);
  });

  it("should return all odd numbers in an array", function () {
    var isOdd = function (num) {
      return num % 2 !== 0;
    };
    var odds = bae.filter([1, 2, 3, 4, 5, 6], isOdd);

    expect(odds).toEqual([1, 3, 5]);
  });

  it("should produce a brand new array instead of modifying the input array", function () {
    var isOdd = function (num) {
      return num % 2 !== 0;
    };
    var numbers = [1, 2, 3, 4, 5, 6];
    var evens = bae.filter(numbers, isOdd);

    expect(evens).not.toEqual(numbers);
  });
});

describe("bae.reject", function () {
  it("should reject all even numbers", function () {
    var isEven = function (num) {
      return num % 2 === 0;
    };
    var odds = bae.reject([1, 2, 3, 4, 5, 6], isEven);

    expect(odds).toEqual([1, 3, 5]);
  });

  it("should reject all odd numbers", function () {
    var isOdd = function (num) {
      return num % 2 !== 0;
    };
    var evens = bae.reject([1, 2, 3, 4, 5, 6], isOdd);

    expect(evens).toEqual([2, 4, 6]);
  });

  it("should produce a brand new array instead of modifying the input array", function () {
    var isOdd = function (num) {
      return num % 2 !== 0;
    };
    var numbers = [1, 2, 3, 4, 5, 6];
    var evens = bae.reject(numbers, isOdd);

    expect(evens).not.toEqual(numbers);
  });
});

describe("bae.uniq", function () {
  it("should return all unique values contained in an unsorted array", function () {
    var list = [1, 2, 2, 3, 4, 4, 5, 5, 5];
    var result = bae.uniq(list);

    expect(result.sort()).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle iterators that work with a sorted array", function () {
    var iterator = function (value) {
      return value + 1;
    };
    var list = [1, 2, 2, 3, 4, 4, 5, 5, 5];
    var result = bae.uniq(list, true, iterator);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should produce a brand new array instead of modifying the input array", function () {
    var list = [1, 2, 2, 3, 4, 4, 5, 5, 5];
    var result = bae.uniq(list);

    expect(result).not.toEqual(list);
  });
});

describe("bae.map", function () {
  it("should apply a function to every value in an array", function () {
    var multiplyByTwo = function (num) {
      return num * 2;
    };
    var result = bae.map([1, 2, 3], multiplyByTwo);

    expect(result).toEqual([2, 4, 6]);
  });

  it("should produce a brand new array instead of modifying the input array", function () {
    var multiplyByTwo = function (num) {
      return num * 2;
    };
    var numbers = [1, 2, 3];
    var result = bae.map(numbers, multiplyByTwo);

    expect(result).not.toEqual(numbers);
  });
});

describe("bae.contains", function () {
  it("should return true if a collection contains a user-specified value", function () {
    var numbers = [1, 2, 3];
    var result = bae.contains(numbers, 2);

    expect(result).toEqual(true);
  });

  it("should return false if a collection does not contain a user-specified value", function () {
    var numbers = [1, 2, 3];
    var result = bae.contains(numbers, 4);

    expect(result).toEqual(false);
  });

  it("should handle objects", function () {
    var obj = { a: 1, b: 2 };
    var result = bae.contains(obj, 1);

    expect(result).toEqual(true);
  });
});

describe("bae.reduce", function () {
  it("should be able to sum up an array", function () {
    var add = function (tally, item) {
      return tally + item;
    };
    var total = bae.reduce([1, 2, 3], add, 0);

    expect(total).toEqual(6);
  });

  it("should use the first element as an accumulator when none is given", function () {
    var add = function (tally, item) {
      return tally + item;
    };
    var total = bae.reduce([1, 2, 3], add);

    expect(total).toEqual(6);
  });

  it("should invoke the iterator on the first element when given an accumulator", function () {
    var sumSquares = function (tally, item) {
      return tally + item * item;
    };
    var total = bae.reduce([2, 3], sumSquares, 0);

    expect(total).toEqual(13);
  });

  it("should not invoke the iterator on the first element when using it as an accumulator", function () {
    var sumSquares = function (tally, item) {
      return tally + item * item;
    };
    var total = bae.reduce([2, 3], sumSquares);

    expect(total).toEqual(11);
  });
});
