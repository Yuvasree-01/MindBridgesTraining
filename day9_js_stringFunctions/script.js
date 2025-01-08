//  largest word in a string
function findLargestWord(str) {
    let words = str.split(' ');
    let largestWord = words[0];
    for (let i = 1; i < words.length; i++) {
      if (words[i].length > largestWord.length) {
        largestWord = words[i];
      }
    }
    return largestWord;
  }

  // names with "CHANGED" 
  function replaceNamesWithChanged(sentence) {
    let words = sentence.split(' ');
    let nameMap = {};
    let result = [];

    for (let i = 0; i < words.length; i++) {
      if (nameMap[words[i]]) {
        result.push('CHANGED');
      } else {
        result.push(words[i]);
        nameMap[words[i]] = true;
      }
    }

    return result.join(' ');
  }

  // replace even-indexed words with "EVEN"
  function replaceEvenWords(sentence) {
    let words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (i % 2 === 0) {
        words[i] = 'EVEN';
      }
    }
    return words.join(' ');
  }

  // remove duplicate characters from a string
  function removeDuplicateChars(str) {
    let result = '';
    let seen = {};
    for (let i = 0; i < str.length; i++) {
      if (!seen[str[i]]) {
        result += str[i];
        seen[str[i]] = true;
      }
    }
    return result;
  }

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
      let inputText = document.getElementById('inputText').value;
      let action = this.getAttribute('data-action');
      let result;

      switch (action) {
        case 'largestWord':
          result = findLargestWord(inputText);
          document.getElementById('output').innerText = 'Largest word: ' + result;
          break;
        case 'replaceNames':
          result = replaceNamesWithChanged(inputText);
          document.getElementById('output').innerText = 'Modified sentence: ' + result;
          break;
        case 'replaceEvenWords':
          result = replaceEvenWords(inputText);
          document.getElementById('output').innerText = 'Modified sentence: ' + result;
          break;
        case 'removeDuplicates':
          result = removeDuplicateChars(inputText);
          document.getElementById('output').innerText = 'Modified string: ' + result;
          break;
        default:
          document.getElementById('output').innerText = 'Invalid action';
      }
    });
  });