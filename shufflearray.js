function arrayone (arr)
{
    let a = '';
    for (let i = 0; i < arr.length; i++)
    {
        a += arr[i] + " ";
    }
    console.log(a);
}
 
function arraytwo (arr)
{
 
    for (let i = arr.length - 1; i > 0; i--)
    {
     
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
arraytwo (arr);
arrayone(arr)