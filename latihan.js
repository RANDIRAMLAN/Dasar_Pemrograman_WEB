
/* Aler, prompt dan Confirm pada while */
alert("Selamat Datang");
var lagi =true;
while (lagi === true) {
    var identitas =prompt("Nama anda ?");
    alert("hai"+ " "+ identitas);
    lagi= confirm("masih mau ?")
}

alert("Thanks");

/* latihan while : untuk looping data */

var nomorAngkot =1;

while (nomorAngkot <= 10) {
    console.log("Angkot No "+nomorAngkot+" beroperasi dengan baik");
    nomorAngkot++;
}


/* latihan for dan IF else. For digunakan untuk menampilkan data dari berbagai macam  bentuk tampilan saat looping data   */

for (var z = 1; z<=10 ; z++) {
if (z <= 6) {
    console.log("Angkot No. "+z+" Beroperasi dengan baik");
    if (z % 2 == 0) {
        console.log("Angkot nomor genap")
    } else {
        console.log("Angkot nomor ganjil")
    }
} else {
    console.log("Angkot No. "+z+" Sedang tidak beroperasi");
    if (z % 2 == 0) {
        console.log("Angkot nomor genap")
    } else {
        console.log("Angkot nomor ganjil")
    } 
}   
}

/* Latihan IF else if : untuk membuat berbagai kondisi*/
var angka = prompt("Masukan angka :");
if (angka % 2 == 0 ) {
    alert("Bilangan genap");
} else if (angka % 2 == 1){
    alert("Bilangan ganjil")
} else {
    alert("Bukan bilangan genap atau ganjil");

}

for (var z = 1; z<=10 ; z++) {
    if (z <= 6 && z !== 5) {
        console.log("Angkot No. "+z+" Beroperasi dengan baik");
       
    } else if (z === 8 || z === 10 || z == 5){
        console.log("Angkot No. "+z+" Sedang Lembur");
    } else {
        console.log("Angkot No. "+z+" Sedang tidak beroperasi")
    } 
    
}

/* Latihan Menjadikan angka yang diinput menjadi integer */

var y = parseInt (prompt ("masukkan angka :"));

if (y === 1) {
    console.log("angka 1");
} else if (y === 2 ){
    console.log("angka 2");
} else if ( y === 3 ) {
    console.log("angka 3");
}else {
    console.log("bukan angka yang dimaksud");
}

/* latihan switc : digunakan untuk mengambi data / menampilkan data yang sudah di list */

var x = prompt ("Masukan makanan/minuman : \n ( Contoh : Nasi, Daging, Susu, Burger dan Softdrink)")

switch (x) {
    case "Nasi":
        alert("Makanan/Minuman sehat");
        break;
    case "Daging":
        alert("Makanan/Minuman sehat");
        break;
    case "Susu":
        alert("Makanan/Minuman sehat");
        break;
    case "Burger":
        alert("Makanan/Minuman tidak sehat");
        break;
    case "Softdrink":
         alert("Makanan/Minuman tidak sehat");
        break;

    default:
        alert("Anda memasukkan makanan/minuman yang tidak ada dalam list");
        break;
}

/* Kotak 5x5 Bintang */
var s = "";
for (var w = 0; w < 5; w++){
    for (var v = 0; v < 5; v++){
        s += "*";
    }
s += "\n";
}
console.log(s);

/* segitiga  Bintang */
var s = "";
for (var w = 0; w < 5; w++){
    for (var v = 0; v <= w; v++){
        s += "*";
    }
s += "\n";
}
console.log(s);

/* segitiga  Bintang  Terbalik*/
var s = "";
for (var w = 5; w > 0; w--){
    for (var v = 0; v < w; v++){
        s += "*";
    }
s += "\n";
}
console.log(s);

// Membuat function menghitung 2 volume kubus


function rumusVolumeDuaKubus(a,b) {
        
    var v1;
    var v2;
    var total;

    v1= a * a * a;
    v2= b * b * b;

    total = v1+v2;

    return total;

}

// Memanggil funcion 
console.log(rumusVolumeDuaKubus (2,3));
console.log(rumusVolumeDuaKubus (10,4));


// function tambah
function tambah(a,b) {
    return a + b;
}
var a = parseInt (prompt("Masukkan angka pertama :"));
var b = parseInt (prompt ("Masukkan angka kedua :"));
var hasil = tambah(a,b);
alert("Hasilnya adalah "+hasil);

function tambahArray() {
    hasil = 0;
    for ( var i = 0; i < arguments.length; i++) {
        hasil += arguments [i];
    }
    return hasil;
}

var coba = tambahArray(1,2,3,4,5,6,7,);
console.log(coba);

// Rekursif : memanggil diri sendiri dalam function, menggantikan looping dll
function cetakMundur(n) {
    if (n === 0) 
    return;
    {
      console.log(n);
      return cetakMundur(n-1);
    } 
 }
 
  n = cetakMundur ( parseInt= prompt("Masukkan angka :"))
 
 
  function faktorial(n) {
      if (n === 0) {
         return 1; 
      }
       
         return  jumlah = n * faktorial (n-1);
  }
 
  faktorial (5);
  console.log(jumlah);


  // funcuion expression 

var tampilPesan = function (nama) {   //Deklarasi dulu 
    alert (" haii" + nama);
}

tampilPesan (Randi); // baru di pangil

// 1. menambah array 

var arr = [];
arr [0] = "randi";
arr [1] = "ramlab";
arr [2] = "dg";
arr [3] = "lewa";

console.log(arr[3]);

// 2. menghapus isi array

var arr = ["randi", "ramlan","dg","lewa"];
arr [3] = undefined;
console.log(arr);

// 3. menampilkan array degan length
var arr = ["randi", "ramlan","dg","lewa"];
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// method array join
var arr = ["randi", "ramlan","dg","lewa"];
console.log(arr.join(" "));

// method (tambah/hapus) pada  array

var arr = ["randi", "ramlan","dg","lewa"];
arr.push ("Tinggal","di Makassar"); // menambah pada akhir array
arr.pop(); // menghapus pada akhir array
arr.unshift ("Manis"); // menambah pada awal array
arr. shift(); // menghapus pada awal array
console.log(arr.join(" "));

// splice pada array
// rumus splice (indexawal,maudihapusberpa, elemenbaru, elemenbaru, ....)
var arr = ["randi", "ramlan","dg","lewa"];
arr.splice(0,0, "nama"); 
console.log(arr.join(" "));

// slice pada array
// rumus slice (awal,akhir)
var arr = ["randi", "ramlan","dg","lewa"];
var arr2 = arr.slice (0,2);
console.log(arr2.join(" "));


// forEach digunakan untuk looping array dg syntax lebih sedikit dari for

var angka = ["1","2","3"];

angka.forEach (function (e) {
    console.log(e);
});

// map digunakan untuk looping dan dapat mengembalikan nilai

var angka = ["1","2","3", "5", "4"];
var angka2 = angka.map(function (e) {
    return e * 3 ;
})
console.log (angka2.join(" "));


// sort untuk mengurutkan array

var angka = ["1","2","3", "5", "4"];
angka.sort();
console.log(angka.join(",")); 

// Membuat object
//  - contoh object literal 

var mhs1 = {
    nama : "randi ramlan",
    umur : 29,
    alamat : {
        Kampung : "jingaraka",
        desa : "Taeng",
        kab : "gowa"

    }
}


// - contoh dengan function declaration

function buatObjectMahasiswa(nama,umur,alamat) {
    var mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.alamat = alamat;
    return mhs;
    
}

var mhs2 = buatObjectMahasiswa ("ramlan",53,"jingaraka");

// membuat object dengan conctructor

function Mahasiswa (nama, umur, alamat){
    this.nama = nama;
    this.r = umur;
    this.alamumuat = alamat;
}

var mhs3 = new Mahasiswa ("riska", 13, "jungaraka");
