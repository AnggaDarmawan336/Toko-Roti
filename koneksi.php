<?php 

$host = "localhost";
$user = "root";
$pass = "@Shakakala24";
$db = "toko_roti"; 

$koneksi = mysqli_connect($host, $user, $pass, $db);

	if (!$koneksi) {
		die("Koneksi Gagal:".mysqli_connect_error());
	}
 ?>
