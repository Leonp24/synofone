<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
// use App\Models\Produk;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
class ProdukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $response ="https://source.unsplash.com/featured/?phone"; // Ganti URL API sesuai dengan penyedia gambar yang Anda pilih

        // Data untuk kategori_id
        $kategoriIds = [1, 2, 3];

        // Generate data untuk tabel produks
        $produks = [];

        // Isi data produks
        for ($i = 0; $i < 10; $i++) { // Ganti 10 dengan jumlah data yang Anda inginkan

            $produks[] = [
                'title' => 'Produk ' . ($i + 1),
                'kategori_id' => rand(1,3), // Kategori ID random antara 1 hingga 3
                'gambar' => $response, // Gambar diambil dari API secara bergantian
                'spesifikasi' => 'Spesifikasi produk ' . ($i + 1),
                'harga' => rand(1000000, 10000000), // Harga random antara 1 juta hingga 10 juta
                'stok' => rand(1, 100), // Stok random antara 1 hingga 100
            ];
        }

        // Insert data ke dalam tabel produks
        DB::table('produks')->insert($produks);
    }
}
