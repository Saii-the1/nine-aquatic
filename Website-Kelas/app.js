const express = require('express'); // Memanggil library express
const app = express();
const port = 3000;

// Mengarahkan agar folder 'public' bisa diakses (tempat simpan HTML, CSS, Foto)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Halo! Ini Server Website Kelas 9A');
});

app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});