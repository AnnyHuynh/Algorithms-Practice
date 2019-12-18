//Cracking the Coding Interview 1.5 page 91
//There are three types of edit that can performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a fuction to check if they are edit (or zero edits) away. 
//pale, ple -> true; pales, pale -> true; pale, bale -> true; pale, bake -> false;

function isEdited(in1, in2){
  let arr1 = in1.split('');
  let len1 = arr1.length;
  let arr2 = in2.split('');
  let len2 = in2.length;
  console.log(len1);
  console.log(len2);
  let map = {};
  let k = 0;
  let i = 0;
  let j = 0;
  if(len1 === 0 && len2 === 0) return true;
  if((len1 - len2 >= 2) || (len1 -len2 <= -2)) return false;
  for(k; k < len1; k++){
    if(!map[arr1[k]]){
      map[arr1[k]] = 1;
    }else{
      map[arr1[k]] += 1;
    }
  }
  //remove & insertion:
  console.log(len1 - len2);
  if(len1 > len2 && len1 - len2 === 1){
    while(i < len2){
      if(!map[arr2[i]]){
        return false;
      } else{
       delete map[arr2[i]];
       i++;
      }
    }
    return Object.keys(map).length === 1;
  }else if(len1 < len2 && len2 - len1 === 1){
    while(i < len2){
      if(map[arr2[i]]){
        delete map[arr2[i]];
      }else{
        i++;
      }
    }
    return Object.keys(map).length === 0;
  } else if(len1 === len2){    //replace:
    while(j < len2){
      if(map[arr2[j]]){
        delete map[arr2[j]];
      }else{
        j++;
      }
    }
    return Object.keys(map).length === 1;
  }
}
console.log(isEdited('pale', 'ple'));
console.log(isEdited('pale', 'pales'));
console.log(isEdited('pale', 'bale'));
console.log(isEdited('pale', 'bake'));