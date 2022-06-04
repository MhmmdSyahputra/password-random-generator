 var huruf = Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
 var angka = Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
 var simbol = Array("!", "@", "#", "$", "%", "^", "&", "*", "-", "=", ":", ";", "<", "?", ">", "}", "{");

 var r_hurufBesar = huruf.sort(() => Math.random() - 0.5)
 var a = huruf.sort(() => Math.random() - 0.5);
 var r_hurufKecil = a.map(name => name.toLowerCase());
 var r_angka = angka.sort(() => Math.random() - 0.5)
 var r_simbol = simbol.sort(() => Math.random() - 0.5)

 function cekPilihan() {
     var pilihan = Array();
     var cboxes = document.getElementsByName('pilihan[]');
     var len = cboxes.length;
     var failed = document.getElementById("failed");
     for (var i = 0; i < len; i++) {
         if (cboxes[i].checked) {
             pilihan.push(cboxes[i].value);
             document.getElementById("failed").innerHTML = "";
         }
         if (pilihan == "") {
             document.getElementById("failed").innerHTML = "Pilih Dahulu!";
         }
     }
     return pilihan;
 }

 function cekPanjang() {
     //menentukan panjang inputnya
     var sel = document.getElementById('panjang');
     var opt;
     for (var i = 0, len = sel.options.length; i < len; i++) {
         opt = sel.options[i];
         if (opt.selected === true) {
             break;
         }
     }
     return opt.value;
 }



 function cek() {

     var result = Array();
     for (let i = 0; i < cekPanjang(); i++) {
         //HURUF BESAR, KECIL NUMBER AND SIMBOL
         if (cekPilihan().includes("huruf_besar") && cekPilihan().includes("huruf_kecil") && cekPilihan().includes("angka") && cekPilihan().includes("simbol")) {
             var all = r_hurufBesar.concat(r_hurufKecil, r_angka, r_simbol);
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //HURUF BESAR , KECIL AND SIMBOL
         } else if (cekPilihan().includes("huruf_besar") && cekPilihan().includes("huruf_kecil") && cekPilihan().includes("simbol")) {
             var all = r_simbol.concat(r_hurufBesar, r_hurufKecil);
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //HURUF BESAR , KECIL AND ANGKA
         } else if (cekPilihan().includes("huruf_besar") && cekPilihan().includes("huruf_kecil") && cekPilihan().includes("angka")) {
             var all = r_hurufBesar.concat(r_hurufKecil, r_angka);
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //HURUF BESAR , KECIL AND ANGKA
         } else if (cekPilihan().includes("huruf_besar") && cekPilihan().includes("huruf_kecil") && cekPilihan().includes("angka")) {
             var all = r_hurufBesar.concat(r_hurufKecil, r_angka);
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //HURUF BESAR , ANGKA AND SIMBOL
         } else if (cekPilihan().includes("huruf_besar") && cekPilihan().includes("angka") && cekPilihan().includes("simbol")) {
             var all = r_hurufBesar.concat(r_angka, r_simbol);
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //HURUF KECIL , ANGKA AND SIMBOL
         } else if (cekPilihan().includes("huruf_kecil") && cekPilihan().includes("angka") && cekPilihan().includes("simbol")) {
             var all = r_hurufKecil.concat(r_angka, r_simbol);
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //HURUF BESAR AND KECIL
         } else if (cekPilihan().includes("huruf_besar") && cekPilihan().includes("huruf_kecil")) {
             var all = r_hurufBesar.concat(r_hurufKecil);
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //HURUF BESAR AND ANGKA
         } else if (cekPilihan().includes("huruf_besar") && cekPilihan().includes("angka")) {
             var all = r_hurufBesar.concat(r_angka);
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //HURUF BESAR AND SIMBOL
         } else if (cekPilihan().includes("huruf_besar") && cekPilihan().includes("simbol")) {
             var all = r_hurufBesar.concat(r_simbol);
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //HURUF KECIL AND ANGKA
         } else if (cekPilihan().includes("huruf_kecil") && cekPilihan().includes("angka")) {
             var all = r_hurufKecil.concat(r_angka);
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //HURUF KECIL AND SIMBOL
         } else if (cekPilihan().includes("huruf_kecil") && cekPilihan().includes("simbol")) {
             var all = r_hurufKecil.concat(r_simbol);
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //ANGKA AND SIMBOL
         } else if (cekPilihan().includes("angka") && cekPilihan().includes("simbol")) {
             var all = r_angka.concat(r_simbol);
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //HURUF BESAR
         } else if (cekPilihan().includes("huruf_besar")) {
             var all = r_hurufBesar
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //HURUF KECIL
         } else if (cekPilihan().includes("huruf_kecil")) {
             var all = r_hurufKecil;
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //SIMBOL
         } else if (cekPilihan().includes("simbol")) {
             var all = r_simbol
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

             //ANGKA
         } else if (cekPilihan().includes("angka")) {
             var all = r_angka
             var rest = all.sort(() => Math.random() - 0.5)
             result.push(rest[i]);

         }

     }
     for (let index = 0; index < result.length; index++) {
         document.getElementById("result").innerHTML = result.join("")

     }
 }