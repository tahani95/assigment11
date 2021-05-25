function isEven(value){
    if(value%2 == 0){
        return true;
    }
    else{
        return false;
    }
    }
    // if you want run code
    // alert(isEven(5));
    
    function getodd(items){
       
       let odd=items.filter(items =>{ return isEven(items)==0;
    
       })
        //    another solution
        // let m=items.length;
        // for(let i=0;i<m;i++){
        //     if(isEven(items[i])==0){
        //         odd.push(items[i]);
        //     }
        // }
    
            
     document.write(odd);
    }
    // if you want run code
    // let arr=[6,13,18,9,2];
    
    // getodd(arr);
    function getMax(Max){
        let largest=Max[0];
    for(let i=0;i<Max.length;i++){
      if(largest<=Max[i]){
          largest=Max[i];
      }
    }
     alert("The largest number"+largest);
    }
    // getMax(arr);
    function stringContains(string1,string2){
        if( string1.includes(string2)){
            return true;
    
        }
        return false;
    }
    // if you want run code
    // let secname="farahhani";
    // let firstname="farah";
    // alert(stringContains(secname,firstname));
    
    function capitalizeWords(string){
        let toarray=string.split(" ");
       let nw= toarray.map((word) =>{return word[0].toUpperCase()+word.substring(1);})
       join(" ");
         return nw;
    }
    // let names="farah hani";
    // console.log(capitalizeWords(names));
    function arrayContains(array1,array2){
        let count=0;
        for(let i=0;i<array2.length;i++){
         if(array1.includes(array2[i])){
             count++
         }
     }   
     if(count==array2.length){
         return (true);
     }
     return (false);
    
    }
    // let array1=[2,8,9,"farah"];
    // let array2=[2,8,10];
    // alert(arrayContains(array1,array2));
    function getSequence(number){
        let sequence=[number];
        if(number>0){
            for(number;number>0;number--){
            let newnumber=number-1;
            sequence.unshift(newnumber);
        }
        }
        else if(number<0){
        for(number;number<0;number++){
        let newnumber1=number+1;
        sequence.unshift(newnumber1);}}
        return sequence;
    }
    // alert(getSequence(-5));
    function getSlug(string){
        let toarray=string.split(" ");
        // let ne=lowerstring.toLowerCase();
       let letter= toarray.map((lowerstrin) =>{ return lowerstrin.toLowerCase()});
       let tostring=letter.join("-");
        return tostring;
    }
    // consolelog(etSlug("FMKDF LEJFLK"));
    