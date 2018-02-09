const nums = process.argv.slice(2);

console.log(nums.reduce( (a,b) => { return parseInt(a) + parseInt(b);}))