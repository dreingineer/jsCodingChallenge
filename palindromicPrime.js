const palindromicPrime = number => {
	for (let y = 2; y < number; y++) {
			if(test_prime(y) && test_palindrome(y)) console.log(y);
	}
};

const test_prime = n => {
	if (n === 1) {
			return false;
	}
	else if (n === 2) {
			return true;
	} else {
			for (let x = 2; x < n; x++) {
					if (n % x === 0) {
							return false;
					}
			}
			return true;
	}
}

const test_palindrome = n => {
	return n == n.toString().split('').reverse().join().replace(/,/g, '');
}

palindromicPrime(100);
// console.log(test_palindrome(13131));