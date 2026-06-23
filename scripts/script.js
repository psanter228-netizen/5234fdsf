//  НАСТРОЙКА FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyAgvj_iqTpvZlTUq4DDLxs2onW4wSvX4DI",
  authDomain: "yhnjrmf.firebaseapp.com",
  projectId: "yhnjrmf",
  storageBucket: "yhnjrmf.firebasestorage.app",
  messagingSenderId: "240938759036",
  appId: "1:240938759036:web:cb08f8c70bdcda45272af9",
  measurementId: "G-Q258K8KL4Q"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


//  ДАННЫЕ ДЛЯ КАРУСЕЛИ
const galleryImages = [
  { src: 'images/gallery-1.jpg', caption: 'Мальдивы — бирюзовая сказка' },
  { src: 'images/gallery-2.jpg', caption: 'Норвегия — фьорды и северное сияние' },
  { src: 'images/gallery-3.jpg', caption: 'Таиланд — экзотика и улыбки' },
  { src: 'images/gallery-4.jpg', caption: 'Дубай — футуристический город' },
  { src: 'images/gallery-5.jpg', caption: 'Париж — город любви' },
  { src: 'images/gallery-6.jpg', caption: 'Рим — вечный город' },
  { src: 'images/gallery-7.jpg', caption: 'Санторини — белые домики' },
  { src: 'images/gallery-8.jpg', caption: 'Исландия — ледяное великолепие' },
  { src: 'images/gallery-9.jpg', caption: 'Новая Зеландия — природа кино' },
  { src: 'images/gallery-10.jpg', caption: 'Египет — пирамиды и море' }
];


//  ДАННЫЕ ТУРОВ И ЭКСКУРСИЙ

const toursData = [
  { id:1, name:'Санторини, Греция', location:'Эгейское море', description:'Белоснежные домики, закаты и лазурные воды.', price:80000, nights:7, badge:'Горящий', badgeClass:'', image:'images/tour-santorini.jpg' },
  { id:2, name:'Бора-Бора, Франц. Полинезия', location:'Тихий океан', description:'Райский отдых в овервотер-бунгало.', price:195000, nights:10, badge:'VIP', badgeClass:'vip', image:'images/tour-borabora.jpg' },
  { id:3, name:'Бали, Индонезия', location:'Индийский океан', description:'Джунгли, храмы, сёрфинг и йога-ретриты.', price:120000, nights:12, badge:'Популярный', badgeClass:'popular', image:'images/tour-bali.jpg' },
  { id:4, name:'Мальдивы', location:'Индийский океан', description:'Бирюзовая вода, белый песок и уединение.', price:250000, nights:8, badge:'Люкс', badgeClass:'vip', image:'images/tour-maldivi.jpg' },
  { id:5, name:'Таиланд, Пхукет', location:'Андаманское море', description:'Экзотическая природа, вкусная еда и ночная жизнь.', price:65000, nights:10, badge:'', badgeClass:'', image:'images/tour-phuket.jpg' },
  { id:6, name:'Испания, Барселона', location:'Средиземное море', description:'Гауди, фламенко и средиземноморская кухня.', price:95000, nights:7, badge:'', badgeClass:'', image:'images/tour-barselona.jpg' },
  { id:7, name:'Италия, Амальфи', location:'Тирренское море', description:'Скалистые берега, лимонные рощи и романтика.', price:110000, nights:8, badge:'', badgeClass:'', image:'images/tour-amalphi.jpg' },
  { id:8, name:'Турция, Анталья', location:'Средиземное море', description:'Все включено, пляжи и древние руины.', price:45000, nights:7, badge:'Эконом', badgeClass:'', image:'images/tour-antalya.jpg' },
  { id:9, name:'Египет, Хургада', location:'Красное море', description:'Дайвинг, кораллы и солнечные пляжи.', price:38000, nights:7, badge:'', badgeClass:'', image:'images/tour-hurgada.jpg' },
  { id:10, name:'ОАЭ, Дубай', location:'Персидский залив', description:'Небоскрёбы, шопинг и пустынные сафари.', price:145000, nights:6, badge:'VIP', badgeClass:'vip', image:'images/tour-dubai.jpg' },
  { id:11, name:'Португалия, Алгарве', location:'Атлантический океан', description:'Золотые скалы и лучшие пляжи Европы.', price:88000, nights:9, badge:'', badgeClass:'', image:'images/tour-algarve.jpg' },
  { id:12, name:'Мексика, Канкун', location:'Карибское море', description:'Майя, бирюзовая вода и вечеринки.', price:135000, nights:10, badge:'', badgeClass:'', image:'images/tour-cancun.jpg' },
  { id:13, name:'Куба, Гавана', location:'Карибское море', description:'Ретро-автомобили, сигары и латиноамериканский колорит.', price:98000, nights:8, badge:'', badgeClass:'', image:'images/tour-gavanna.jpg' },
  { id:14, name:'Шри-Ланка', location:'Индийский океан', description:'Чайные плантации, слоны и океанские волны.', price:72000, nights:11, badge:'Популярный', badgeClass:'popular', image:'images/tour-shrilanca.jpg' },
  { id:15, name:'Сейшелы', location:'Индийский океан', description:'Гранитные валуны, кокосовые пальмы и кристальная вода.', price:210000, nights:9, badge:'Люкс', badgeClass:'vip', image:'images/tour-seisheli.jpg' }
];

const excursionsData = [
  { id:101, name:'Обзорная экскурсия по Парижу', location:'Франция', description:'Эйфелева башня, Лувр, Монмартр – всё за один день.', price:8500, duration:'6 часов', image:'images/ex-paris.jpg' },
  { id:102, name:'Сафари в Африке', location:'Кения', description:'Наблюдение за дикими животными в национальном парке.', price:22000, duration:'3 дня', image:'images/ex-safari.jpg' },
  { id:103, name:'Эрмитаж – сокровища России', location:'Санкт-Петербург', description:'Шедевры живописи и истории в одном из крупнейших музеев.', price:3500, duration:'3 часа', image:'images/ex-ermitash.jpg' },
  { id:104, name:'Восхождение на Фудзи', location:'Япония', description:'Восход солнца над вулканом – незабываемые впечатления.', price:18000, duration:'2 дня', image:'images/ex-fudzi.jpg' },
  { id:105, name:'Долина гейзеров', location:'Камчатка, Россия', description:'Уникальная природа и кипящие источники.', price:15000, duration:'8 часов', image:'images/ex-geizer.jpg' },
  { id:106, name:'Мачу-Пикчу – древний город инков', location:'Перу', description:'Загадочные руины в горах Анд.', price:28000, duration:'2 дня', image:'images/ex-matchu-pikchu.jpg' },
  { id:107, name:'Гранд-каньон на вертолёте', location:'США', description:'Потрясающий вид на каньон с высоты птичьего полёта.', price:31000, duration:'4 часа', image:'images/ex-grand-kanyon.jpg' },
  { id:108, name:'Северное сияние в Лапландии', location:'Финляндия', description:'Охота за полярным сиянием в сказочной обстановке.', price:12000, duration:'6 часов', image:'images/ex-lapland.jpg' },
  { id:109, name:'Венеция на гондоле', location:'Италия', description:'Романтический ужин под звуки венецианских песен.', price:9500, duration:'2 часа', image:'images/ex-lveneciya.jpg' },
  { id:110, name:'Гастротур по Тоскане', location:'Италия', description:'Вино, сыр, трюфели и настоящая итальянская кухня.', price:14000, duration:'1 день', image:'images/ex-toskan.jpg' },
];


//  РАБОТА С ЗАКАЗАМИ

const ORDERS_COLLECTION = 'orders';
async function getOrders() {
  const snapshot = await db.collection(ORDERS_COLLECTION).orderBy('timestamp','desc').get();
  const orders = [];
  snapshot.forEach(doc => orders.push({ id: doc.id, ...doc.data() }));
  return orders;
}
async function addOrder(orderData) {
  const docRef = await db.collection(ORDERS_COLLECTION).add({
    ...orderData,
    date: new Date().toLocaleString('ru-RU'),
    status: 'new',
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });
  return docRef.id;
}
async function updateOrderStatus(id, newStatus) {
  await db.collection(ORDERS_COLLECTION).doc(id).update({ status: newStatus });
}
async function deleteOrder(id) {
  await db.collection(ORDERS_COLLECTION).doc(id).delete();
}


//  МОДАЛЬНЫЕ ОКНА

function openOrderModal(btn) {
  const card = btn.closest('.tour-card');
  const name = card.dataset.name || card.querySelector('h3').innerText;
  document.getElementById('orderTour').value = name;
  document.getElementById('orderTourDisplay').value = name;
  document.getElementById('orderModal').classList.add('active');
}
function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('active');
  });
});
document.getElementById('orderForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const tour = document.getElementById('orderTour').value;
  const name = document.getElementById('orderName').value.trim();
  const phone = document.getElementById('orderPhone').value.trim();
  const email = document.getElementById('orderEmail').value.trim();
  const comment = document.getElementById('orderComment').value.trim();
  if (!name || !phone) { alert('Пожалуйста, заполните имя и телефон.'); return; }
  try {
    await addOrder({ tour, name, phone, email, comment });
    alert('✅ Заявка отправлена! Мы свяжемся с вами.');
    closeModal('orderModal');
    document.getElementById('orderForm').reset();
  } catch (error) {
    console.error('Ошибка при отправке заказа:', error);
    alert('❌ Произошла ошибка. Попробуйте позже.');
  }
});


//  АДМИН-ПАНЕЛЬ (без изменений)

const ADMIN_PASSWORD = 'admin123';
function openAdminLogin() {
  document.getElementById('adminLoginModal').classList.add('active');
  document.getElementById('adminPassword').value = '';
}
document.getElementById('adminLoginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const pass = document.getElementById('adminPassword').value;
  if (pass === ADMIN_PASSWORD) {
    closeModal('adminLoginModal');
    openAdminPanel();
  } else alert('❌ Неверный пароль!');
});
async function openAdminPanel() {
  document.getElementById('adminPanelModal').classList.add('active');
  await renderAdminOrders();
}
function logoutAdmin() { closeModal('adminPanelModal'); }
async function renderAdminOrders() {
  const container = document.getElementById('adminOrdersContainer');
  container.innerHTML = '<p style="text-align:center; color:#888;">Загрузка...</p>';
  try {
    const orders = await getOrders();
    if (orders.length === 0) {
      container.innerHTML = '<p style="text-align:center; color:#888;">Пока нет заказов.</p>';
      return;
    }
    let html = `<table class="admin-table"><thead><tr><th>Тур</th><th>Клиент</th><th>Телефон</th><th>Email</th><th>Дата</th><th>Статус</th><th>Действия</th></tr></thead><tbody>`;
    orders.forEach(order => {
      const statusMap = { new: { class:'new', text:'Новый' }, processing:{ class:'processing', text:'В обработке' }, done:{ class:'done', text:'Завершён' } };
      const st = statusMap[order.status] || statusMap.new;
      html += `<tr><td><strong>${order.tour}</strong></td><td>${order.name}</td><td>${order.phone}</td><td>${order.email || '—'}</td><td>${order.date}</td><td><span class="admin-status ${st.class}">${st.text}</span></td><td class="admin-actions">
        <button onclick="changeStatus('${order.id}','new')" title="Новый">🟦</button>
        <button onclick="changeStatus('${order.id}','processing')" title="В обработке">🟧</button>
        <button onclick="changeStatus('${order.id}','done')" title="Завершён">🟩</button>
        <button onclick="deleteOrderAction('${order.id}')" class="delete-btn" title="Удалить">🗑️</button>
      </td></tr>`;
    });
    html += `</tbody></table>`;
    container.innerHTML = html;
  } catch (error) {
    console.error('Ошибка загрузки заказов:', error);
    container.innerHTML = '<p style="color:red;">❌ Не удалось загрузить заказы. Проверьте консоль.</p>';
  }
}
async function changeStatus(id, newStatus) {
  try { await updateOrderStatus(id, newStatus); await renderAdminOrders(); } 
  catch (error) { console.error('Ошибка обновления статуса:', error); alert('❌ Не удалось изменить статус.'); }
}
async function deleteOrderAction(id) {
  if (confirm('Удалить заказ?')) {
    try { await deleteOrder(id); await renderAdminOrders(); } 
    catch (error) { console.error('Ошибка удаления:', error); alert('❌ Не удалось удалить заказ.'); }
  }
}


//  КАРУСЕЛЬ

let currentSlide = 0;
let totalSlides = galleryImages.length;

function buildSlider() {
  const track = document.getElementById('sliderTrack');
  const dotsContainer = document.getElementById('sliderDots');
  track.innerHTML = '';
  dotsContainer.innerHTML = '';
  galleryImages.forEach((img, index) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    const image = document.createElement('img');
    image.src = img.src;
    image.alt = img.caption;
    image.loading = 'lazy';
    slide.appendChild(image);
    if (img.caption) {
      const caption = document.createElement('div');
      caption.className = 'slide-caption';
      caption.textContent = img.caption;
      slide.appendChild(caption);
    }
    track.appendChild(slide);
    const dot = document.createElement('button');
    dot.className = 'dot' + (index === 0 ? ' active' : '');
    dot.dataset.index = index;
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });
  updateSlider();
}

function updateSlider() {
  const track = document.getElementById('sliderTrack');
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function goToSlide(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  currentSlide = index;
  updateSlider();
}

document.getElementById('sliderPrev').addEventListener('click', () => goToSlide(currentSlide - 1));
document.getElementById('sliderNext').addEventListener('click', () => goToSlide(currentSlide + 1));


//  ПЕРЕКЛЮЧЕНИЕ РАЗДЕЛОВ

const banner = document.getElementById('banner');
const mainActions = document.getElementById('mainActions');
const backHomeBtn = document.getElementById('backHomeBtn');
const gallerySlider = document.getElementById('gallerySlider');
const catalogSection = document.getElementById('catalogSection');
const catalogTitle = document.getElementById('catalogTitle');
const tabTours = document.getElementById('tabTours');
const tabExcursions = document.getElementById('tabExcursions');
const toursGrid = document.getElementById('toursGrid');
const excursionsGrid = document.getElementById('excursionsGrid');

function showHome() {
  banner.style.display = 'flex';
  gallerySlider.style.display = 'block';
  catalogSection.style.display = 'none';
  backHomeBtn.style.display = 'none'; // скрываем кнопку "Главная"
}

function showCatalog(type) {
  banner.style.display = 'none';
  gallerySlider.style.display = 'none';
  catalogSection.style.display = 'block';
  backHomeBtn.style.display = 'inline-flex'; // показываем кнопку "Главная"

  if (type === 'tours') {
    catalogTitle.innerHTML = '<i class="fas fa-umbrella-beach"></i> Туры';
    tabTours.classList.add('active');
    tabExcursions.classList.remove('active');
    renderTours(getCurrentFilter());
  } else if (type === 'excursions') {
    catalogTitle.innerHTML = '<i class="fas fa-binoculars"></i> Экскурсии';
    tabExcursions.classList.add('active');
    tabTours.classList.remove('active');
    renderExcursions(getCurrentFilter());
  }
}

// Фильтры и сортировка
function getCurrentFilter() {
  const minVal = parseInt(document.getElementById('priceMin').value) || 0;
  const maxVal = parseInt(document.getElementById('priceMax').value) || 300000;
  const sort = document.getElementById('sortSelect').value;
  return { minPrice: minVal, maxPrice: maxVal, sort };
}

function applyFilters() {
  const filter = getCurrentFilter();
  if (tabTours.classList.contains('active')) {
    renderTours(filter);
  } else if (tabExcursions.classList.contains('active')) {
    renderExcursions(filter);
  }
  document.getElementById('minPriceLabel').textContent = filter.minPrice;
  document.getElementById('maxPriceLabel').textContent = filter.maxPrice;
}

// Рендеринг туров и экскурсий
function renderTours(filter) {
  let items = [...toursData];
  items = items.filter(t => t.price >= filter.minPrice && t.price <= filter.maxPrice);
  if (filter.sort === 'price-asc') items.sort((a,b) => a.price - b.price);
  else if (filter.sort === 'price-desc') items.sort((a,b) => b.price - a.price);
  else if (filter.sort === 'name') items.sort((a,b) => a.name.localeCompare(b.name));
  if (items.length === 0) {
    toursGrid.innerHTML = '<p style="text-align:center; grid-column:1/-1; color:#6a7a8a;">Ничего не найдено</p>';
    return;
  }
  let html = '';
  items.forEach(tour => {
    const badgeHtml = tour.badge ? `<span class="tour-badge ${tour.badgeClass}">${tour.badge}</span>` : '';
    html += `
      <div class="tour-card" data-name="${tour.name}">
        <div class="tour-image"><img src="${tour.image}" alt="${tour.name}" loading="lazy" />${badgeHtml}</div>
        <div class="tour-card-body">
          <h3>${tour.name}</h3>
          <div class="location"><i class="fas fa-map-pin"></i> ${tour.location}</div>
          <p>${tour.description}</p>
          <div class="tour-footer">
            <span class="tour-price">₽ ${tour.price.toLocaleString()} <small>/ ${tour.nights} ночей</small></span>
            <button class="btn-order" onclick="openOrderModal(this)">Заказать <i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    `;
  });
  toursGrid.innerHTML = html;
}

function renderExcursions(filter) {
  let items = [...excursionsData];
  items = items.filter(e => e.price >= filter.minPrice && e.price <= filter.maxPrice);
  if (filter.sort === 'price-asc') items.sort((a,b) => a.price - b.price);
  else if (filter.sort === 'price-desc') items.sort((a,b) => b.price - a.price);
  else if (filter.sort === 'name') items.sort((a,b) => a.name.localeCompare(b.name));
  if (items.length === 0) {
    excursionsGrid.innerHTML = '<p style="text-align:center; grid-column:1/-1; color:#6a7a8a;">Ничего не найдено</p>';
    return;
  }
  let html = '';
  items.forEach(exc => {
    html += `
      <div class="tour-card" data-name="${exc.name}">
        <div class="tour-image"><img src="${exc.image}" alt="${exc.name}" loading="lazy" /></div>
        <div class="tour-card-body">
          <h3>${exc.name}</h3>
          <div class="location"><i class="fas fa-map-pin"></i> ${exc.location}</div>
          <p>${exc.description}</p>
          <div class="tour-footer">
            <span class="tour-price">₽ ${exc.price.toLocaleString()} <small>/${exc.duration}</small></span>
            <button class="btn-order" onclick="openOrderModal(this)">Заказать <i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    `;
  });
  excursionsGrid.innerHTML = html;
}

// Обработчики фильтров
document.getElementById('priceMin').addEventListener('input', function() {
  const min = parseInt(this.value);
  const max = parseInt(document.getElementById('priceMax').value);
  if (min > max) document.getElementById('priceMax').value = min;
  applyFilters();
});
document.getElementById('priceMax').addEventListener('input', function() {
  const max = parseInt(this.value);
  const min = parseInt(document.getElementById('priceMin').value);
  if (max < min) document.getElementById('priceMin').value = max;
  applyFilters();
});
document.getElementById('sortSelect').addEventListener('change', applyFilters);

// Кнопка "Главная" в каталоге
document.getElementById('backHomeBtn').addEventListener('click', showHome);


//  НАВИГАЦИЯ (меню, большие кнопки)

document.getElementById('navTours').addEventListener('click', (e) => { e.preventDefault(); showCatalog('tours'); });
document.getElementById('navExcursions').addEventListener('click', (e) => { e.preventDefault(); showCatalog('excursions'); });
document.getElementById('footerTours').addEventListener('click', (e) => { e.preventDefault(); showCatalog('tours'); });
document.getElementById('footerExcursions').addEventListener('click', (e) => { e.preventDefault(); showCatalog('excursions'); });
document.getElementById('mainToursBtn').addEventListener('click', () => showCatalog('tours'));
document.getElementById('mainExcursionsBtn').addEventListener('click', () => showCatalog('excursions'));


//  БУРГЕР-МЕНЮ, ШАПКА, ПАРАЛЛАКС, АНИМАЦИИ

const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
burger.addEventListener('click', () => navMenu.classList.toggle('active'));
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('active'));
});
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
});
const bannerBg = document.getElementById('bannerBg');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (bannerBg && scrollY < window.innerHeight) {
    bannerBg.style.transform = `translateY(${scrollY * 0.2}px)`;
  }
});
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
fadeElements.forEach(el => observer.observe(el));


//  ФОТО-МОДАЛКА

function openPhotoModal(imageSrc, caption) {
  const modal = document.getElementById('photoModal');
  const img = document.getElementById('photoModalImage');
  const cap = document.getElementById('photoModalCaption');
  img.src = imageSrc;
  img.alt = caption || 'Фото';
  cap.textContent = caption || '';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closePhotoModal() {
  document.getElementById('photoModal').classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('photoModal').addEventListener('click', function(e) {
  if (e.target === this) closePhotoModal();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closePhotoModal();
    document.querySelectorAll('.modal.active').forEach(modal => {
      if (modal.id !== 'photoModal') modal.classList.remove('active');
    });
  }
});


//  ИНИЦИАЛИЗАЦИЯ

buildSlider();
showHome();
applyFilters();

console.log(' Firebase подключён. Заказы хранятся в облаке.');
console.log(` Загружено ${toursData.length} туров и ${excursionsData.length} экскурсий.`);
console.log(` Карусель содержит ${galleryImages.length} изображений.`);
