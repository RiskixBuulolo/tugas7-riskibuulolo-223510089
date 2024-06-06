<template>
  <div>
    <h1>Tentang Aplikasi</h1>
    <p>
      Selamat datang di aplikasi Todo List, sebuah alat yang kuat dan intuitif yang dirancang untuk membantu Anda mengelola tugas sehari-hari dengan efisien. Dibangun dengan Vue 3 dan Pinia, aplikasi ini menawarkan pengalaman yang mulus bagi pengguna untuk menjaga catatan tugas mereka, memastikan tidak ada yang terlewatkan.
    </p>
    <p>
      Aplikasi Todo List kami sempurna untuk semua orang, mulai dari profesional yang sibuk mengelola tugas kerja hingga pelajar yang melacak tugas dan tujuan pribadi. Antarmuka yang ramah pengguna dan fitur-fitur canggih membuat manajemen tugas menjadi sederhana dan menyenangkan.
    </p>
    <h2>Fitur Utama</h2>
    <ul>
      <li><strong>Antarmuka Sederhana dan Intuitif:</strong> Tambahkan, edit, dan hapus tugas dengan mudah hanya dalam beberapa klik.</li>
      <li><strong>Pembaruan Real-time:</strong> Perubahan pada tugas Anda langsung tercermin, memastikan Anda selalu memiliki informasi terbaru.</li>
      <li><strong>Kategorisasi Tugas:</strong> Atur tugas Anda berdasarkan kategori, memudahkan Anda untuk memprioritaskan dan mengelola beban kerja.</li>
      <li><strong>Pelacakan Penyelesaian:</strong> Tandai tugas sebagai selesai dan lihat kemajuan Anda secara sekilas.</li>
      <li><strong>Desain Responsif:</strong> Akses daftar tugas Anda dari perangkat apapun, baik itu desktop, tablet, atau ponsel.</li>
    </ul>
    <h2>Tumpukan Teknologi</h2>
    <p>
      Aplikasi Todo List ini memanfaatkan teknologi web modern untuk memberikan solusi yang berkinerja tinggi dan dapat diskalakan:
    </p>
    <ul>
      <li><strong>Vue 3:</strong> Kerangka kerja JavaScript progresif untuk membangun antarmuka pengguna, dikenal karena kesederhanaan dan fleksibilitasnya.</li>
      <li><strong>Pinia:</strong> Pustaka manajemen status untuk Vue 3, menyediakan cara intuitif dan aman tipe untuk mengelola status aplikasi.</li>
      <li><strong>JavaScript/ES6:</strong> Standar terbaru dalam JavaScript memastikan fungsionalitas yang kuat dan kompatibilitas di semua platform.</li>
      <li><strong>HTML5 & CSS3:</strong> Tulang punggung konten dan desain web, memastikan pengalaman pengguna yang modern dan elegan.</li>
    </ul>
    <h2>Mengapa Memilih Aplikasi Todo List Kami?</h2>
    <p>
      Di dunia yang serba cepat ini, aplikasi Todo List kami menonjol sebagai pendamping yang andal untuk mengelola tugas Anda. Apakah Anda sedang mengatur tanggung jawab kerja, proyek pribadi, atau sekadar mencoba tetap terorganisir, aplikasi kami menyediakan alat yang Anda butuhkan untuk tetap di atas segalanya. Rasakan ketenangan pikiran yang datang dengan memiliki daftar tugas yang terorganisir dan dapat dikelola dengan baik.
    </p>
    <p>
      Terima kasih telah memilih aplikasi Todo List kami. Kami berkomitmen untuk terus meningkatkan dan menyambut umpan balik Anda untuk membuat alat ini menjadi lebih baik lagi. Tetap produktif dan terorganisir dengan aplikasi Todo List kami!
    </p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
h1 {
  color: #007bff;
  margin-bottom: 20px;
}

h2 {
  color: #056ddc;
  margin-top: 20px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  line-height: 1.5;
  color: whitesmoke;
  margin-bottom: 20px;
}

ul {
  margin-bottom: 20px;
  padding-left: 20px;
  
}

li {
  font-size: 16px;
  line-height: 1.5;
  color: whitesmoke;
  margin-bottom: 10px;
}

strong {
  color: white;
}
</style>
