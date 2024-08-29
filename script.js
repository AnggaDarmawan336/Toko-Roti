function cekform(){
    username = document.getElementById('username');
    password = document.getElementById('password');
    if (username.value == ''){
        alert('username tidak boleh kosong');
        username.focus();
        return false;
    }  else if (password.value == ''){
        alert('password tidak boleh kosong');
        password.focus();
        return false;
    }
}

function cekformregister(){
    username = document.getElementById('username');
    password = document.getElementById('password');
    nama_lengkap = document.getElementById('nama_lengkap');
    alamat = document.getElementById('alamat');
    hp = document.getElementById('hp');

    if (username.value == ''){
        alert('username tidak boleh kosong');
        username.focus();
        return false;
    }  else if (password.value == ''){
        alert('password tidak boleh kosong');
        password.focus();
        return false;
    }  else if (nama_lengkap.value == ''){
        alert('nama tidak boleh kosong');
        nama_lengkap.focus();
        return false;
    }  else if (alamat.value == ''){
        alert('alamat tidak boleh kosong');
        alamat.focus();
        return false;
    }  else if (hp.value == ''){
        alert('Nomor hp tidak boleh kosong');
        hp.focus();
        return false;
    }  else if (tgl.value == ''){
        alert('tanggal lahir tidak boleh kosong');
        tgl.focus();
        return false;
    } 
}

function cekformtambah(){
    nama_menu = document.getElementById('nama_menu');
    jenis_menu = document.getElementById('jenis_menu');
    stok = document.getElementById('stok');
    harga = document.getElementById('harga');
    gambar = document.getElementById('gambar');
    if (jenis_menu.value == ''){
        alert('Jenis menu tidak boleh kosong');
        jenis_menu.focus();
        return false;
    }  else if (nama_menu.value == ''){
        alert('Nama menu tidak boleh kosong');
        nama_menu.focus();
        return false;
    }  else if (stok.value == ''){
        alert('Stok tidak boleh kosong');
        stok.focus();
        return false;
    }  else if (harga.value == ''){
        alert('Harga tidak boleh kosong');
        harga.focus();
        return false;
    }  else if (gambar.value == ''){
        alert('Gambar tidak boleh kosong');
        gambar.focus();
        return false;
    } 

}