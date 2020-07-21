let a=[1,4,9,36,78,60,32,21,12];
let sum=0;
for (let i= 0; i<a.length ;i++)
{
	if (a[i]>sum)
	sum= a[i];
}

console.log(sum);