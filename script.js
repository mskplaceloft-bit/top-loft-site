/* ================================================================
   МСКБау — Main JavaScript
   - Loft data from mskplace.ru
   - Card rendering, filtering
   - Gallery lightbox
   - Reviews slider
   - Scroll effects (header, reveal)
   - Form handling
   - Modal
   ================================================================ */

'use strict';

/* ----------------------------------------------------------------
   1. LOFT DATA (реальные данные с mskplace.ru)
   ---------------------------------------------------------------- */
const lofts = [
  {
    id: 'cactus',
    name: 'Cactus',
    nameRu: 'Кактус',
    area: '140 м²',
    capacityFuршет: 80,
    capacityBanquet: 50,
    capacityTheatre: 70,
    metro: 'Бауманская',
    address: 'Бауманская, Москва',
    description: 'Два этажа и 140 м² дают простор для проведения различных мероприятий — от деловых семинаров до шумных вечеринок. Сочетание кирпича, тёмного дерева и бетона — классика, которую легко преобразить. На втором этаже — лаундж-зона с уютными диванами.',
    features: ['Два этажа', 'Лаундж-зона', 'Кирпич и дерево', 'Бетон индастриал'],
    included: ['Мебель на выбор', 'Проектор', 'Муз. оборудование', 'Холодильник', 'Wi-Fi', 'PS4/PS5', 'Санузел', 'Администратор', 'Кондиционер', 'Кофемашина', 'Посуда', 'Микроволновка', 'Чайник', 'Умный свет (RGB)', 'Профессиональное Караоке'],
    extra: ['Дым-машина', 'Лёд', 'Светомузыка', 'Настольные игры'],
    tags: ['karaoke', 'twofloor', 'large'],
    img: 'https://static.tildacdn.com/tild6339-3261-4166-a131-306239343833/IMG_5653_resized.jpg',
    url: 'https://mskplace.ru/cactus',
    priceWeekday: '2 400 ₽/час',
    priceFri: '6 000 ₽/час',
    priceSat: '7 000 ₽/час',
    priceSun: '4 900 ₽/час',
    cleaning: '4 000 ₽',
  },
  {
    id: 'memphis',
    name: 'Memphis',
    nameRu: 'Мемфис',
    area: '135 м²',
    capacityFuршет: 50,
    capacityBanquet: 30,
    capacityTheatre: 50,
    metro: 'Бауманская',
    address: '5 минут от метро, 2 минуты от ТТК, 1 этаж',
    description: 'Лофт в итальянском стиле Мемфис. Необычные геометрические формы и яркие цвета в оформлении делают это помещение одновременно ярким и уютным. Удобное расположение в пяти минутах от метро и двух минутах от ТТК. Первый этаж, отдельный вход.',
    features: ['Итальянский стиль Мемфис', '1 этаж', 'Отдельный вход', 'Геометрические формы', 'Яркие цвета'],
    included: ['Мебель на выбор', 'Проектор', 'Муз. оборудование', 'Холодильник', 'Wi-Fi', 'PS4/PS5', 'Санузел', 'Администратор', 'Кондиционер', 'Кофемашина', 'Посуда', 'Микроволновка', 'Чайник', 'Умный свет (RGB)', 'Профессиональное Караоке'],
    extra: ['Дым-машина', 'Лёд', 'Светомузыка', 'Настольные игры'],
    tags: ['karaoke', 'large'],
    img: 'https://static.tildacdn.com/tild3465-3266-4335-a131-353663353938/_KSV4386_hdr.jpg',
    url: 'https://mskplace.ru/memphis',
    priceWeekday: '2 400 ₽/час',
    priceFri: '6 000 ₽/час',
    priceSat: '7 000 ₽/час',
    priceSun: '4 900 ₽/час',
    cleaning: '4 000 ₽',
  },
  {
    id: 'mira',
    name: 'Mira',
    nameRu: 'Мира',
    area: '110 м²',
    capacityFuршет: 50,
    capacityBanquet: 40,
    capacityTheatre: 30,
    metro: 'Бауманская',
    address: '7 минут от метро, 2 минуты от ТТК, 2 этаж',
    description: 'Взрыв цвета и эмоций! Собранные со всех уголков Мира элементы дизайна и декора украсят не только ваш праздник, но и все ваши фото. Яркий неповторимый дизайн двухэтажного лофта с регулируемым светом и неоновой подсветкой.',
    features: ['Два этажа', 'Неоновая подсветка', 'Яркий дизайн', 'Элементы со всего мира'],
    included: ['Мебель на выбор', 'Проектор', 'Муз. оборудование', 'Холодильник', 'Wi-Fi', 'PS4/PS5', 'Санузел', 'Администратор', 'Кондиционер', 'Кофемашина', 'Посуда', 'Микроволновка', 'Чайник', 'Умный свет (RGB)', 'Профессиональное Караоке'],
    extra: ['Дым-машина', 'Лёд', 'Светомузыка', 'Настольные игры'],
    tags: ['karaoke', 'twofloor', 'large'],
    img: 'https://static.tildacdn.com/tild3937-6530-4132-b263-353034666530/_KSV5768hdr.jpg',
    url: 'https://mskplace.ru/mira',
    priceWeekday: '2 200 ₽/час',
    priceFri: '5 500 ₽/час',
    priceSat: '6 500 ₽/час',
    priceSun: '4 900 ₽/час',
    cleaning: '4 000 ₽',
  },
  {
    id: 'steklo',
    name: 'Steklo',
    nameRu: 'Стекло',
    area: '110 м²',
    capacityFuршет: 50,
    capacityBanquet: 25,
    capacityTheatre: 20,
    metro: 'Бауманская',
    address: 'Бауманская, Москва',
    description: 'Аристократичный лофт на Бауманской со смелыми решениями в дизайне. Дизайнерский ремонт, совместивший классический стиль XIX века с индустриальным XX века. Стекло, металл, кирпич — необычное сочетание эпох.',
    features: ['Стекло и металл', 'XIX + XX век', 'Аристократичный стиль', 'Смелые решения'],
    included: ['Мебель на выбор', 'Проектор', 'Муз. оборудование', 'Холодильник', 'Wi-Fi', 'PS4/PS5', 'Санузел', 'Администратор', 'Кондиционер', 'Кофемашина', 'Посуда', 'Микроволновка', 'Чайник', 'Умный свет (RGB)', 'Профессиональное Караоке'],
    extra: ['Дым-машина', 'Лёд', 'Светомузыка', 'Настольные игры'],
    tags: ['karaoke'],
    img: 'https://static.tildacdn.com/tild3239-3036-4062-a663-356637633362/1.jpg',
    url: 'https://mskplace.ru/steklo',
    priceWeekday: '1 900 ₽/час',
    priceFri: '5 000 ₽/час',
    priceSat: '6 000 ₽/час',
    priceSun: '3 800 ₽/час',
    cleaning: '4 000 ₽',
  },
  {
    id: 'simple',
    name: 'Simple',
    nameRu: 'Симпл',
    area: '130 м²',
    capacityFuршет: 60,
    capacityBanquet: 38,
    capacityTheatre: 30,
    metro: 'Бауманская',
    address: 'Бауманская, Москва',
    description: 'Безукоризненно белый и стильный лофт с яркими деталями. Арочные потолки, хрустальные люстры, выход на большую собственную веранду и настоящий камин с живым огнём — для красивых, элегантных и уютных событий.',
    features: ['Камин с живым огнём', 'Собственная веранда', 'Арочные потолки', 'Хрустальные люстры'],
    included: ['Мебель на выбор', 'Проектор', 'Муз. оборудование', 'Холодильник', 'Wi-Fi', 'PS4/PS5', 'Санузел', 'Администратор', 'Кондиционер', 'Кофемашина', 'Посуда', 'Микроволновка', 'Чайник', 'Умный свет (RGB)', 'Профессиональное Караоке'],
    extra: ['Дым-машина', 'Лёд', 'Светомузыка', 'Настольные игры', 'Электрогриль'],
    tags: ['karaoke', 'grill', 'large'],
    img: 'https://static.tildacdn.com/tild6165-3630-4138-b638-666131623263/_2-2.jpg',
    url: 'https://mskplace.ru/simple',
    priceWeekday: '2 400 ₽/час',
    priceFri: '6 000 ₽/час',
    priceSat: '7 000 ₽/час',
    priceSun: '4 900 ₽/час',
    cleaning: '4 000 ₽',
  },
  {
    id: 'tvoyavina',
    name: 'Tvoya Vina',
    nameRu: 'Твоя Вина',
    area: 'уточняется',
    capacityFuршет: 30,
    capacityBanquet: 18,
    capacityTheatre: 20,
    metro: 'Бауманская',
    address: 'Бауманская, Москва',
    description: 'Изящный дизайн, сочетающий элегантность и функциональность. Камерная атмосфера для небольших компаний, где каждая деталь продумана до мелочей. Идеален для девичников, романтических встреч, небольших вечеринок.',
    features: ['Камерная атмосфера', 'Элегантный дизайн', 'Для близкой компании'],
    included: ['Мебель на выбор', 'Проектор', 'Муз. оборудование', 'Холодильник', 'Wi-Fi', 'PS4/PS5', 'Санузел', 'Администратор', 'Кондиционер', 'Кофемашина', 'Посуда', 'Микроволновка', 'Чайник', 'Умный свет (RGB)', 'Профессиональное Караоке'],
    extra: ['Дым-машина', 'Лёд', 'Светомузыка', 'Настольные игры'],
    tags: ['karaoke', 'small'],
    img: 'https://static.tildacdn.com/tild3530-3932-4531-b762-353666393834/photo.jpg',
    url: 'https://mskplace.ru/tvoyavina',
    priceWeekday: '1 700 ₽/час',
    priceFri: '4 000 ₽/час',
    priceSat: '5 000 ₽/час',
    priceSun: '3 500 ₽/час',
    cleaning: '3 500 ₽',
  },
  {
    id: 'budda',
    name: 'Budda',
    nameRu: 'Будда',
    area: 'уточняется',
    capacityFuршет: 20,
    capacityBanquet: 20,
    capacityTheatre: 20,
    metro: 'Бауманская',
    address: 'Бауманская, Москва',
    description: 'Концептуальный лофт с верандой для небольших компаний до 20 человек. Атмосферное пространство с восточными мотивами и собственной верандой — идеально для камерных событий и уютных встреч.',
    features: ['Веранда', 'До 20 гостей', 'Концептуальный дизайн', 'Восточные мотивы'],
    included: ['Мебель на выбор', 'Муз. оборудование', 'Холодильник', 'Wi-Fi', 'PS4/PS5', 'Санузел', 'Администратор', 'Кондиционер', 'Кофемашина', 'Посуда', 'Микроволновка', 'Чайник', 'Умный свет (RGB)', 'Профессиональное Караоке'],
    extra: ['Дым-машина', 'Лёд', 'Светомузыка', 'Настольные игры'],
    tags: ['karaoke', 'small'],
    img: 'https://static.tildacdn.com/tild3161-3631-4963-a565-323333393064/upldrCp3UXjpg900x600.jpg',
    url: 'https://mskplace.ru/budda',
    priceWeekday: 'уточняется',
    priceFri: 'уточняется',
    priceSat: 'уточняется',
    priceSun: 'уточняется',
    cleaning: 'уточняется',
  },
  {
    id: 'sava',
    name: 'Sava',
    nameRu: 'Сава',
    area: 'уточняется',
    capacityFuршет: 20,
    capacityBanquet: 15,
    capacityTheatre: 15,
    metro: 'Бауманская',
    address: 'Бауманская, Москва',
    description: 'Концептуальный лофт с верандой для компаний до 15–20 человек. Уютное пространство для самых близких — небольшой день рождения, романтический ужин или камерная фотосессия. Своя атмосфера и характер.',
    features: ['Веранда', 'До 20 гостей', 'Уютная обстановка', 'Концептуальный дизайн'],
    included: ['Мебель на выбор', 'Муз. оборудование', 'Холодильник', 'Wi-Fi', 'PS4/PS5', 'Санузел', 'Администратор', 'Кондиционер', 'Кофемашина', 'Посуда', 'Микроволновка', 'Чайник', 'Умный свет (RGB)', 'Профессиональное Караоке'],
    extra: ['Дым-машина', 'Лёд', 'Светомузыка', 'Настольные игры'],
    tags: ['karaoke', 'small'],
    img: 'https://static.tildacdn.com/tild3164-6137-4864-b836-373434353932/upldKtrE0Hjpg900x600.jpg',
    url: 'https://mskplace.ru/sava',
    priceWeekday: 'уточняется',
    priceFri: 'уточняется',
    priceSat: 'уточняется',
    priceSun: 'уточняется',
    cleaning: 'уточняется',
  },
];

/* ----------------------------------------------------------------
   2. GALLERY DATA
   ---------------------------------------------------------------- */
const galleryImages = [
  { src: 'https://static.tildacdn.com/tild6339-3261-4166-a131-306239343833/IMG_5653_resized.jpg', caption: 'Cactus Loft' },
  { src: 'https://static.tildacdn.com/tild3465-3266-4335-a131-353663353938/_KSV4386_hdr.jpg', caption: 'Memphis Loft' },
  { src: 'https://static.tildacdn.com/tild3534-3664-4437-b838-396130636435/-/empty/_KSV4482.jpg', caption: 'Memphis Loft' },
  { src: 'https://static.tildacdn.com/tild3937-6530-4132-b263-353034666530/_KSV5768hdr.jpg', caption: 'Mira Loft' },
  { src: 'https://static.tildacdn.com/tild3239-3036-4062-a663-356637633362/1.jpg', caption: 'Steklo Loft' },
  { src: 'https://static.tildacdn.com/tild6165-3630-4138-b638-666131623263/_2-2.jpg', caption: 'Simple Loft' },
  { src: 'https://static.tildacdn.com/tild3530-3932-4531-b762-353666393834/photo.jpg', caption: 'Tvoya Vina Loft' },
  { src: 'https://static.tildacdn.com/tild3161-3631-4963-a565-323333393064/upldrCp3UXjpg900x600.jpg', caption: 'Budda Loft' },
  { src: 'https://static.tildacdn.com/tild3164-6137-4864-b836-373434353932/upldKtrE0Hjpg900x600.jpg', caption: 'Sava Loft' },
  { src: 'https://static.tildacdn.com/tild6437-6533-4066-a565-393230316436/-/empty/_KSV4418_hdr.jpg', caption: 'Memphis Loft — детали' },
  { src: 'https://static.tildacdn.com/tild3263-6535-4463-b035-303935633062/-/empty/_KSV4427.jpg', caption: 'Memphis Loft' },
  { src: 'https://static.tildacdn.com/tild6438-3537-4834-b339-313431623635/-/empty/_KSV4392_hdr.jpg', caption: 'Memphis Loft' },
];

/* ----------------------------------------------------------------
   3. REVIEWS DATA
   ---------------------------------------------------------------- */
const reviews = [
  {
    text: 'Отмечали день рождения в Cactus. Два этажа, классная атмосфера, всё включено — музыка, проектор, кухня. Гости были в восторге. Менеджер помог организовать всё буквально за несколько звонков.',
    name: 'Анастасия К.',
    event: 'День рождения · Cactus',
    initial: 'А',
  },
  {
    text: 'Брали Memphis для корпоратива. Необычный итальянский стиль, яркие цвета, всё очень стильно. Команда была под впечатлением. Отдельный вход — большой плюс, никаких соседей.',
    name: 'Дмитрий Р.',
    event: 'Корпоратив · Memphis',
    initial: 'Д',
  },
  {
    text: 'Simple — лучший лофт для девичника! Белый интерьер, камин, веранда — всё как на картинке. Можно со своим шампанским, никаких лишних трат. Рекомендую!',
    name: 'Мария В.',
    event: 'Девичник · Simple',
    initial: 'М',
  },
  {
    text: 'Снимали Mira для фотосессии. Неоновые огни, необычные детали со всего мира — каждый кадр выходил уникальным. Администратор помогал с освещением. Очень доволен результатом.',
    name: 'Никита О.',
    event: 'Фотосессия · Mira',
    initial: 'Н',
  },
  {
    text: 'Steklo — что-то между музеем и ночным клубом. Поразительный микс XIX и XX веков. Гости весь вечер обсуждали интерьер. Звук, свет — всё на высоте.',
    name: 'Елена С.',
    event: 'Вечеринка · Steklo',
    initial: 'Е',
  },
  {
    text: 'Бронировали Budda для небольшой компании. Веранда — отдельная история, все вышли туда. Уютно, камерно, атмосферно. Для близких людей — идеальный выбор.',
    name: 'Алексей Ф.',
    event: 'День рождения · Budda',
    initial: 'А',
  },
];

/* ----------------------------------------------------------------
   4. RENDER LOFT CARDS
   ---------------------------------------------------------------- */
function renderLoftCards() {
  const grid = document.getElementById('loftsGrid');
  if (!grid) return;

  grid.innerHTML = lofts.map((loft, i) => `
    <div
      class="loft-card reveal"
      style="--i:${i}"
      data-tags="${loft.tags.join(' ')}"
      data-id="${loft.id}"
      role="button"
      tabindex="0"
      aria-label="Подробнее о ${loft.name}"
    >
      <div class="loft-card__img-wrap">
        <img
          src="${loft.img}"
          alt="Лофт ${loft.name} — ${loft.area}, до ${loft.capacityFuршет} гостей"
          class="loft-card__img"
          loading="lazy"
        />
        <div class="loft-card__overlay"></div>
        <span class="loft-card__metro">${loft.metro}</span>
        <span class="loft-card__capacity">до ${loft.capacityFuршет} чел.</span>
      </div>
      <div class="loft-card__body">
        <h3 class="loft-card__name">${loft.name}</h3>
        <p class="loft-card__area">${loft.area} · ${loft.capacityFuршет} фуршет · ${loft.capacityBanquet} банкет</p>
        <p class="loft-card__desc">${loft.description}</p>
        <div class="loft-card__features">
          ${loft.features.slice(0, 3).map(f => `<span class="loft-tag">${f}</span>`).join('')}
          ${loft.tags.includes('karaoke') ? '<span class="loft-tag">Караоке</span>' : ''}
        </div>
        <button class="btn btn--gold loft-card__action" data-loft="${loft.id}">
          Узнать стоимость
        </button>
      </div>
    </div>
  `).join('');

  // Trigger reveal for newly created cards
  setTimeout(initReveal, 50);

  // Attach click events
  grid.querySelectorAll('[data-loft]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openLoftModal(btn.dataset.loft);
    });
  });
  grid.querySelectorAll('.loft-card').forEach(card => {
    card.addEventListener('click', () => openLoftModal(card.dataset.id));
    card.addEventListener('keypress', e => {
      if (e.key === 'Enter') openLoftModal(card.dataset.id);
    });
  });
}

/* ----------------------------------------------------------------
   5. FILTERS
   ---------------------------------------------------------------- */
function initFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('loftsGrid');
  if (!buttons.length || !grid) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      grid.querySelectorAll('.loft-card').forEach(card => {
        if (filter === 'all') {
          card.classList.remove('hidden');
          return;
        }
        const tags = card.dataset.tags || '';
        if (filter === 'large') {
          card.classList.toggle('hidden', !tags.includes('large'));
        } else if (filter === 'small') {
          card.classList.toggle('hidden', !tags.includes('small'));
        } else {
          card.classList.toggle('hidden', !tags.includes(filter));
        }
      });
    });
  });
}

/* ----------------------------------------------------------------
   6. LOFT MODAL
   ---------------------------------------------------------------- */
function openLoftModal(id) {
  const loft = lofts.find(l => l.id === id);
  if (!loft) return;

  const modal  = document.getElementById('loftModal');
  const bg     = document.getElementById('modalBg');
  const content = document.getElementById('modalContent');

  content.innerHTML = `
    <div class="modal-hero">
      <img
        src="${loft.img}"
        alt="Лофт ${loft.name}"
      />
    </div>
    <div class="modal-body">
      <h2 class="modal-name">${loft.name}</h2>
      <div class="modal-stats">
        <div class="modal-stat">
          <span>Площадь</span>
          <span>${loft.area}</span>
        </div>
        <div class="modal-stat">
          <span>Фуршет</span>
          <span>до ${loft.capacityFuршет} чел.</span>
        </div>
        <div class="modal-stat">
          <span>Банкет</span>
          <span>до ${loft.capacityBanquet} чел.</span>
        </div>
        <div class="modal-stat">
          <span>Театр</span>
          <span>до ${loft.capacityTheatre} чел.</span>
        </div>
        <div class="modal-stat">
          <span>Метро</span>
          <span>${loft.metro}</span>
        </div>
      </div>

      <p class="modal-desc">${loft.description}</p>

      <div>
        <p class="modal-section-label">Цены на аренду</p>
        <div class="modal-stats" style="margin-bottom:1.5rem">
          <div class="modal-stat">
            <span>Пн–Чт</span>
            <span>${loft.priceWeekday}</span>
          </div>
          <div class="modal-stat">
            <span>Пятница</span>
            <span>${loft.priceFri}</span>
          </div>
          <div class="modal-stat">
            <span>Суббота</span>
            <span>${loft.priceSat}</span>
          </div>
          <div class="modal-stat">
            <span>Воскресенье</span>
            <span>${loft.priceSun}</span>
          </div>
          <div class="modal-stat">
            <span>Клининг</span>
            <span>${loft.cleaning}</span>
          </div>
        </div>
      </div>

      <div>
        <p class="modal-section-label">Входит в стоимость</p>
        <div class="modal-features">
          ${loft.included.map(f => `<span class="loft-tag">${f}</span>`).join('')}
        </div>
      </div>

      <div>
        <p class="modal-section-label">Дополнительные услуги</p>
        <div class="modal-features" style="margin-bottom:2rem">
          ${loft.extra.map(f => `<span class="loft-tag">${f}</span>`).join('')}
        </div>
      </div>

      <div class="modal-cta">
        <a href="#booking" class="btn btn--gold" onclick="closeLoftModal()">Отправить заявку</a>
        <a href="${loft.url}" class="btn btn--ghost" target="_blank" rel="noopener">На сайте mskplace.ru</a>
        <a href="https://t.me/mskplaceloft" class="btn btn--ghost" target="_blank">Написать в Telegram</a>
      </div>
    </div>
  `;

  modal.classList.add('open');
  bg.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLoftModal() {
  const modal = document.getElementById('loftModal');
  const bg    = document.getElementById('modalBg');
  modal.classList.remove('open');
  bg.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  document.getElementById('modalClose').addEventListener('click', closeLoftModal);
  document.getElementById('modalBg').addEventListener('click', closeLoftModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLoftModal();
  });
}

/* ----------------------------------------------------------------
   7. GALLERY RENDERING + LIGHTBOX
   ---------------------------------------------------------------- */
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  grid.innerHTML = galleryImages.map((img, i) => `
    <div class="gallery-item" data-index="${i}" role="button" tabindex="0" aria-label="Открыть фото ${img.caption}">
      <img
        src="${img.src}"
        alt="${img.caption}"
        loading="lazy"
      />
      <div class="gallery-item__overlay">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M4 14h20M14 4v20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(+item.dataset.index));
    item.addEventListener('keypress', e => {
      if (e.key === 'Enter') openLightbox(+item.dataset.index);
    });
  });
}

let currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  const lb     = document.getElementById('lightbox');
  const img    = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  img.src = galleryImages[index].src;
  img.alt = galleryImages[index].caption;
  caption.textContent = galleryImages[index].caption;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function moveLightbox(dir) {
  currentLightboxIndex = (currentLightboxIndex + dir + galleryImages.length) % galleryImages.length;
  openLightbox(currentLightboxIndex);
}

function initLightbox() {
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', () => moveLightbox(-1));
  document.getElementById('lightboxNext').addEventListener('click', () => moveLightbox(1));
  document.getElementById('lightbox').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  moveLightbox(-1);
    if (e.key === 'ArrowRight') moveLightbox(1);
  });
}

/* ----------------------------------------------------------------
   8. REVIEWS SLIDER
   ---------------------------------------------------------------- */
function renderReviews() {
  const track = document.getElementById('reviewsTrack');
  const dots  = document.getElementById('reviewsDots');
  if (!track || !dots) return;

  track.innerHTML = reviews.map(r => `
    <div class="review-card">
      <div class="review-card__stars">★★★★★</div>
      <p class="review-card__text">«${r.text}»</p>
      <div class="review-card__author">
        <div class="review-card__avatar">${r.initial}</div>
        <div>
          <p class="review-card__name">${r.name}</p>
          <p class="review-card__event">${r.event}</p>
        </div>
      </div>
    </div>
  `).join('');

  // Dots
  const perPage = getReviewsPerPage();
  const pages   = Math.ceil(reviews.length / perPage);
  dots.innerHTML = Array.from({ length: pages }, (_, i) =>
    `<button class="reviews-dot${i === 0 ? ' active' : ''}" data-page="${i}" aria-label="Страница ${i+1}"></button>`
  ).join('');

  dots.querySelectorAll('.reviews-dot').forEach(d => {
    d.addEventListener('click', () => goToReviewPage(+d.dataset.page));
  });

  // Auto-slide
  let reviewTimer = setInterval(() => {
    const currentPage = +(dots.querySelector('.reviews-dot.active')?.dataset.page || 0);
    goToReviewPage((currentPage + 1) % pages);
  }, 4500);

  track.addEventListener('mouseenter', () => clearInterval(reviewTimer));
}

function getReviewsPerPage() {
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

function goToReviewPage(page) {
  const track = document.getElementById('reviewsTrack');
  const dots  = document.getElementById('reviewsDots');
  const perPage = getReviewsPerPage();
  const cardW   = 360 + 24; // card width + gap
  track.style.transform = `translateX(-${page * perPage * cardW}px)`;
  dots.querySelectorAll('.reviews-dot').forEach((d, i) => {
    d.classList.toggle('active', i === page);
  });
}

/* ----------------------------------------------------------------
   9. HEADER SCROLL EFFECT
   ---------------------------------------------------------------- */
function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ----------------------------------------------------------------
   10. BURGER / MOBILE NAV
   ---------------------------------------------------------------- */
function initBurger() {
  const btn = document.getElementById('burgerBtn');
  const nav = document.getElementById('mobileNav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('active', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.classList.remove('active');
    });
  });
}

/* ----------------------------------------------------------------
   11. SMOOTH SCROLL FOR ANCHOR LINKS
   ---------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // header height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ----------------------------------------------------------------
   12. INTERSECTION OBSERVER — REVEAL ON SCROLL
   ---------------------------------------------------------------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger children within same parent
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ----------------------------------------------------------------
   13. FORM HANDLING
   ---------------------------------------------------------------- */
function initForm() {
  const form    = document.getElementById('bookingForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = 'rgba(220,80,80,0.7)';
        valid = false;
        setTimeout(() => { field.style.borderColor = ''; }, 3000);
      }
    });
    if (!valid) return;

    // Show success
    success.classList.add('show');

    // In production: send to Tilda Forms endpoint or your backend
    // Example:
    // fetch('/api/form', { method: 'POST', body: new FormData(form) });
  });
}

/* ----------------------------------------------------------------
   14. EVENTS SECTION — STAGGER INDEX
   ---------------------------------------------------------------- */
function initEventCards() {
  document.querySelectorAll('.event-card').forEach((card, i) => {
    card.style.setProperty('--i', i);
  });
  document.querySelectorAll('.adv-card').forEach((card, i) => {
    card.style.setProperty('--i', i);
  });
}

/* ----------------------------------------------------------------
   15. INIT ALL
   ---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderLoftCards();
  renderGallery();
  renderReviews();
  initFilters();
  initModal();
  initLightbox();
  initHeader();
  initBurger();
  initSmoothScroll();
  initReveal();
  initForm();
  initEventCards();

  // Re-init reveal after dynamic content rendered
  setTimeout(initReveal, 300);
});

/* Handle resize for reviews */
window.addEventListener('resize', () => {
  renderReviews();
}, { passive: true });
