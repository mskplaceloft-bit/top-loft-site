(function(){
  function renderLofts(){
    var grid = document.getElementById('mb2-loftsGrid');
    if(!grid){ setTimeout(renderLofts, 500); return; }
    var lofts = [
      {name:"Cactus",video:"rutube:18877668573950aaab0a9e60121db9f5",area:"140 м²",cap:"80 фуршет | 50 банкет | 70 театр",metro:"Бауманская",desc:"Двухуровневый лофт в арт-пространстве Басманный двор. Большие люстры притягивают взгляды. Удобная барная зона с кухней на первом этаже. На втором — лаундж-зона с диванами и креслами. Настольный футбол и игровая приставка с ретро-играми.",img:"https://mskplaceloft-bit.github.io/top-loft-site/cactus/1.jpg",images:["https://mskplaceloft-bit.github.io/top-loft-site/cactus/1.jpg","https://mskplaceloft-bit.github.io/top-loft-site/cactus/2.jpg","https://mskplaceloft-bit.github.io/top-loft-site/cactus/3.jpg","https://mskplaceloft-bit.github.io/top-loft-site/cactus/4.jpg","https://mskplaceloft-bit.github.io/top-loft-site/cactus/5.jpg","https://mskplaceloft-bit.github.io/top-loft-site/cactus/6.jpg","https://mskplaceloft-bit.github.io/top-loft-site/cactus/7.jpg","https://mskplaceloft-bit.github.io/top-loft-site/cactus/8.jpg","https://mskplaceloft-bit.github.io/top-loft-site/cactus/9.jpg","https://mskplaceloft-bit.github.io/top-loft-site/cactus/10.jpg","https://mskplaceloft-bit.github.io/top-loft-site/cactus/12.jpg","https://mskplaceloft-bit.github.io/top-loft-site/cactus/13.jpg","https://mskplaceloft-bit.github.io/top-loft-site/cactus/14.jpg","https://mskplaceloft-bit.github.io/top-loft-site/cactus/15.jpg"],price:""},
      {name:"Memphis",video:"yandex:https://disk.yandex.ru/d/DWhP9OWIEq7xZg",area:"135 м²",cap:"60 фуршет | 30 банкет | 50 театр",metro:"Бауманская",desc:"Лофт в итальянском стиле Мемфис на Бауманской. Два бара — это гениально. Своя кухня — это удобно. Отдельный вход — это приятно.",img:"https://mskplaceloft-bit.github.io/top-loft-site/memphis/1.jpg",images:["https://mskplaceloft-bit.github.io/top-loft-site/memphis/1.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/2.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/3.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/4.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/5.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/6.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/7.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/8.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/9.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/10.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/11.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/12.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/13.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/14.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/15.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/16.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/17.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/18.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/19.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/20.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/25.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/26.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/27.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/28.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/21.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/22.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/23.jpg","https://mskplaceloft-bit.github.io/top-loft-site/memphis/24.jpg"],price:""},
      {name:"Mira",video:"yandex:https://disk.yandex.ru/i/qCmuBRtLoATXFw",area:"110 м²",cap:"50 фуршет | 40 банкет | 30 театр",metro:"Бауманская",desc:"Яркий и неповторимый двухуровневый лофт в арт-пространстве Басманный двор. Дизайн со всего мира, неон на любой вкус, два этажа. Отдельная зона для банкета и кухонная зона для сервировки.",img:"https://mskplaceloft-bit.github.io/top-loft-site/mira/1.jpg",images:["https://mskplaceloft-bit.github.io/top-loft-site/mira/1.jpg","https://mskplaceloft-bit.github.io/top-loft-site/mira/2.jpg","https://mskplaceloft-bit.github.io/top-loft-site/mira/3.jpg","https://mskplaceloft-bit.github.io/top-loft-site/mira/4.jpg","https://mskplaceloft-bit.github.io/top-loft-site/mira/5.jpg","https://mskplaceloft-bit.github.io/top-loft-site/mira/6.jpg","https://mskplaceloft-bit.github.io/top-loft-site/mira/7.jpg","https://mskplaceloft-bit.github.io/top-loft-site/mira/8.jpg","https://mskplaceloft-bit.github.io/top-loft-site/mira/9.jpg","https://mskplaceloft-bit.github.io/top-loft-site/mira/10.jpg","https://mskplaceloft-bit.github.io/top-loft-site/mira/11.jpg"],price:""},
      {name:"Steklo",video:"rutube:c0da73b1469d045886b8b6efd43da8d8",area:"110 м²",cap:"50 фуршет | 25 банкет | 20 театр",metro:"Бауманская",desc:"Двухуровневый лофт в неоаристократическом стиле с верандой и настольным теннисом. Профессиональный звук для тех, кто ценит качество. На втором этаже — лаундж с диванами. Отдельный вход и бесплатная парковка.",img:"https://mskplaceloft-bit.github.io/top-loft-site/steklo/1.jpg",images:["https://mskplaceloft-bit.github.io/top-loft-site/steklo/1.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/2.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/3.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/4.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/5.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/6.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/7.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/8.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/9.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/10.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/11.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/12.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/13.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/14.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/15.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/16.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/17.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/18.jpg","https://mskplaceloft-bit.github.io/top-loft-site/steklo/19.jpg"],price:""},
      {name:"Simple",video:"yandex:https://disk.yandex.ru/i/3Ivd_E57V5C0Vg",area:"130 м²",cap:"60 фуршет | 38 банкет | 30 театр",metro:"Бауманская",desc:"Новый дизайнерский лофт с отдельной комнатой для банкета и большой личной верандой",img:"https://mskplaceloft-bit.github.io/top-loft-site/simple/1.jpg",images:["https://mskplaceloft-bit.github.io/top-loft-site/simple/1.jpg","https://mskplaceloft-bit.github.io/top-loft-site/simple/2.jpg","https://mskplaceloft-bit.github.io/top-loft-site/simple/3.jpg","https://mskplaceloft-bit.github.io/top-loft-site/simple/4.jpg","https://mskplaceloft-bit.github.io/top-loft-site/simple/5.jpg","https://mskplaceloft-bit.github.io/top-loft-site/simple/6.jpg","https://static.tildacdn.com/tild6662-3562-4262-b066-333434393465/_DSC9817.jpg","https://static.tildacdn.com/tild3534-6436-4438-b166-373432306362/_DSC9813.jpg","https://static.tildacdn.com/tild3965-6339-4831-b661-383232633166/_DSC9842.jpg","https://mskplaceloft-bit.github.io/top-loft-site/simple/7.jpg","https://mskplaceloft-bit.github.io/top-loft-site/simple/8.jpg"],price:""},
      {name:"Tvoya Vina",video:"yandex:https://disk.yandex.ru/d/Tt1GDE_k0frMNg",area:"60 м²",cap:"30 фуршет | 18 банкет | 20 театр",metro:"Бауманская",desc:"Дизайнерский лофт с душой: две зоны, каждая со своим настроением, и главный акцент — камин.",img:"https://mskplaceloft-bit.github.io/top-loft-site/tvoya-vina/1.jpg",images:["https://mskplaceloft-bit.github.io/top-loft-site/tvoya-vina/1.jpg","https://mskplaceloft-bit.github.io/top-loft-site/tvoya-vina/2.jpg","https://mskplaceloft-bit.github.io/top-loft-site/tvoya-vina/3.jpg","https://mskplaceloft-bit.github.io/top-loft-site/tvoya-vina/4.jpg","https://mskplaceloft-bit.github.io/top-loft-site/tvoya-vina/5.jpg","https://mskplaceloft-bit.github.io/top-loft-site/tvoya-vina/6.jpg","https://mskplaceloft-bit.github.io/top-loft-site/tvoya-vina/7.jpg","https://mskplaceloft-bit.github.io/top-loft-site/tvoya-vina/8.jpg","https://mskplaceloft-bit.github.io/top-loft-site/tvoya-vina/9.jpg"],price:""},
      {name:"Budda",video:"rutube:02b044199743d593337dd1a86231691e",area:"35 м²",cap:"до 20 гостей",metro:"Бауманская",desc:"Концептуальный лофт, в котором восточная атмосфера сочетается с лофт-стилем. Кирпичные стены, уютная личная веранда и качели в 5 минутах от метро Бауманская. Электрогриль входит в стоимость.",img:"https://mskplaceloft-bit.github.io/top-loft-site/budda/1.jpg",images:["https://mskplaceloft-bit.github.io/top-loft-site/budda/1.jpg","https://mskplaceloft-bit.github.io/top-loft-site/budda/2.jpg","https://mskplaceloft-bit.github.io/top-loft-site/budda/3.jpg","https://mskplaceloft-bit.github.io/top-loft-site/budda/4.jpg","https://mskplaceloft-bit.github.io/top-loft-site/budda/5.jpg","https://mskplaceloft-bit.github.io/top-loft-site/budda/6.jpg","https://mskplaceloft-bit.github.io/top-loft-site/budda/7.jpg"],price:""},
      {name:"Sava",video:"rutube:b881ad5a1364086077afbace8c8035de",area:"30 м²",cap:"до 20 гостей",metro:"Бауманская",desc:"Уютный лофт с личной верандой в 5 минутах от метро Бауманская. Здесь цвет решает всё — насыщенные оттенки, необычные детали в декоре и уютные качели. Веранда с запахом жареного мяса и без суеты. Электрогриль входит в стоимость.",img:"https://mskplaceloft-bit.github.io/top-loft-site/sava/1.jpg",images:["https://mskplaceloft-bit.github.io/top-loft-site/sava/1.jpg","https://mskplaceloft-bit.github.io/top-loft-site/sava/2.jpg","https://mskplaceloft-bit.github.io/top-loft-site/sava/3.jpg","https://mskplaceloft-bit.github.io/top-loft-site/sava/4.jpg","https://mskplaceloft-bit.github.io/top-loft-site/sava/5.jpg","https://mskplaceloft-bit.github.io/top-loft-site/sava/6.jpg"],price:""}
    ];
    grid.innerHTML = lofts.map(function(l, idx){
      var images = (l.images && l.images.length) ? l.images : [l.img];
      var imgsHtml = images.map(function(src,i){
        var small = src.indexOf('mskplaceloft-bit.github.io') !== -1 ? src.replace(/\.jpg$/,'-900.jpg') : '';
        var srcsetVal = small ? small+' 900w, '+src+' 1400w' : '';
        var attrs = i===0
          ? 'src="'+src+'"'+(srcsetVal ? ' srcset="'+srcsetVal+'"' : '')
          : 'data-src="'+src+'"'+(srcsetVal ? ' data-srcset="'+srcsetVal+'"' : '');
        var sizesAttr = srcsetVal ? ' sizes="(min-width:1200px) 33vw, (min-width:768px) 50vw, 100vw"' : '';
        return '<img class="lc-img lc-img-'+i+'" '+attrs+sizesAttr+' alt="'+l.name+'" loading="lazy" data-idx="'+i+'" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity 0.6s ease;opacity:'+((i===0)?1:0)+'"/>';
      }).join('');
      var dotsHtml = images.length > 1
        ? '<div class="lc-dots">' + images.map(function(_,i){ return '<button class="lc-dot'+(i===0?' active':'')+'" data-i="'+i+'"></button>'; }).join('') + '</div>'
        : '';
      var arrowsHtml = images.length > 1
        ? '<button class="lc-arrow lc-arrow-prev">\u2039</button><button class="lc-arrow lc-arrow-next">\u203a</button>'
        : '';
      return '<div class="loft-card" data-idx="'+idx+'">'+
        imgsHtml +
        dotsHtml +
        arrowsHtml +
        '<div class="lc-ov"></div>'+
        '<div class="lc-body">'+
          '<div class="lc-name">'+l.name+'</div>'+
          '<div class="lc-area">'+l.area+' • м. '+l.metro+'</div>'+
          '<div class="lc-cap">'+l.cap+'</div>'+
          '<div class="lc-hover-info">'+
            '<div class="lc-actions">'+
              '<button class="lc-btn-detail">Подробнее</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    }).join('');

    // carousel + hover logic
    [].forEach.call(grid.querySelectorAll('.loft-card'), function(card){
      var imgs = card.querySelectorAll('.lc-img');
      if(imgs.length < 2) return;
      var dots = card.querySelectorAll('.lc-dot');
      var prevBtn = card.querySelector('.lc-arrow-prev');
      var nextBtn = card.querySelector('.lc-arrow-next');
      var cur = 0;
      var autoTimer = null;
      function show(i){
        imgs[cur].style.opacity = 0;
        if(dots[cur]) dots[cur].classList.remove('active');
        cur = (i + imgs.length) % imgs.length;
        if(imgs[cur].dataset.src){
          if(imgs[cur].dataset.srcset){
            imgs[cur].srcset = imgs[cur].dataset.srcset;
            imgs[cur].removeAttribute('data-srcset');
          }
          imgs[cur].src = imgs[cur].dataset.src;
          imgs[cur].removeAttribute('data-src');
        }
        imgs[cur].style.opacity = 1;
        if(dots[cur]) dots[cur].classList.add('active');
      }
      card._resetCarousel = function(){ if(cur !== 0) show(0); };
      [].forEach.call(dots, function(d){
        d.addEventListener('click', function(e){ e.stopPropagation(); show(parseInt(d.getAttribute('data-i'),10)); });
      });
      if(prevBtn) prevBtn.addEventListener('click', function(e){ e.stopPropagation(); show(cur-1); });
      if(nextBtn) nextBtn.addEventListener('click', function(e){ e.stopPropagation(); show(cur+1); });
      card.addEventListener('mouseenter', function(){ clearInterval(autoTimer); autoTimer = setTimeout(function(){ autoTimer = setInterval(function(){ show(cur+1); }, 2500); }, 600); });
      card.addEventListener('mouseleave', function(){ clearInterval(autoTimer); autoTimer = null; });
    });

    // detail button opens modal
    [].forEach.call(grid.querySelectorAll('.lc-btn-detail'), function(btn){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        var card = btn.closest('.loft-card');
        var idx = parseInt(card.getAttribute('data-idx'), 10);
        openLoftModal(lofts[idx]);
      });
    });

    // whole card click
    [].forEach.call(grid.querySelectorAll('.loft-card'), function(card){
      card.addEventListener('click', function(e){
        if(e.target.closest('.lc-arrow') || e.target.closest('.lc-dot')) return;
        if(e.target.closest('.lc-btn-detail')) {
          var idx = parseInt(card.getAttribute('data-idx'), 10);
          openLoftModal(lofts[idx]);
          return;
        }
        var isTouchDevice = window.matchMedia('(hover:none)').matches;
        if(isTouchDevice) {
          if(card.classList.contains('info-hidden')) {
            card.classList.remove('info-hidden');
            if(card._resetCarousel) card._resetCarousel();
          } else {
            [].forEach.call(grid.querySelectorAll('.loft-card.info-hidden'), function(c){
              c.classList.remove('info-hidden');
              if(c._resetCarousel) c._resetCarousel();
            });
            card.classList.add('info-hidden');
          }
          return;
        }
        var idx = parseInt(card.getAttribute('data-idx'), 10);
        openLoftModal(lofts[idx]);
      });
    });
    document.addEventListener('click', function(e){
      if(!e.target.closest('.loft-card')) {
        [].forEach.call(grid.querySelectorAll('.loft-card.info-hidden'), function(c){
          c.classList.remove('info-hidden');
          if(c._resetCarousel) c._resetCarousel();
        });
      }
    });

    var loftParam = new URLSearchParams(location.search).get('loft');
    if(loftParam){
      var slugify = function(s){ return s.toLowerCase().replace(/\s+/g,'-'); };
      var targetLoft = null;
      for(var li=0; li<lofts.length; li++){
        if(slugify(lofts[li].name) === loftParam.toLowerCase()){ targetLoft = lofts[li]; break; }
      }
      if(targetLoft) openLoftModal(targetLoft);
    }

  }

  var modalImages = [];
  var modalCurIdx = 0;

  function initModal(){
    var modal = document.getElementById('mb-loftmodal');
    if(!modal){
      modal = document.createElement('div');
      modal.id = 'mb-loftmodal';
      modal.innerHTML = '<div class="lm-box">'
        +'<div class="lm-close">\u2715</div>'
        +'<div class="lm-gallery">'
          +'<div class="lm-imgwrap"></div>'
          +'<div class="lm-arrow lm-arrow-prev">\u2039</div>'
          +'<div class="lm-arrow lm-arrow-next">\u203a</div>'
          +'<div class="lm-counter"></div>'
          +'<div class="lm-dots"></div>'
        +'</div>'
        +'<div class="lm-info">'
          +'<div class="lm-name"></div>'
          +'<div class="lm-area"></div>'
          +'<div class="lm-desc"></div>'
          +'<div class="lm-cap"></div>'
          +'<div class="lm-price"></div>'
          +'<div class="lm-btns-wrap">'
        +'<a href="#mb2-booking" class="lm-btn">Узнать стоимость</a>'
        +'<button class="lm-video-btn">▶ Видео</button>'
        +'</div>'
        +'</div>'
      +'</div>';
      document.body.appendChild(modal);

      modal.querySelector('.lm-close').addEventListener('click', closeLoftModal);
      modal.addEventListener('click', function(e){ if(e.target === modal) closeLoftModal(); });
      modal.querySelector('.lm-arrow-prev').addEventListener('click', function(e){ e.stopPropagation(); showModalImg(modalCurIdx-1); });
      modal.querySelector('.lm-arrow-next').addEventListener('click', function(e){ e.stopPropagation(); showModalImg(modalCurIdx+1); });
      modal.querySelector('.lm-btn').addEventListener('click', closeLoftModal);
      modal.addEventListener('click', function(e) {
        if (e.target.classList.contains('lm-video-btn')) {
          var url = modal._videoUrl;
          if (!url) return;
          var embedUrl = '';
          if (url.startsWith('rutube:')) {
            var id = url.replace('rutube:','');
            embedUrl = 'https://rutube.ru/play/embed/' + id + '/';
          } else if (url.startsWith('yandex:')) {
            // Яндекс.Диск не поддерживает iframe — открываем в новой вкладке
            window.open(url.replace('yandex:',''), '_blank');
            return;
          }
          if (!embedUrl) return;
          // Показываем видео-попап
          var vp = document.getElementById('mb2-videopop');
          if (!vp) {
            vp = document.createElement('div');
            vp.id = 'mb2-videopop';
            vp.style.cssText = 'position:fixed;inset:0;z-index:10001;background:rgba(0,0,0,0.92);display:flex;align-items:center;justify-content:center;';
            vp.innerHTML = '<div style="position:relative;width:90vw;max-width:900px;aspect-ratio:16/9;">'
              + '<button id="mb2-videopop-close" style="position:absolute;top:-2.5rem;right:0;background:none;border:none;color:#e8ddd0;font-size:1.8rem;cursor:pointer;line-height:1;">×</button>'
              + '<iframe id="mb2-videopop-frame" src="" frameborder="0" allowfullscreen style="width:100%;height:100%;border-radius:4px;"></iframe>'
              + '</div>';
            document.body.appendChild(vp);
            document.getElementById('mb2-videopop-close').addEventListener('click', function() {
              document.getElementById('mb2-videopop-frame').src = '';
              vp.style.display = 'none';
            });
            vp.addEventListener('click', function(ev) {
              if (ev.target === vp) {
                document.getElementById('mb2-videopop-frame').src = '';
                vp.style.display = 'none';
              }
            });
          }
          document.getElementById('mb2-videopop-frame').src = embedUrl;
          vp.style.display = 'flex';
        }
      });
      document.addEventListener('keydown', function(e){
        if(!modal.classList.contains('open')) return;
        if(e.key === 'Escape') closeLoftModal();
        if(e.key === 'ArrowLeft') showModalImg(modalCurIdx-1);
        if(e.key === 'ArrowRight') showModalImg(modalCurIdx+1);
      });
    }
    return modal;
  }

  function showModalImg(i){
    if(!modalImages.length) return;
    modalCurIdx = (i + modalImages.length) % modalImages.length;
    var modal = document.getElementById('mb-loftmodal');
    var wrap = modal.querySelector('.lm-imgwrap');
    wrap.innerHTML = '<img src="'+modalImages[modalCurIdx]+'" alt=""/>';
    var counter = modal.querySelector('.lm-counter');
    counter.textContent = (modalCurIdx+1) + ' / ' + modalImages.length;
    counter.style.display = modalImages.length > 1 ? 'block' : 'none';
    var arrows = modal.querySelectorAll('.lm-arrow');
    [].forEach.call(arrows, function(a){ a.style.display = modalImages.length > 1 ? 'flex' : 'none'; });
    var dotsWrap = modal.querySelector('.lm-dots');
    if(modalImages.length > 1 && modalImages.length <= 16){
      dotsWrap.innerHTML = modalImages.map(function(_,i2){ return '<span class="lm-dot'+(i2===modalCurIdx?' active':'')+'" data-i="'+i2+'"></span>'; }).join('');
      dotsWrap.style.display = 'flex';
      [].forEach.call(dotsWrap.querySelectorAll('.lm-dot'), function(d){
        d.addEventListener('click', function(e){ e.stopPropagation(); showModalImg(parseInt(d.getAttribute('data-i'),10)); });
      });
    } else {
      dotsWrap.style.display = 'none';
    }
  }

  function openLoftModal(l){
    var modal = initModal();
    modalImages = (l.images && l.images.length) ? l.images : [l.img];
    modal.querySelector('.lm-name').textContent = l.name;
    modal.querySelector('.lm-area').textContent = l.area + ' • м. ' + l.metro;
    modal.querySelector('.lm-desc').textContent = l.desc;
    modal.querySelector('.lm-cap').textContent = l.cap;
    modal.querySelector('.lm-price').textContent = l.price;
    showModalImg(0);
    modal.classList.add('open');
    // Сохраняем видео текущего лофта
    modal._videoUrl = l.video || null;
    document.body.style.overflow = 'hidden';
  }

  function closeLoftModal(){
    var modal = document.getElementById('mb-loftmodal');
    if(modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

function initForm(){
    // Раньше здесь была JS-имитация: скрытая копия настоящей формы Tilda заполнялась
    // программно и "нажималась" через клик по кнопке. Это трижды ломалось по разным
    // причинам (маска телефона, гонка с async-скриптом Tilda, вероятная защита от
    // спама/капча на программное заполнение) — поэтому теперь используем настоящую
    // форму Tilda напрямую, просто визуально перемещая и стилизуя её под дизайн сайта.
    var box = document.querySelector('#mb2-booking .form-box');
    var realRec = document.getElementById('rec2469650801');
    if(!box || !realRec){ setTimeout(initForm, 500); return; }
    box.appendChild(realRec);

    var realForm = document.getElementById('form2469650801');
    if(realForm && window.MutationObserver){
      var successBox = realForm.querySelector('.js-successbox');
      if(successBox){
        var fired = false;
        var observer = new MutationObserver(function(){
          if(!fired && successBox.style.display !== 'none'){
            fired = true;
            if(window.ym) ym(110820287, 'reachGoal', 'form_submit');
          }
        });
        observer.observe(successBox, {attributes:true, attributeFilter:['style']});
      }
    }
  }

  function ensureHeroAutoplay(){
    var video = document.querySelector('.hero video');
    if(!video) return;
    var tryPlay = function(){
      var p = video.play();
      if(p && typeof p.catch === 'function') p.catch(function(){});
    };
    tryPlay();
    var resume = function(){ if(video.paused) tryPlay(); };
    var events = ['touchstart','scroll','click','pointerdown'];
    events.forEach(function(evt){ document.addEventListener(evt, resume, {passive:true}); });
    video.addEventListener('playing', function(){
      events.forEach(function(evt){ document.removeEventListener(evt, resume); });
    });
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', function(){ renderLofts(); initForm(); ensureHeroAutoplay(); });
  } else { renderLofts(); initForm(); ensureHeroAutoplay(); }

  
})();
