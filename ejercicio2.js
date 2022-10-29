// 2.Rearrange this array with the values from smallest to largest without using the sort method,
// Ex: input [1,4,5,12,7,23,12,12] output: [1,2,4,7,12,12,23].

const sort = (numbers) => {

    for( let i=0 ; i<numbers.length ; i++ ) {
        
        for( let j=0 ; j<numbers.length ; j++ ) {

            if( numbers[j] >= numbers[j+1] ) {
                auxNum = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = auxNum;
            }
            
        }

    }
    
    return numbers;
}

let array = sort( [1,4,5,12,7,23,12,12] );

for( let i=0 ; i<array.length ; i++ ) {
    console.log(array[i] + ", ");
}