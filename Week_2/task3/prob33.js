
function sumCSV(s)
{
  let sum=0;
  let ds =s.split(",").map(val=>+val);
  for(var i=0;i<ds.length;i++){
      sum+=ds[i];
  }
		return sum;
}
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"))'