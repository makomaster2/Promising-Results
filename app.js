// slowMath
// 	.add(6, 2)
// 	.then(result => {
// 		console.log(result);
// 		return slowMath.multiply(result, 2);
// 	})
// 	.then(result => {
// 		console.log(result);
// 		return slowMath.divide(result, 4);
// 	})
// 	.then(result => {
// 		console.log(result);
// 		return slowMath.subtract(result, 3);
// 	})
// 	.then(result => {
// 		console.log(result);
// 		return slowMath.add(result, 98);
// 	})
// 	.then(result => {
// 		console.log(result);
// 		return slowMath.remainder(result, 2);
// 	})
// 	.then(result => {
// 		console.log(result);
// 		return slowMath.multiply(result, 50);
// 	})
// 	.then(result => {
// 		console.log(result);
// 		return slowMath.remainder(result, 40);
// 	})
// 	.then(result => {
// 		console.log(result);
// 		return slowMath.add(result, 32);
// 	})
// 	.then(result => {
// 		console.log(`The final result is ${result}!`);
// 	})
// 	.catch(err => {
// 		return console.log(err);
// 	});

let doMath = async function () {
	try {
		let result = await slowMath.add(6, 2);
		$('.problems').append(`<th>6 + 2</th>`);
		$('.solutions').append(`<td>${result}</td>`);
		console.log(result);

		$('.problems').append(`<th>${result} * 2</th>`);
		result = await slowMath.multiply(result, 2);
		$('.solutions').append(`<td>${result}</td>`);
		console.log(result);

		$('.problems').append(`<th>${result} / 4</th>`);
		result = await slowMath.divide(result, 4);
		$('.solutions').append(`<td>${result}</td>`);
		console.log(result);

		$('.problems').append(`<th>${result} - 3</th>`);
		result = await slowMath.subtract(result, 3);
		$('.solutions').append(`<td>${result}</td>`);
		console.log(result);

		$('.problems').append(`<th>${result} + 98</th>`);
		result = await slowMath.add(result, 98);
		$('.solutions').append(`<td>${result}</td>`);
		console.log(result);

		$('.problems').append(`<th>${result} % 2</th>`);
		result = await slowMath.remainder(result, 2);
		$('.solutions').append(`<td>${result}</td>`);
		console.log(result);

		$('.problems').append(`<th>${result} * 50</th>`);
		result = await slowMath.multiply(result, 50);
		$('.solutions').append(`<td>${result}</td>`);
		console.log(result);

		$('.problems').append(`<th>${result} % 40</th>`);
		result = await slowMath.remainder(result, 40);
		$('.solutions').append(`<td>${result}</td>`);
		console.log(result);

		$('.problems').append(`<th>${result} + 32</th>`);
		result = await slowMath.add(result, 32);
		$('.solutions').append(`<td>${result}</td>`);
		console.log(`The final result is ${result}!`);
	} catch (err) {
		console.log(err);
	}
};

doMath();
