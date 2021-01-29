const oneWord = function(str){
return str.replace(/ /g,'').toLowerCase()
}

const upperFirstWord = function(str){
    const [first,...others] = str.split(' ');
 return [first.toUpperCase(),...others].join(' ')
}

const transFormed = function(str,fn){
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`TransformedBy: ${fn.name}`)
}

transFormed('JavaScript is the Best Language',oneWord);
transFormed('JavaScript is the Best Language',upperFirstWord);