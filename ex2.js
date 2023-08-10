//1
function promBack() {
	return new Promise((resolve, reject) => {
		resolve("succes");
	});
}
// promBack()
// .then(res => {console.log(res)})

//2
function nameBack(first, last) {
	const fullName = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(first + " " + last);
		}, 1000);
	});
	return fullName;
}
// nameBack('David', 'Rubin')
// .then((res) => console.log(res))

//3
function addFive(num) {
	const nweNum = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num + 5);
		}, 500);
	});
	return nweNum;
}

function multiplyTwo(num) {
	const nweNum = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num * 2);
		}, 500);
	});
	return nweNum;
}

function minusTen(num) {
	const nweNum = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num - 10);
		}, 500);
	});
	return nweNum;
}

// addFive(5)
// .then(num => multiplyTwo(num))
// .then(num => minusTen(num))
// .then(num => console.log(num))

//4

function deviding(num1, num2) {
	const nweNum = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (num2 == 0) {
				reject(new Error("not possible to divide in 0!"));
			} else {
				resolve(num1 / num2);
			}
		}, 500);
	});
	return nweNum;
}
// deviding(10, 2)
// 	.then((result) => console.log(result))
// 	.catch((err) => console.log(err.message));

//5
function nameBack1(first, last) {
	const fullName = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(first + " " + last);
		}, 1000);
	});
	return fullName;
}
async function getAsync() {
	const result = await nameBack1("David", "Rubin");
	console.log(result);
}

// getAsync();

//5.1
async function numbers() {
	const add = await addFive(5);
	const multiply = await multiplyTwo(add);
	const minus = await minusTen(multiply);
	console.log(minus);
}
numbers();

//6
async function devidAsync(num1, num2) {
	try {
		const result = await deviding(num1, num2);
		console.log(result);
	} catch (err) {
		console.log(err.message);
	}
}
devidAsync(7, 0);
