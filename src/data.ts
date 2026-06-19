import { MaterialItem, VideoCategory } from "./types";

export const materialsData: MaterialItem[] = [
  {
    id: "pola-bilangan",
    title: "Pola Bilangan",
    category: "Dasar Aljabar",
    shortDesc: "Menemukan keteraturan dalam barisan angka dan merumuskan suku ke-n.",
    fullContent: [
      "Pola bilangan adalah susunan angka yang memiliki aturan atau bentuk tertentu yang teratur.",
      "Memahami pola bilangan membantu kita menumbuhkan kemampuan berpikir logis dan analitis untuk memecari rumus dari fenomena berulang.",
      "Ada bermacam-macam pola bilangan, misalnya: pola bilangan ganjil (1, 3, 5, ...), genap (2, 4, 6, ...), persegi (1, 4, 9, ...), persegi panjang (2, 6, 12, ...), segitiga (1, 3, 6, 10, ...), dan Fibonacci (1, 1, 2, 3, 5, 8, ...)."
    ],
    formula: "Suku ke-n Aritmetika: Un = a + (n - 1)b  |  Suku ke-n Geometri: Un = a * r^(n-1)",
    example: {
      question: "Carilah suku ke-10 dari barisan aritmetika berikut: 3, 7, 11, 15, ...",
      stepByStep: [
        "Identifikasi suku pertama (a): a = 3",
        "Identifikasi beda antar suku (b): b = 7 - 3 = 4",
        "Gunakan rumus Un = a + (n - 1)b untuk n = 10",
        "U10 = 3 + (10 - 1) * 4",
        "U10 = 3 + 9 * 4 = 3 + 36 = 39"
      ],
      result: "U10 = 39"
    },
    quiz: {
      id: "q-pola",
      question: "Berapakah tiga suku berikutnya dari barisan bilangan: 2, 5, 8, 11, ...",
      options: [
        "14, 17, 20",
        "13, 16, 19",
        "15, 18, 21",
        "12, 15, 18"
      ],
      correctAnswer: 0,
      explanation: "Barisan ini memiliki beda (b) = 3. Maka, suku berikutnya setelah 11 adalah: 11+3=14, 14+3=17, dan 17+3=20."
    }
  },
  {
    id: "bentuk-aljabar",
    title: "Bentuk Aljabar",
    category: "Dasar Aljabar",
    shortDesc: "Pengenalan variabel, koefisien, konstanta, dan suku dalam matematika.",
    fullContent: [
      "Bentuk aljabar adalah teknik matematika yang digunakan untuk menyajikan masalah matematika dengan menggunakan simbol-simbol (huruf) sebagai pengganti bilangan yang belum diketahui nilainya.",
      "Unsur-unsur bentuk aljabar meliputi:",
      "1. Variabel: Simbol pengganti bilangan (misal: x, y, a, b).",
      "2. Koefisien: Faktor pengali atau angka di depan variabel (misal: 3 pada 3x).",
      "3. Konstanta: Suku yang berupa bilangan tetap tanpa variabel (misal: -5).",
      "4. Suku: Bagian aljabar yang dipisahkan oleh operasi penjumlahan atau pengurangan (misal: Suku tunggal, suku dua / binomial, atau suku banyak / polinomial)."
    ],
    formula: "Bentuk Umum: ax + by + c  (a, b koefisien; x, y variabel; c konstanta)",
    example: {
      question: "Sederhanakan bentuk aljabar berikut: 5x + 3y - 2 - 2x + 4y + 7",
      stepByStep: [
        "Kumpulkan suku-suku sejenis yang memiliki variabel yang sama.",
        "Gabungkan kelompok x: 5x - 2x = 3x",
        "Gabungkan kelompok y: 3y + 4y = 7y",
        "Gabungkan konstanta: -2 + 7 = 5",
        "Tuliskan dalam satu kesatuan hasil penyederhanaan."
      ],
      result: "3x + 7y + 5"
    },
    quiz: {
      id: "q-bentuk",
      question: "Pada bentuk aljabar 4x² - 3x + 8, koefisien dari variabel x dan konstanta berturut-turut adalah...",
      options: [
        "4 dan 8",
        "-3 dan 8",
        "3 dan 8",
        "4 dan -3"
      ],
      correctAnswer: 1,
      explanation: "Variabel x memiliki koefisien -3 di depannya, sedangkan bagian konstan yang berdiri sendiri tanpa variabel adalah positif 8."
    }
  },
  {
    id: "sifat-operasi",
    title: "Sifat-sifat Operasi Aljabar",
    category: "Operasi Matematika",
    shortDesc: "Bagaimana menyederhanakan perkalian dan penjumlahan berbentuk variabel.",
    fullContent: [
      "Sifat-sifat operasi aljabar membantu kita menyederhanakan ekspresi kompleks secara teratur.",
      "Tiga sifat utama yang sering digunakan adalah:",
      "1. Sifat Komutatif: Urutan penjumlahan atau perkalian tidak memengaruhi hasil. a + b = b + a dan a * b = b * a.",
      "2. Sifat Asosiatif: Cara pengelompokan suku tidak memengaruhi hasil. (a + b) + c = a + (b + c).",
      "3. Sifat Distributif: Operasi perkalian didistribusikan ke setiap suku di dalam kurung. a(b + c) = ab + ac dan (x + y)(a + b) = xa + xb + ya + yb."
    ],
    formula: "Distributif Utama: a(b + c) = ab + ac  |  Perkalian Pelangi: (x+a)(x+b) = x² + (a+b)x + ab",
    example: {
      question: "Jabarkan perkalian dua bentuk aljabar berikut: (x + 3)(x + 5)",
      stepByStep: [
        "Gunakan sifat distributif (perkalian pelangi): (x + 3)(x + 5) = x*x + x*5 + 3*x + 3*5",
        "Lakukan perkalian masing-masing suku: x² + 5x + 3x + 15",
        "Sederhanakan suku sejenis (5x + 3x): x² + 8x + 15"
      ],
      result: "x² + 8x + 15"
    },
    quiz: {
      id: "q-sifat",
      question: "Hasil penjabaran dari perkalian aljabar 2a(a - 4b) adalah...",
      options: [
        "2a² - 8ab",
        "2a² - 4b",
        "2a - 8ab",
        "2a² + 8ab"
      ],
      correctAnswer: 0,
      explanation: "Dengan sifat distributif: 2a * a = 2a², dan 2a * (-4b) = -8ab. Sehingga didapatkan 2a² - 8ab."
    }
  },
  {
    id: "fungsi-aljabar",
    title: "Fungsi Aljabar",
    category: "Relasi & Pemetaan",
    shortDesc: "Pemetaan input x ke output f(x) menggunakan rumus matematika.",
    fullContent: [
      "Fungsi aljabar menyatakan hubungan ketergantungan antara satu besaran dengan besaran lainnya.",
      "Input dari fungsi disebut domain (biasanya variabel x) dan nilai keluaran yang dihasilkan dinamakan daerah hasil atau range (biasanya ditulis f(x) atau y).",
      "Contoh fungsi yang paling mendasar adalah Fungsi Linear, di mana grafiknya di koordinat Kartesius berupa garis lurus dengan kemiringan tertentu (gradien)."
    ],
    formula: "Rumus Fungsi Linear: f(x) = mx + c",
    example: {
      question: "Diketahui sebuah fungsi f(x) = 3x - 5. Jika nilai x = 4, berapakah nilai f(x)?",
      stepByStep: [
        "Tuliskan persamaan fungsi f(x) = 3x - 5",
        "Substitusikan nilai x dengan angka 4",
        "Hitung f(4) = 3(4) - 5",
        "f(4) = 12 - 5 = 7"
      ],
      result: "f(4) = 7"
    },
    quiz: {
      id: "q-fungsi",
      question: "Jika f(x) = ax + b dengan f(1) = 5 dan f(3) = 11, tentukan nilai nilai a (gradien) dari fungsi tersebut!",
      options: [
        "a = 2",
        "a = 3",
        "a = 4",
        "a = 5"
      ],
      correctAnswer: 1,
      explanation: "f(3) - f(1) = (3a + b) - (a + b) = 2a. Maka 11 - 5 = 6, sehingga 2a = 6 dan diperoleh a = 3."
    }
  },
  {
    id: "plsv-ptlsv",
    title: "Persamaan dan Pertidaksamaan Linear Satu Variabel",
    category: "Relasi & Pemetaan",
    shortDesc: "Mencari nilai variabel tunggal yang memenuhi kondisi persamaan/pertidaksamaan.",
    fullContent: [
      "Persamaan Linear Satu Variabel (PLSV) adalah kalimat matematika terbuka yang dihubungkan oleh tanda sama dengan (=) dan hanya mempunyai satu variabel dengan pangkat tertinggal satu.",
      "Pertidaksamaan Linear Satu Variabel (PtLSV) hampir serupa, namun menggunakan tanda pertidaksamaan seperti kurang dari (<), lebih dari (>), kurang dari sama dengan (≤), atau lebih dari sama dengan (≥).",
      "Aturan penting PtLSV: Jika kedua ruas dikali atau dibagi dengan bilangan negatif, posisi tanda pertidaksamaan wajib berbalik arah."
    ],
    formula: "Umum PLSV: ax + b = c  |  Umum PtLSV: ax + b > c (atau <, ≤, ≥)",
    example: {
      question: "Tentukan himpunan penyelesaian dari pertidaksamaan: 3x - 7 < 8",
      stepByStep: [
        "Tuliskan pertidaksamaan asli: 3x - 7 < 8",
        "Tambahkan kedua ruas dengan 7: 3x - 7 + 7 < 8 + 7",
        "Sederhanakan: 3x < 15",
        "Bagi kedua ruas dengan 3: x < 5"
      ],
      result: "x < 5"
    },
    quiz: {
      id: "q-plsv",
      question: "Selesaikan persamaan berikut untuk mencari nilai y: 5y - 3 = 2y + 9",
      options: [
        "y = 2",
        "y = 3",
        "y = 4",
        "y = 5"
      ],
      correctAnswer: 2,
      explanation: "Pindahkan suku variabel ke kiri: 5y - 2y = 3y. Angka ke kanan: 9 + 3 = 12. Jadi, 3y = 12, yang menghasilkan y = 4."
    }
  },
  {
    id: "spldv",
    title: "Sistem Persamaan Linear Dua Variabel",
    category: "Sistem Linear",
    shortDesc: "Menyelesaikan dua persamaan matematika secara simultan dengan variabel x dan y.",
    fullContent: [
      "Sistem Persamaan Linear Dua Variabel (SPLDV) terdiri atas dua buah persamaan linear dua variabel yang cenderung mempunyai satu titik penyelesaian bersama.",
      "Metode penyelesaian SPLDV meliputi:",
      "1. Metode Substitusi: Mengganti variabel pada salah satu persamaan dari rumus persamaan lainnya.",
      "2. Metode Eliminasi: Menghilangkan salah satu variabel dengan menyamakan koefisien lalu menjumlahkan atau mengurangkan kedua persamaan.",
      "3. Metode Campuran: Menggabungkan cara eliminasi dan substitusi.",
      "4. Metode Grafik: Menggambar dua garis lurus koordinat kartesius dan mencari titik perpotongannya."
    ],
    formula: "SPLDV: { a1·x + b1·y = c1 | a2·x + b2·y = c2 }",
    example: {
      question: "Selesaikan SPLDV berikut: x + y = 7  dan  2x - y = 5",
      stepByStep: [
        "Gunakan eliminasi dengan menjumlahkan kedua persamaan untuk menghilangkan variabel y.",
        "(x + y) + (2x - y) = 7 + 5",
        "3x = 12  =>  x = 4",
        "Substitusi nilai x = 4 ke persamaan pertama: 4 + y = 7",
        "Maka didapatkan y = 7 - 4 = 3"
      ],
      result: "Solusi: x = 4, y = 3"
    },
    quiz: {
      id: "q-spldv",
      question: "Berapakah titik potong (x, y) dari sistem persamaan x - y = 2 dan x + y = 8?",
      options: [
        "(5, 3)",
        "(4, 4)",
        "(6, 2)",
        "(5, 2)"
      ],
      correctAnswer: 0,
      explanation: "Jumlahkan kedua persamaan: 2x = 10 -> x = 5. Masukkan ke x + y = 8 -> 5 + y = 8 -> y = 3. Jadi solusinya adalah (5, 3)."
    }
  }
];

export const videoCategoriesData: VideoCategory[] = [
  {
    id: "vid-pola-bilangan",
    topicTitle: "Pola Bilangan",
    videos: [
      {
        id: "v-pola-1",
        title: "Pola bilangan (1) - Mencari suku suatu pola bilangan - Matematika SMP",
        duration: "08:45",
        instructor: "Le GuruLes",
        thumbnailClass: "from-blue-500 to-indigo-600",
        videoIdPlaceholder: "eiH_ISaX3RE",
        views: "1.2K",
        rating: 4.8
      },
      {
        id: "v-pola-2",
        title: "Pola bilangan (2) - Menentukan Rumus Un Suatu Pola Bilangan - Matematika SMP",
        duration: "12:15",
        instructor: "Le GuruLes",
        thumbnailClass: "from-indigo-600 to-purple-600",
        videoIdPlaceholder: "k4C2UqOLpgU",
        views: "840",
        rating: 4.9
      }
    ]
  },
  {
    id: "vid-bentuk-aljabar",
    topicTitle: "Bentuk Aljabar",
    videos: [
      {
        id: "v-aljabar-1",
        title: "Bentuk Aljabar (1) - Pengenalan Aljabar, Bentuk Aljabar, Mengurutkan Aljabar",
        duration: "10:30",
        instructor: "Le GuruLes",
        thumbnailClass: "from-purple-500 to-pink-600",
        videoIdPlaceholder: "eW7LZDdXhLo",
        views: "2.1K",
        rating: 4.7
      },
      {
        id: "v-aljabar-2",
        title: "Bentuk Aljabar (2) - Penjumlahan Aljabar dan Pengurangan Aljabar Sederhana",
        duration: "11:50",
        instructor: "Le GuruLes",
        thumbnailClass: "from-pink-500 to-rose-600",
        videoIdPlaceholder: "F3mW_ugYqFc",
        views: "1.5K",
        rating: 4.8
      }
    ]
  },
  {
    id: "vid-sifat-operasi",
    topicTitle: "Sifat-sifat Operasi Aljabar",
    videos: [
      {
        id: "v-sifat-1",
        title: "Sifat-sifat operasi Aljabar||Matenatika kelas 7",
        duration: "09:15",
        instructor: "helfi andesta",
        thumbnailClass: "from-rose-500 to-orange-600",
        videoIdPlaceholder: "_ab8NT1DMik",
        views: "930",
        rating: 4.6
      }
    ]
  },
  {
    id: "vid-fungsi-aljabar",
    topicTitle: "Fungsi Aljabar",
    videos: [
      {
        id: "v-fungsi-1",
        title: "(Part 1) Fungsi Aljabar Bab Fungsi dan Pemodelannya || Matematika Tingkat Lanjut Kelas XI",
        duration: "07:50",
        instructor: "Rokhaniyah",
        thumbnailClass: "from-amber-500 to-emerald-600",
        videoIdPlaceholder: "ZalCQ3c1dLw",
        views: "680",
        rating: 4.5
      },
      {
        id: "v-fungsi-2",
        title: "Komposisi Fungsi Part 1 - Operasi Aljabar Pada Fungsi [ Matematika Wajib Kelas X ]",
        duration: "15:05",
        instructor: "m4th-lab",
        thumbnailClass: "from-emerald-500 to-teal-600",
        videoIdPlaceholder: "BbwvwIcImMI",
        views: "1.1K",
        rating: 4.8
      }
    ]
  },
  {
    id: "vid-plsv-ptlsv",
    topicTitle: "Persamaan dan Pertidaksamaan Linear Satu Variabel",
    videos: [
      {
        id: "v-plsv-1",
        title: "Persamaan dan pertidaksamaan linear satu variabel",
        duration: "11:10",
        instructor: "Matematika Hebat",
        thumbnailClass: "from-teal-500 to-cyan-600",
        videoIdPlaceholder: "OJhDRcYojt8",
        views: "3.2K",
        rating: 4.9
      },
      {
        id: "v-plsv-2",
        title: "CARA MUDAH PERSAMAAN DAN PERTIDAKSAMAAN LINEAR SATU VARIABEL",
        duration: "13:40",
        instructor: "Matematika Hebat",
        thumbnailClass: "from-cyan-500 to-blue-600",
        views: "2.4K",
        rating: 4.8,
        videoIdPlaceholder: "Pc5y2BjELzU"
      }
    ]
  },
  {
    id: "vid-spldv",
    topicTitle: "Sistem Persamaan Linear Dua Variabel",
    videos: [
      {
        id: "v-spldv-1",
        title: "Sistem Persamaan Linear • Part 1: Sistem Persamaan Linear Dua Variabel / SPLDV",
        duration: "16:30",
        instructor: "Jendela Sains",
        thumbnailClass: "from-indigo-500 to-violet-600",
        views: "4.5K",
        rating: 4.9,
        videoIdPlaceholder: "Qc2mRvVubIA"
      },
      {
        id: "v-spldv-2",
        title: "Sistem Persamaan Linear • Part 2: Contoh Soal SPLDV Bentuk Pecahan (Cara Permisalan)",
        duration: "12:55",
        instructor: "Jendela Sains",
        thumbnailClass: "from-violet-500 to-fuchsia-600",
        views: "1.9K",
        rating: 4.8,
        videoIdPlaceholder: "GNlk-S6oS14"
      }
    ]
  }
];
