// Tugas hari ini 
/* 1. Membuat perhitungan matematika 
- Luas Lingkaran 
- Luas segitiga 
- Luas Persegi panjang 
- Luas jajargenjang 
2. Menghitung total gaji yang di dapat dalam satu bulan dengan input minimal : 
- Nama karyawan 
- Gaji perhari 
- Jumlah hari masuk kerja
**/

// Nomor 1
// const luasLingkaran = (r) => Math.PI * r * r
    

// Nomor 2
// console.log(luasLingkaran(2))

// Nomor 3
// const luasSegitiga = (alas, tinggi) => 0.5 * alas * tinggi 


// console.log(luasSegitiga(16, 10))

// Nomor 4
// const persegiPanjang = (panjang, lebar) =>  panjang * lebar

// console.log(persegiPanjang(10, 8))

// Nomor 5
// const persegiPanjang = (alas, tinggi) =>  alas * tinggi

// console.log(persegiPanjang(10, 8))



//  Tugas 2

// const gajiKaryawan = (nama, gajiHarian, jmlMasuk) => {
//     const name = nama
//     const gaji = gajiHarian * jmlMasuk
//     const bulan = 30
//     if(jmlMasuk <= bulan){

//         return `nama: ${name}. gaji yang didapat bulan ini: ${gaji}`
        
//     }else{
//         console.log('inputan salah')
//     }

// }

// 

// let hitungGaji = (gaji, hari) => {
//     const bulan = 30;

//     if (hari <= bulan && gaji > 0 && hari > 0) {
//         return gaji * hari;
//     } else {
//         return -1; // Mengembalikan nilai negatif jika input tidak valid
//     }
// }

// let gajiKaryawan = (nama, gajiHarian, jmlMasuk) => {

//     let totalGaji = hitungGaji(gajiHarian, jmlMasuk);

//     if (totalGaji >= 0) {
//         return(`Karyawan ${nama} mendapatkan gaji sebanyak Rp ${totalGaji.toLocaleString('id-ID')}  pada bulan ini.`);
//     } else {
//         return('Inputan tidak valid. Pastikan gaji dan jumlah hari masuk merupakan angka positif dan jumlah hari masuk tidak melebihi 30.');
//     }
// }

// console.log(gajiKaryawan('Diyo', 500000, 13))

// const x = [3, 5, 12];
// let total = 0;

// for (let i = 0; i < x.length; i++) {
//     total = total + x[i]
   
// }


// console.log('Nilai nya adalah 20 karena ' + x[0] + ' + ' + x[1] + ' + ' + x[2] + ' = ' + total);
