let angkaRahasia = Math.floor(Math.random() * 10) + 1;

function cekTebakan() {
    let tebakan = parseInt(document.getElementById("tebakan").value);
    let hasil = document.getElementById("hasil");

    if (tebakan === angkaRahasia) {
        hasil.innerHTML = "🎉 Selamat! Kamu benar!";
        hasil.style.color = "green";
        setTimeout(resetGame, 2000);
    } else if (tebakan < angkaRahasia) {
        hasil.innerHTML = "😅 Terlalu rendah, coba lagi!";
        hasil.style.color = "red";
    } else {
        hasil.innerHTML = "😅 Terlalu tinggi, coba lagi!";
        hasil.style.color = "red";
    }
}

function resetGame() {
    angkaRahasia = Math.floor(Math.random() * 10) + 1;
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("tebakan").value = "";
}