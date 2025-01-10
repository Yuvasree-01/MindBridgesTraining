// Largest word in a string
function findLargestWord() {
  let inputText = document.getElementById('inputText1').value;
  let words = inputText.split(' ');
  let largestWord = words[0];
  
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > largestWord.length) {
      largestWord = words[i];
    }
  }
  
  document.getElementById('output1').innerText = 'Largest word: ' + largestWord;
}

// Replace names with "CHANGED"
function replaceNamesWithChanged() {
  let inputText = document.getElementById('inputText2').value;
  let words = inputText.split(' ');
  let Map = {};
  let result = [];
  
  for (let i = 0; i < words.length; i++) {
    if (Map[words[i]]) {
      result.push('CHANGED');
    } else {
      result.push(words[i]);
      Map[words[i]] = true;
    }
  }
  
  document.getElementById('output2').innerText = 'Changed sentence: ' + result.join(' ');
}

// Replace even-indexed words with "EVEN"
function replaceEvenWords() {
  let inputText = document.getElementById('inputText3').value;
  let words = inputText.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    if (i % 2 === 0) {
      words[i] = 'EVEN';
    }
  }
  
  document.getElementById('output3').innerText = 'Even sentence: ' + words.join(' ');
}

// Remove duplicate characters from a string
function removeDuplicateChars() {
  let inputText = document.getElementById('inputText4').value;
  let res = '';
  let dup = {};
  
  for (let i = 0; i < inputText.length; i++) {
    if (!dup[inputText[i]]) {
      res += inputText[i];
      dup[inputText[i]] = true;
    }
  }
  
  document.getElementById('output4').innerText = 'Duplicate Removed: ' + res;
}
