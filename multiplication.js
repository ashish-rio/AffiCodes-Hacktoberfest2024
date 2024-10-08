 Multiplication Table Up to a Range in Javascript

/*  a multiplication table
upto a range */


const number = parseInt(prompt('Enter an integer: '));


const range = parseInt(prompt('Enter a range: '));

//creating a multiplication table
for(let i = 1; i <= range; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

Output

Enter an integer: 7
Enter a range: 5
7 * 1 = 7
7 * 2 = 14
7 * 3 = 21
7 * 4 = 28
7 * 5 = 35
