/**
 * This function parses the words of the searched for site by
 * extracting the textContent from the html document response.
 */
const parseWords = document => {
  // Get the text content of the html document
  const text = document.getElementsByTagName('body')[0].textContent;

  // Split all the words into an array based on space and
  // filter out empty strings
  const cleanedUpText = text.split(' ').filter(e => e !== '');

  const words = {};
  cleanedUpText.forEach(str => {
    // Clean up white space by trimming and then replace all
    // punctuaction with empty string
    const alphanumeric = str.trim().replace(/[.,/#!$%^&?"*;:{}=\\-_`~()]/g, '');

    // Split again on spaces or new lines
    const multiWords = alphanumeric.split(/[\s\n]+/g);

    // Loop over possible multi words and if not an empty string
    // place into the json map and set count to 1.
    // If the word already is in the map, increment the count.
    multiWords.forEach(word => {
      if (word.length > 0) {
        if (words[word]) {
          words[word] += 1;
        } else {
          words[word] = 1;
        }
      }
    });
  });

  // Set up the data structure and make it easier for the ui
  // to parse the word and its count.
  const wordCounts = [];
  Object.entries(words).forEach(([key, value]) => {
    wordCounts.push({
      word: key,
      count: value
    });
  });

  // Finally, sort the words by how many exist of each
  wordCounts.sort((a, b) => b.count - a.count);
  return wordCounts;
};

module.exports = parseWords;
