const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const typingIndicator = document.getElementById('typing-indicator');

function simulateAIReply(question) {
  let reply = "Maaf, saya belum mengerti itu.";

  // Ambil angka dari pertanyaan
  const numbers = question.match(/\d+/g)?.map(Number) || [];

  // Fungsi bantu pecahan sederhana (optional bisa dikembangkan)
  function parseFraction(text) {
    const match = text.match(/(\d+)\/(\d+)/);
    if (match) {
      return { numerator: parseInt(match[1]), denominator: parseInt(match[2]) };
    }
    return null;
  }

  // Operasi pecahan sederhana (penjumlahan & pengurangan)
  const frac1 = parseFraction(question);
  const frac2 = parseFraction(question.split("dan")[1] || "");

  if (frac1 && frac2) {
    if (question.includes("tambah")) {
      if (frac1.denominator === frac2.denominator) {
        reply = `Hasil penjumlahan pecahan ${frac1.numerator}/${frac1.denominator} dan ${frac2.numerator}/${frac2.denominator} adalah ${frac1.numerator + frac2.numerator}/${frac1.denominator}.`;
      } else {
        reply = "Penjumlahan pecahan dengan penyebut berbeda belum didukung.";
      }
    } else if (question.includes("kurang")) {
      if (frac1.denominator === frac2.denominator) {
        reply = `Hasil pengurangan pecahan ${frac1.numerator}/${frac1.denominator} dan ${frac2.numerator}/${frac2.denominator} adalah ${frac1.numerator - frac2.numerator}/${frac1.denominator}.`;
      } else {
        reply = "Pengurangan pecahan dengan penyebut berbeda belum didukung.";
      }
    }
    return reply;
  }

// Hitung luas bangun datar
if (question.includes("luas")) {
  // Luas persegi panjang (diperiksa dulu agar tidak tertangkap sebagai "persegi")
  if (question.includes("persegi panjang")) {
    if (numbers.length >= 2) {
      const panjang = numbers[0];
      const lebar = numbers[1];
      reply = `Luas persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${panjang * lebar}.`;
    } else {
      reply = "Sebutkan panjang dan lebar persegi panjang yang ingin dihitung luasnya.";
    }
    return reply;
  }

  // Luas persegi
  if (question.includes("persegi")) {
    if (numbers.length >= 1) {
      const sisi = numbers[0];
      reply = `Luas persegi dengan sisi ${sisi} adalah ${sisi * sisi}.`;
    } else {
      reply = "Sebutkan panjang sisi persegi yang ingin dihitung luasnya.";
    }
    return reply;
  }

  // Luas segitiga
  if (question.includes("segitiga")) {
    if (numbers.length >= 2) {
      const alas = numbers[0];
      const tinggi = numbers[1];
      reply = `Luas segitiga dengan alas ${alas} dan tinggi ${tinggi} adalah ${0.5 * alas * tinggi}.`;
    } else {
      reply = "Sebutkan alas dan tinggi segitiga yang ingin dihitung luasnya.";
    }
    return reply;
  }

  // Luas lingkaran
  if (question.includes("lingkaran")) {
    if (numbers.length >= 1) {
      const r = numbers[0];
      reply = `Luas lingkaran dengan jari-jari ${r} adalah ${(Math.PI * r * r).toFixed(2)}.`;
    } else {
      reply = "Sebutkan jari-jari lingkaran yang ingin dihitung luasnya.";
    }
    return reply;
  }

  // Luas trapesium
  if (question.includes("trapesium")) {
    if (numbers.length >= 3) {
      const a = numbers[0];
      const b = numbers[1];
      const t = numbers[2];
      reply = `Luas trapesium dengan sisi sejajar ${a}, ${b} dan tinggi ${t} adalah ${0.5 * (a + b) * t}.`;
    } else {
      reply = "Sebutkan dua sisi sejajar dan tinggi trapesium yang ingin dihitung luasnya.";
    }
    return reply;
  }

  // Luas jajar genjang
  if (question.includes("jajar genjang")) {
    if (numbers.length >= 2) {
      const alas = numbers[0];
      const tinggi = numbers[1];
      reply = `Luas jajar genjang dengan alas ${alas} dan tinggi ${tinggi} adalah ${alas * tinggi}.`;
    } else {
      reply = "Sebutkan alas dan tinggi jajar genjang.";
    }
    return reply;
  }

  // Luas layang-layang atau belah ketupat
  if (question.includes("layang-layang") || question.includes("belah ketupat")) {
    if (numbers.length >= 2) {
      const d1 = numbers[0];
      const d2 = numbers[1];
      reply = `Luas ${question.includes("layang") ? "layang-layang" : "belah ketupat"} dengan diagonal ${d1} dan ${d2} adalah ${(0.5 * d1 * d2).toFixed(2)}.`;
    } else {
      reply = "Sebutkan dua diagonal untuk menghitung luas.";
    }
    return reply;
  }
}

// Hitung keliling bangun datar
if (question.includes("keliling")) {
  // Keliling persegi panjang (diperiksa dulu)
  if (question.includes("persegi panjang")) {
    if (numbers.length >= 2) {
      const panjang = numbers[0];
      const lebar = numbers[1];
      reply = `Keliling persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${2 * (panjang + lebar)}.`;
    } else {
      reply = "Sebutkan panjang dan lebar persegi panjang yang ingin dihitung kelilingnya.";
    }
    return reply;
  }

  // Keliling persegi
  if (question.includes("persegi")) {
    if (numbers.length >= 1) {
      const sisi = numbers[0];
      reply = `Keliling persegi dengan sisi ${sisi} adalah ${4 * sisi}.`;
    } else {
      reply = "Sebutkan panjang sisi persegi yang ingin dihitung kelilingnya.";
    }
    return reply;
  }

  // Keliling segitiga
  if (question.includes("segitiga")) {
    if (numbers.length >= 3) {
      const keliling = numbers[0] + numbers[1] + numbers[2];
      reply = `Keliling segitiga dengan sisi ${numbers[0]}, ${numbers[1]}, dan ${numbers[2]} adalah ${keliling}.`;
    } else {
      reply = "Sebutkan ketiga sisi segitiga yang ingin dihitung kelilingnya.";
    }
    return reply;
  }

  // Keliling lingkaran
  if (question.includes("lingkaran")) {
    if (numbers.length >= 1) {
      const r = numbers[0];
      reply = `Keliling lingkaran dengan jari-jari ${r} adalah ${(2 * Math.PI * r).toFixed(2)}.`;
    } else {
      reply = "Sebutkan jari-jari lingkaran yang ingin dihitung kelilingnya.";
    }
    return reply;
  }

  // Keliling trapesium
  if (question.includes("trapesium")) {
    if (numbers.length >= 4) {
      const keliling = numbers[0] + numbers[1] + numbers[2] + numbers[3];
      reply = `Keliling trapesium dengan sisi ${numbers[0]}, ${numbers[1]}, ${numbers[2]}, dan ${numbers[3]} adalah ${keliling}.`;
    } else {
      reply = "Sebutkan keempat sisi trapesium.";
    }
    return reply;
  }

  // Keliling jajar genjang
  if (question.includes("jajar genjang")) {
    if (numbers.length >= 2) {
      const a = numbers[0];
      const b = numbers[1];
      reply = `Keliling jajar genjang dengan alas ${a} dan sisi miring ${b} adalah ${2 * (a + b)}.`;
    } else {
      reply = "Sebutkan alas dan sisi miring jajar genjang.";
    }
    return reply;
  }

  // Keliling layang-layang
  if (question.includes("layang-layang")) {
    if (numbers.length >= 2) {
      const a = numbers[0];
      const b = numbers[1];
      reply = `Keliling layang-layang dengan sisi pendek ${a} dan sisi panjang ${b} adalah ${2 * (a + b)}.`;
    } else {
      reply = "Sebutkan dua sisi layang-layang.";
    }
    return reply;
  }

  // Keliling belah ketupat
  if (question.includes("belah ketupat")) {
    if (numbers.length >= 1) {
      const sisi = numbers[0];
      reply = `Keliling belah ketupat dengan sisi ${sisi} adalah ${4 * sisi}.`;
    } else {
      reply = "Sebutkan sisi belah ketupat.";
    }
    return reply;
  }
}

// Hitung diagonal persegi
if (question.includes("diagonal") && question.includes("persegi")) {
  if (numbers.length >= 1) {
    const sisi = numbers[0];
    reply = `Diagonal persegi dengan sisi ${sisi} adalah ${(sisi * Math.sqrt(2)).toFixed(2)}.`;
  } else {
    reply = "Sebutkan sisi persegi.";
  }
  return reply;
}

// Hitung diagonal persegi panjang
if (question.includes("diagonal") && question.includes("persegi panjang")) {
  if (numbers.length >= 2) {
    const p = numbers[0];
    const l = numbers[1];
    const diagonal = Math.sqrt(p * p + l * l).toFixed(2);
    reply = `Diagonal persegi panjang dengan panjang ${p} dan lebar ${l} adalah ${diagonal}.`;
  } else {
    reply = "Sebutkan panjang dan lebar persegi panjang.";
  }
  return reply;
}

// Hitung sisi dari luas persegi
if (question.includes("sisi") && question.includes("persegi") && question.includes("luas")) {
  if (numbers.length >= 1) {
    const luas = numbers[0];
    const sisi = Math.sqrt(luas).toFixed(2);
    reply = `Sisi persegi dengan luas ${luas} adalah ${sisi}.`;
  } else {
    reply = "Sebutkan luas persegi.";
  }
  return reply;
}

// Hitung tinggi segitiga dari luas
if (question.includes("tinggi") && question.includes("segitiga") && question.includes("luas")) {
  if (numbers.length >= 2) {
    const luas = numbers[0];
    const alas = numbers[1];
    const tinggi = (2 * luas / alas).toFixed(2);
    reply = `Tinggi segitiga dengan luas ${luas} dan alas ${alas} adalah ${tinggi}.`;
  } else {
    reply = "Sebutkan luas dan alas segitiga.";
  }
  return reply;
}


  // Konversi satuan panjang sederhana
  if (question.includes("konversi") || question.includes("ubah") || question.includes("berapa")) {
    if (question.includes("meter") && question.includes("centimeter")) {
      if (question.includes("ke")) {
        if (question.includes("centimeter")) {
          if (numbers.length >= 1) {
            reply = `${numbers[0]} meter = ${numbers[0] * 100} centimeter.`;
            return reply;
          }
        }
        if (question.includes("meter")) {
          if (numbers.length >= 1) {
            reply = `${numbers[0]} centimeter = ${numbers[0] / 100} meter.`;
            return reply;
          }
        }
      }
    }
    if (question.includes("kilometer") && question.includes("meter")) {
      if (question.includes("ke")) {
        if (question.includes("meter")) {
          if (numbers.length >= 1) {
            reply = `${numbers[0]} kilometer = ${numbers[0] * 1000} meter.`;
            return reply;
          }
        }
        if (question.includes("kilometer")) {
          if (numbers.length >= 1) {
            reply = `${numbers[0]} meter = ${numbers[0] / 1000} kilometer.`;
            return reply;
          }
        }
      }
    }
  }

  // Penjelasan bangun datar dasar
  if (question.includes("segitiga")) {
    reply = "Segitiga adalah bangun datar dengan tiga sisi dan tiga sudut.";
  } else if (question.includes("persegi panjang")) {
    reply = "Persegi panjang adalah bangun datar dengan empat sisi, dua pasang sisi yang sama panjang, dan empat sudut siku-siku.";
  } else if (question.includes("persegi")) {
    reply = "Persegi adalah bangun datar dengan empat sisi sama panjang dan empat sudut siku-siku.";
  } else if (question.includes("lingkaran")) {
    reply = "Lingkaran adalah bangun datar dengan semua titik pada kelilingnya berjarak sama dari pusat.";
  }

  // Penjelasan satuan pengukuran
  else if (question.includes("satuan panjang")) {
    reply = "Satuan panjang umum adalah meter (m), centimeter (cm), dan kilometer (km).";
  } else if (question.includes("luas")) {
    reply = "Luas adalah ukuran luas bidang datar, misal luas persegi adalah sisi x sisi.";
  } else if (question.includes("volume")) {
    reply = "Volume adalah isi ruang, misal volume kubus adalah sisi x sisi x sisi.";
  }

  if (question.includes("halo") || question.includes("hai")) {
    reply = "Halo juga! Apa yang bisa saya bantu?";
  } else if (question.includes("siapa kamu")) {
    reply = "Saya adalah AI sederhana buatan JavaScript.";
  } else if (question.includes("apa itu javascript")) {
    reply = "JavaScript adalah bahasa pemrograman yang digunakan di web.";
  } else if (question.includes("terima kasih")) {
    reply = "Sama-sama! 😊";
  } else if (question.includes("siapa presiden")) {
    reply = "Saat ini presiden Indonesia adalah Joko Widodo (data sampai 2024).";
  } else if (question.toLowerCase().includes("apa saja yang bisa kamu kerjakan")) {
  reply = "Berikut adalah hal-hal yang bisa saya bantu: Matematika Dasar dan Bangun Datar, Operasi pecahan (penjumlahan/pengurangan dengan penyebut sama), Menghitung luas dan keliling pada bangun datar, Konversi satuan panjang (meter, cm, km), Menentukan diagonal dan sisi dari luas (persegi & persegi panjang), Menghitung tinggi segitiga dari luas segitiga, Pengertian berbagai bangun datar (segitiga, persegi, dll.), Pengertian satuan panjang, luas, dan volume, serta Operasi Aritmatika Umum (penjumlahan, pengurangan, perkalian, pembagian).";
  } else if (question.toLowerCase().includes("ku nikah tahun berapa")) {
  reply = "Kemungkinan kamu akan menikah pada tahun 2027.";
  } else if (question.toLowerCase().includes("nama pacarnya hafizh siapa")) {
  reply = "Nuraini Intan Cundamani❤️";
  } else if (question.toLowerCase().includes("emang iya?")) {
  reply = "Iya lah pasti dong🥰";
  } else if (question.toLowerCase().includes("pacar aku cantik nggak")) {
  reply = "Jelas Lah Cantik Banget🥰";
  } else if (question.toLowerCase().includes("pacar nya aku bakal jadi istri ku apa nggak")) {
  reply = "Pasti lah nati insyaalah 2027🥰🤲";
  } else if (question.includes("chrono") && question.includes("free fire")) {
    reply = "Chrono adalah karakter di Free Fire yang terinspirasi dari Cristiano Ronaldo. Dia punya skill membuat perisai pelindung.";
  } else if ((question.includes("tambah") || question.includes("+")) && numbers.length >= 2) {
    reply = `${numbers[0]} + ${numbers[1]} = ${numbers[0] + numbers[1]}`;
  } else if ((question.includes("kurang") || question.includes("-")) && numbers.length >= 2) {
    reply = `${numbers[0]} - ${numbers[1]} = ${numbers[0] - numbers[1]}`;
  } else if ((question.includes("kali") || question.includes("x")) && numbers.length >= 2) {
    reply = `${numbers[0]} × ${numbers[1]} = ${numbers[0] * numbers[1]}`;
  } else if ((question.includes("bagi") || question.includes("/")) && numbers.length >= 2) {
    if (numbers[1] === 0) {
      reply = "Pembagian dengan nol tidak terdefinisi.";
    } else {
      reply = `${numbers[0]} ÷ ${numbers[1]} = ${numbers[0] / numbers[1]}`;
    }
  }

  return reply;
}

sendButton.addEventListener('click', () => {
  const question = messageInput.value.trim();
  if (question !== "") {
    // Tampilkan pesan user tanpa prefix "Kamu:"
    const userMsg = document.createElement('div');
    userMsg.classList.add('message', 'user');
    userMsg.textContent = question;
    chatBox.appendChild(userMsg);

    messageInput.value = '';
    typingIndicator.style.display = 'block';

    setTimeout(() => {
      const aiReply = simulateAIReply(question.toLowerCase());

      const aiMsg = document.createElement('div');
      aiMsg.classList.add('message', 'bot');
      aiMsg.textContent = `Mr.H: ${aiReply}`;
      chatBox.appendChild(aiMsg);

      chatBox.scrollTop = chatBox.scrollHeight;
      typingIndicator.style.display = 'none';
    }, 1000);
  }
});

messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendButton.click();
  }
});
