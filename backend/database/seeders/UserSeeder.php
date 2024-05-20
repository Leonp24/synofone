<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@testing.com',
            'password' => bcrypt('admin123'),
            'role' => 1,
            'alamat' => 'Jl. Jalan No. 1',
            'kontak' => '081234567890'
        ]);

        
    }
}
