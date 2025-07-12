function updateCartCount() {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  let count = keranjang.length;
  const el = document.getElementById('cart-count');
  if (el) {
    el.textContent = count;
    el.style.display = count === 0 ? 'none' : 'inline-block';
  }
}

function tambahKeKeranjang(namaProduk) {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  keranjang.push(namaProduk);
  localStorage.setItem('keranjang', JSON.stringify(keranjang));
  alert(namaProduk + " ditambahkan ke keranjang!");
  updateCartCount();
}

function tampilkanKeranjang() {
  let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
  const daftar = document.getElementById('daftar-keranjang');
  if (!daftar) return;
  daftar.innerHTML = '';
  if (keranjang.length === 0) {
    daftar.innerHTML = '<li>Keranjang kosong.</li>';
  } else {
    keranjang.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${index + 1}. ${item}`;
      daftar.appendChild(li);
    });
  }
}

function kosongkanKeranjang() {
  if (confirm("Yakin ingin mengosongkan keranjang?")) {
    localStorage.removeItem('keranjang');
    tampilkanKeranjang();
    updateCartCount();
  }
}

window.onload = () => {
  updateCartCount();
  tampilkanKeranjang();
};