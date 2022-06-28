// Valid bracket types
//    {} () []  <>

// example input: "({[]})""
// return true

// example input: "({[)]})""
// return false

// example input: "()[]{}<>"
// return true

// example input: "(a)"
// return true

//example input: "(>a)"
//return false
let isBalanced = (input) => {
  // enter your code here
  let charactersToEvaluate = input.split("");
  let isGoodness = false;
  let endBracketCharactersToFind = [];
  let bracketCharacters = ["(", ")", "[", "]", "{", "}", "<", ">"];

  for (let i = 0; i < charactersToEvaluate.length; i++) {
    /* If this item isn't one of the beginning or ending bracket characters, go on 
      to check next value.
    */
    if (!bracketCharacters.includes(charactersToEvaluate[i].valueOf())) {
      continue;
    }

    /* Compare the item to the values for beginning brackets. If found, set which ending matching  
      ending bracket character should be searched for.
    */
    let endBracketCharacter = setEndBracketCharacter(
      charactersToEvaluate[i].valueOf()
    );

    /* If there is a value, then we identified an ending bracket character that matched 
      a beginning bracket value. Add that value to list of ending bracket characters to be found. 
      Go on the read next value.
    */
    if (endBracketCharacter.length > 0) {
      endBracketCharactersToFind.push(endBracketCharacter);
      continue;
    }

    /* At this point, the item that we're evaluating is an ending bracket character. If there are
      any entries in the endBracketCharactersToFind, check whether the last entry matches the
      character being evaluated.
    */
    if (
      endBracketCharactersToFind.length > 0 &&
      charactersToEvaluate[i].valueOf() ===
        endBracketCharactersToFind.pop().valueOf()
    ) {
      /* We have a matched pair. The matching ending bracket has been removed from the 
          ToFind list.  This should unwind nested brackets as they are matched.
          Set the return value to true and go on the read next entry.
      */
      isGoodness = true;
      continue;
    }

    // We have an unmatched ending bracket. Set return value and exit loop. No need to keep checking.
    isGoodness = false;
    break;
  }

  // If there is anything left over in the ToFind array, then we have an unmatched beginning bracket.
  if (endBracketCharactersToFind.length > 0) {
    isGoodness = false;
  }

  return isGoodness;
};

const setEndBracketCharacter = function (theBracketCharacter) {
  if (theBracketCharacter === "(") {
    return ")";
  } else if (theBracketCharacter === "[") {
    return "]";
  } else if (theBracketCharacter === "<") {
    return ">";
  } else if (theBracketCharacter === "{") {
    return "}";
  } else {
    return "";
  }
};

module.exports = { isBalanced };
