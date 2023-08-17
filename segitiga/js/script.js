function hitung()
{
    if (i1.value === '' || i1.value == null) {
        document.getElementById("h11").innerHTML = "L = 1/2 x a x t";
        document.getElementById("h12").innerHTML = "L = Hasil";
        document.getElementById("i1").value = "";
        document.getElementById("i2").value = "";
        alert("Isi Dahulu Nilai Alas dan Tinggi!");
    }
    else if (i2.value === '' || i2.value == null){
        document.getElementById("h11").innerHTML = "L = 1/2 x a x t";
        document.getElementById("h12").innerHTML = "L = Hasil";
        document.getElementById("i1").value = "";
        document.getElementById("i2").value = "";
        alert("Isi Dahulu Nilai Alas dan Tinggi!");
    }
    else{
    var a = ( document.getElementById("i1").value);
    var t = ( document.getElementById("i2").value);
    var x = 2;
    var hasil = a * t ;
    var hasill = hasil/x;
    document.getElementById("h11").innerHTML = "L = 1/2 x " + a + " x " + t;
    document.getElementById("h12").innerHTML = "L = " +  hasill;
    }
}

function reset()
{
    document.getElementById("i1").value = "";
    document.getElementById("i2").value = "";
    document.getElementById("h11").innerHTML = "L = 1/2 x a x t";
    document.getElementById("h12").innerHTML = "L = Hasil";
}

function hitung2()
{
    if (i3.value === '' || i3.value == null) {
        document.getElementById("h21").innerHTML = "K = S1 + S2 + S3";
        document.getElementById("h22").innerHTML = "K = Hasil";
        document.getElementById("i3").value = "";
        document.getElementById("i4").value = "";
        document.getElementById("i5").value = "";
        alert("Isi Dahulu Nilai Sisi!");
    }
    else if (i4.value === '' || i4.value == null){
        document.getElementById("h21").innerHTML = "K = S1 + S2 + S3";
        document.getElementById("h22").innerHTML = "K = Hasil";
        document.getElementById("i3").value = "";
        document.getElementById("i4").value = "";
        document.getElementById("i5").value = "";
        alert("Isi Dahulu Nilai Sisi!");
    }
    else if (i5.value === '' || i5.value == null){
        document.getElementById("h21").innerHTML = "K = S1 + S2 + S3";
        document.getElementById("h22").innerHTML = "K = Hasil";
        document.getElementById("i3").value = "";
        document.getElementById("i4").value = "";
        document.getElementById("i5").value = "";
        alert("Isi Dahulu Nilai Sisi!");
    }
    else{
    var sa = ( document.getElementById("i3").value);
    var du = ( document.getElementById("i4").value);
    var ti = ( document.getElementById("i5").value); 
    var hasil2 = +sa + +du + +ti;
    document.getElementById("h21").innerHTML = "K = " +  sa + " + " +  du + " + " +  ti;
    document.getElementById("h22").innerHTML = "K = " +   hasil2;
    }
}

function reset2()
{
    document.getElementById("i3").value = "";
    document.getElementById("i4").value = "";
    document.getElementById("i5").value = "";
    document.getElementById("h21").innerHTML = "K = S1 + S2 + S3";
    document.getElementById("h22").innerHTML = "K = Hasil";
}

