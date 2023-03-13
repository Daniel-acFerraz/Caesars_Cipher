function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let answer = "";
  for(let i = 0; i < str.length; i++){
    if(alphabet.indexOf(str[i]) === -1){
      answer += str[i]
    }else if(alphabet.indexOf(str[i]) > 12){    
      answer += alphabet[alphabet.indexOf(str[i])-13]
    }else if(alphabet.indexOf(str) <= 12) {
      answer += alphabet[alphabet.indexOf(str[i])+13]
    }
  }  
  return answer;
}