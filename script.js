function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let answer = [];
  let strArray = str.split(""); 
  for(let i = 0; i < strArray.length; i++){
    if(alphabet.indexOf(strArray[i]) === -1){
      answer.push(strArray[i])
    }else if(alphabet.indexOf(strArray[i]) > 12){    
      answer.push(alphabet[alphabet.indexOf(strArray[i])-13])
    }else if(alphabet.indexOf(strArray) <= 12) {
      answer.push(alphabet[alphabet.indexOf(strArray[i])+13])
    }
  }
  
  return answer.join("");
}