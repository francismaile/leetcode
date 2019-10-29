/**
 * @param {number} x
 * @param {number} n
 * @return {number}

 */

var myPow = function(x, n) {
  if(x===1 || x===0) return x;
	if(n===0) return 1;
	let exp = Math.abs(n);
  let pow = x;
	while(--exp){
		pow = pow * x;
		if(pow >= Number.MAX_VALUE || pow === 0) return x < 0 ? -1 : 0;
	}
	return n > 0 ? pow : 1 / pow
}

console.log(myPow(12, 2));
