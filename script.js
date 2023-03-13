function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  //console.log(alphabet) 
  let answer = [];
  let strArray = str.split("");
  //console.log(alphabet.indexOf(strArray[4]))
  //console.log(strArray);
  //console.log(alphabet.length)
  for(let i = 0; i < strArray.length; i++){
    //console.log(alphabet.indexOf(strArray[i]))
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

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));