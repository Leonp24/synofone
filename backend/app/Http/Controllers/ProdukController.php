<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produk;
class ProdukController extends Controller
{
    public function index()
    {
        $produks = Produk::all();
        return response()->json([
            'status' => 'success',
            'data' => $produks
        ]);
    }
    public function show($id)
    {
        $produk = Produk::find($id);
        if ($produk) {
            return response()->json([
                'status' => 'success',
                'data' => $produk
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Produk not found'
            ], 404);
        }
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'nama' => 'required',
            'harga' => 'required',
            'stok' => 'required'
        ]);
        $produk = Produk::create([
            'nama' => $request->nama,
            'harga' => $request->harga,
            'stok' => $request->stok
        ]);
        return response()->json([
            'status' => 'success',
            'data' => $produk
        ]);
    }
    public function update(Request $request, $id)
    {
        $produk = Produk::find($id);
        if ($produk) {
            $this->validate($request, [
                'nama' => 'required',
                'harga' => 'required',
                'stok' => 'required'
            ]);
            $produk->nama = $request->nama;
            $produk->harga = $request->harga;
            $produk->stok = $request->stok;
            $produk->save();
            return response()->json([
                'status' => 'success',
                'data' => $produk
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Produk not found'
            ], 404);
        }
    }
    public function destroy($id)
    {
        $produk = Produk::find($id);
        if ($produk) {
            $produk->delete();
            return response()->json([
                'status' => 'success',
                'message' => 'Produk deleted'
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Produk not found'
            ], 404);
        }
    }
    
}
