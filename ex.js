function multiplyNum(num1, num2, num3) {
	const resnum1 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num1 * 2);
		}, 1000);
	});
	const resnum2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num2 * 2);
		}, 1000);
	});
	const resnum3 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num3 * 2);
		}, 1000);
	});
	return [resnum1, resnum2, resnum3];
}
Promise.all(multiplyNum(4, 7, 9)).then((arr) => console.log(arr));


function multiplyarry(array) {
    const newArray = [];
    array.forEach(num => {
        const prom = new Promise((resolve, reject) => {
            if (num > 0) {
                resolve(num * 2);
            } else {
                reject("num must be bigger than zero");
            }

        });  
        newArray.push(prom);   
    });
    console.log(newArray);
    return newArray;   
}


Promise.allSettled(multiplyarry([2,3,4,-2,5]))
    .then(arry => {console.log(arry);})