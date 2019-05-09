
Array.prototype.uniq = function() {
    const newArray = [] ;

    for (let i = 0; i < this.length; i++) {
        if(!newArray.includes(this[i])){
            newArray.push(this[i]);
        }
   
    } 
    return newArray;
};


Array.prototype.twoSum = function() {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        const num1 = this[i];
        for (let j = 0; j < this.length; j++) {
            const num2 = this[j];
            
            if ((j > i) && (num1 + num2 === 0)) {
                let pair = [i, j];
                newArray.push(pair);
            } 
        }
    }

    return newArray;
};

Array.prototype.transpose = function() {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        let row = [];

        for (let j = 0; j < this.length; j++) {
            const element = this[j][i];
            row.push(element);    
        }
        newArray.push(row);
    }
    return newArray;
};

Array.prototype.myEach = function(cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i]);   
    }
};

function plusTwo(ele) {
    return ele + 2;
}

Array.prototype.myMap = function(cb) {
    const newArray = [];

    this.myEach(function(ele) {
        newArray.push(cb(ele));
    });

    return newArray;
};


Array.prototype.myReduce = function(cb, acc) {
    let i = 0;
    
    if (acc === undefined) {
        acc = this[0];
        i++;
    }

    for ( i; i < this.length; i++) {
        acc = cb(acc, this[i]);
    }

    return acc;
};

Array.prototype.bubbleSort = function () {
    const arr = this;
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length -1; i++) {
             if (arr[i] > arr[i+1]) {
                 sorted = false;
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
             }
            
        }
    }
    return arr;
};

String.prototype.substrings = function () {
    let arr = this.split("");
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= arr.length; j++) {
            if (i < j) {
            let sub = arr.slice(i, j);
            newArr.push(sub);
            }
        }
        
    }
    return newArr;
};

function range (start, end) {
    if (start === end){
        return [end];
    }

    range(start, (end - 1));
}


