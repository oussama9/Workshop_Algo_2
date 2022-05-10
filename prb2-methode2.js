function findSum(A, B)
{
    let hash = new Map();
    
    // Insert elements of A[] into
    // unordered_map
    for(let i = 0; i < A.length; i++)
    {
        if (!hash.has(A[i]))
        {
            hash.set(A[i], 1);
        }
        else
        {
            hash.set(A[i], hash.get(A[i]) + 1);
        }
    }
    
    // Insert elements of B[] into
    // unordered_map
    for(let i = 0; i < B.length; i++)
    {
        if (!hash.has(B[i]))
        {
            hash.set(B[i], 1);
        }
        else
        {
            hash.set(B[i], hash.get(B[i]) + 1);
        }
    }
    
    // Calculate overlapped sum
    let sum = 0;
    for(let [key, value] of hash.entries())
    {
        if(value == 2)
        {
            sum += key * 2;
        }
    }
    return sum;
}
 

let A = [ 5, 4, 9, 2, 3 ];
let B = [ 2, 8, 7, 6, 3 ];
 

 
document.write(findSum(A, B));