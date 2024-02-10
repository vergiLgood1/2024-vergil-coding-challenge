// vergil challenge 2024
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// Cara barbar ()

// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     let rna = ''

//     for (i = 0; i < dna.length; i++) {

//         if (dna[i] === 'T') {

//             rna += "U"

//         } else {

//             rna += dna[i]
//         }
//     }
//     return rna
// }

// Menggunakan hire order function

// const DNAtoRNA = dna => dna.split('').map((el => el === 'T' ? 'U' : el)).join('')

const DNAtoRNA = dna => dna.split('T').join('U')


// Menggunakan reguler expression
// Cara 1

// const DNAtoRNA = dna => dna.replace(/T/g, 'U')

// Cara 2
// const DNAtoRNA = dna => dna.replaceAll('T', 'U')

console.log(DNAtoRNA("GCAT"))