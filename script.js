const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (nums, k) => {
    const res=[];

    let sum=0;
    let start=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];

        if(sum>k){
            res.push(...nums.slice(start,i));
            sum=nums[i];
            start=i;
        }
    }
    if(start<nums.length) res.push(...nums.slice(start));

    return res;
};


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
