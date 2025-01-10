
//1

const employees = [
  { name: 'John', age: 28 },
  { name: 'Anna', age: 22 },
  { name: 'Mike', age: 32 },
];

function sortEmployeesByAge(employees) {
  return employees.sort((a, b) => a.age - b.age);
}

const sortedEmployees = sortEmployeesByAge(employees);
console.log(sortedEmployees);

//2

const nums = [1, 2, 3, 4, 5, 6];

function groupNumbers(numbers) {
  const result = { odd: [], even: [] };
  for (const num of numbers) {
    if (num % 2 === 0) {
      result.even.push(num);
    } else {
      result.odd.push(num);
    }
  }
  return result;
}

const groupedNumbers = groupNumbers(nums);
console.log(groupedNumbers); 

//3
const data = [ { id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'C' } ];

function removeDuplicatesById(data) {
  const uniqueIds = new Set();
  const uniqueData = [];

  for (const item of data) {
    if (!uniqueIds.has(item.id)) {
      uniqueIds.add(item.id);
      uniqueData.push(item); 
    }
  }

  return uniqueData;
}

const uniqueData = removeDuplicatesById(data);
console.log(uniqueData);

//4
const arr = [1, 2, 2, 3, 3, 3];

function findMostFrequent(arr) {
  const counts = arr.reduce(function(acc, curr) {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(counts).reduce(function(a, b) {
    return counts[a] > counts[b] ? a : b;
  });
}

const result = findMostFrequent(arr);
console.log(result); //3

//5
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

function findCommonElements(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

//6
const commonElements = findCommonElements(arr1, arr2);
console.log(commonElements); // Output: [2, 3]

const a = [ { id: 1, name: 'A' }, { id: 2, name: 'B' } ];

function arrayToMap(a) {
  const map = {};
  for (const obj of a) {
    map[obj.id] = obj.name;
  }
  return map;
}

const res = arrayToMap(a);
console.log(res); // Output: { 1: 'A', 2: 'B' }


//7
const array = [1, 2, 2, 3, 4, 4, 5];

function findUniqueElements(array) {
  const frequencyMap = {};

  for (const num of array) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  return array.filter(num => frequencyMap[num] === 1);
}

const uniqueElements = findUniqueElements(array);
console.log(uniqueElements); // Output: [1, 3, 5]

//8
const obj = { a: 1, b: 2 };

function objectToPairs(obj) {
  return Object.entries(obj);
}

const pairs = objectToPairs(obj);
console.log(pairs); // Output: [['a', 1], ['b', 2]]

//9
const ob = { a: 1, b: 2, c: 3 };

function filterKeys(ob, keysToKeep) {
  return Object.fromEntries(
    Object.entries(ob).filter(([key]) => keysToKeep.includes(key))
  );
}

const filteredObj = filterKeys(ob, ['a', 'b']);
console.log(filteredObj); // Output: { a: 1, b: 2 }

//10
const array1 = [1, 2, 3, 5];
const array2 = [4, 7];
const c = 6;

function mergeArrays(array1, array2, c) {
  const single = [];
  for (const num of array1) {
    if (!single.includes(num)) {
      single.push(num); 
    }
  }
  for (const num of array2) {
    if (!single.includes(num)) {
      single.push(num);
    }
  }
  if (!single.includes(c)) {
    single.push(c);
  }
  return single;
}

const mergedArray = mergeArrays(array1, array2, c);
console.log(mergedArray); // Output: [1, 2, 3, 5, 4, 7, 6]