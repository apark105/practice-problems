
function sumArray(numArray){
    var sumStorage = 0;
    numArray.forEach(item => {
        sumStorage += item; 
    }); 
    return sumStorage
}

function fitWithinVal(numArray, totalAmt){
    var validSumArray = []; 
    var validAmt = 0; 
    if ( numArray[0] === totalAmt ) {
        validSumArray.push(numArray[i]); 
        return validSumArray;
    }
    for (var i = 0; i < numArray.length; ) {
        var testVal = validAmt + numArray[i] 
        if (validAmt === totalAmt) {
            return validSumArray; 
        }
        else if ( testVal < totalAmt ) {
            validSumArray.push(numArray[i]) 
            validAmt = testVal
            i++
        }
        else if ( testVal > totalAmt ) {
            while ( testVal > totalAmt ) {
                ++i 
                testVal = validAmt + numArray[i]
            }
            if ( testVal <= totalAmt  ) {
                validSumArray.push(numArray[i]) 
                validAmt = testVal
            }
            else {
                return validSumArray
            }
        }
    }
    return validSumArray
}

function getAllNamesShorterThan(nameArray, limit){
    var validNameArray = []; 
    for (var i=0; i<nameArray.length; i++) {
        if ( nameArray[i].length <= limit ) {
            validNameArray.push(nameArray[i]);
        }
    }
    return validNameArray;
}

function makeLabel(){

}
