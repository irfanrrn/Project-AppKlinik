const getPracticeStartTime = () => {
    // Logika untuk mendapatkan waktu praktik dokter
    //return new Date(); // Contoh sederhana, bisa diganti dengan logika yang sesuai
    const now = new Date();
    now.setHours(14, 40, 0, 0); // Set jam ke 8 pagi, menit, detik, dan milidetik ke 0
    return now;
};

// Ekspor fungsi agar dapat diakses dari luar file
module.exports = { getPracticeStartTime };