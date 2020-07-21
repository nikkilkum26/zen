let a=[1,4,9,36,78,60,32,21,12];
let s=0;
for (let i= 0; i<a.length ;i++)
{
	if (a[i]>s)
	s= a[i];
}

console.log(s);
