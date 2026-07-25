const STORAGE_KEY = 'inventory_data';

const defaultInventory  = [
    { id: 1, name: 'Батончик Rodeo', category: 'Батончики', quantity: 9, photo: 'https://api.kdvonline.ru/thumbnail/simple/33/654/33654.webp' },
    { id: 2, name: 'Батончик Твист', category: 'Батончики', quantity: 22, photo: 'https://basket-14.wbbasket.ru/vol2130/part213073/213073631/images/big/1.webp' },
    { id: 3, name: 'Батончик corn line', category: 'Батончики', quantity: 2, photo: 'https://api.kdvonline.ru/thumbnail/740x494/51/703/51703.webp' },
    { id: 4, name: 'Батончик Bonefety', category: 'Батончики', quantity: 22, photo: 'https://api.kdvonline.ru/thumbnail/740x494/33/707/33707.webp' },
    { id: 5, name: 'Батончик Крокант', category: 'Батончики', quantity: 32, photo: 'https://api.kdvonline.ru/thumbnail/740x494/33/709/33709.webp' },
    { id: 6, name: 'Кислые конфеты', category: 'Конфеты/Мармелад', quantity: 6, photo: '🍬' },
    { id: 7, name: 'Батончик Fruto Bello', category: 'Батончики', quantity: 23, photo: 'https://api.kdvonline.ru/thumbnail/740x494/33/495/33495.webp' },
    { id: 8, name: 'Батончик Furor', category: 'Батончики', quantity: 20, photo: 'https://api.kdvonline.ru/thumbnail/740x494/33/655/33655.webp' },
    { id: 9, name: 'Мармелад', category: 'Конфеты/Мармелад', quantity: 27, photo: '🍬' },
    { id: 10, name: 'Жевательный мармелад', category: 'Конфеты/Мармелад', quantity: 10, photo: '🍬' },
    { id: 11, name: 'Мармелад крут фрут бол', category: 'Конфеты/Мармелад', quantity: 9, photo: '🍬' },
    { id: 12, name: 'Батончик Yarche', category: 'Батончики', quantity: 26, photo: 'https://api.kdvonline.ru/thumbnail/740x494/33/705/33705.webp' },
    { id: 13, name: 'Батончик Super', category: 'Батончики', quantity: 9, photo: 'https://api.kdvonline.ru/thumbnail/740x494/33/677/33677.webp' },
    { id: 14, name: 'Батончик Sprint', category: 'Батончики', quantity: 14, photo: 'https://api.kdvonline.ru/thumbnail/740x494/33/715/33715.webp' },
    { id: 15, name: 'Батончик Чио Рио', category: 'Батончики', quantity: 13, photo: 'https://api.kdvonline.ru/thumbnail/740x494/55/366/55366.webp' },
    { id: 16, name: 'Протеиновый батончик', category: 'Батончики', quantity: 13, photo: '🍫' },
    { id: 17, name: 'Пикник', category: 'Батончики', quantity: 4, photo: 'https://media.komus.ru/medias/sys_master/product-images/product-images/h1f/h9b/13928526938142/429619-1-800Wx800H.jpg' },
    { id: 18, name: 'Сникерс маленький', category: 'Батончики', quantity: 5, photo: 'https://ir.ozone.ru/s3/multimedia-g/wc1000/6268117108.jpg' },
    { id: 21, name: 'Сникерс большой', category: 'Батончики', quantity: 9, photo: 'https://dblack.ru/wp-content/uploads/2022/06/07_04_04_snickers_80_32.jpg' },
    { id: 19, name: 'Твикс большой', category: 'Батончики', quantity: 2, photo: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/1665616724/100024267868b0.jpg' },
    { id: 20, name: 'Баунти маленький', category: 'Батончики', quantity: 2, photo: 'https://ir.ozone.ru/s3/multimedia-1-x/wc1000/8111957793.jpg' },
    { id: 22, name: 'Баунти большой', category: 'Батончики', quantity: 1, photo: 'https://vkusmart.vmv.kz/upload/iblock/fd0/i7qj8uri09ellaobzkztfrkdyo220z62.png  ' },
    { id: 23, name: 'Чоко Пай', category: 'Батончики', quantity: 13, photo: 'https://lotteconf.ru/images/novaya_upakovka/zamena/cp_klassica12_min.png' },
    { id: 24, name: 'Кофе', category: 'Напитки', quantity: 25, photo: '☕' },
    { id: 25, name: 'Чупа-чупс', category: 'Конфеты/Мармелад', quantity: 14, photo: '🍬' },
    { id: 26, name: 'Батончик Jets', category: 'Батончики', quantity: 18, photo: 'https://api.kdvonline.ru/thumbnail/740x494/33/681/33681.webp' },
    { id: 27, name: 'Кириешки', category: 'Снеки', quantity: 28, photo: 'https://images-foodtech.magnit.ru/NfbN6KV_462DARGAtce-vO73i1IHEaySi2rS6P6nFwU/rs:fit:1600:1600/plain/s3://img-dostavka/catalog/uf/844/844de47681f64a9da2a520d1704b72f3/f24c09646e37c8351ad763960eedb37e.jpeg@webp' },
    { id: 28, name: 'Соевое мясо', category: 'Снеки', quantity: 42, photo: '🍿' },
    { id: 29, name: 'Чипсы Lays', category: 'Снеки', quantity: 23, photo: 'https://tsx.x5static.net/i/800x800-fit/xdelivery/files/41/31/7463b4afc7e87b60e27e0a69d697.jpg' },
    { id: 30, name: 'Попкорн', category: 'Снеки', quantity: 12, photo: '🍿' },
    { id: 31, name: 'Cheetos', category: 'Снеки', quantity: 24, photo: 'https://tsx.x5static.net/i/800x800-fit/xdelivery/files/7c/62/6a649f12a7f31c51ecfbe79198d5.jpg' },
    { id: 32, name: 'Чипсоны', category: 'Снеки', quantity: 24, photo: '🍿' },
    { id: 33, name: 'Луковые кольца', category: 'Снеки', quantity: 24, photo: '🍿' },
    { id: 34, name: 'Про чипсы', category: 'Снеки', quantity: 24, photo: '🍿' },
    { id: 35, name: 'Китайкие чипсы', category: 'Снеки', quantity: 11, photo: '🍿' },
    { id: 36, name: 'Флэш гейм мод', category: 'Энергетики', quantity: 25, photo: 'https://sun9-38.vkuserphoto.ru/s/v1/ig2/AdVtdtLi7WFjYY28OX2rjuuV4ntV5uZgovwNEI2WSm2DhtxdoO91XtxpelMelDRtQgRXHJDsIFytslTow2k8JQwj.jpg?quality=96&as=32x31,48x47,72x71,108x106,160x157,240x236,360x354,480x472,540x531,640x629,720x707,864x849&from=bu&cs=864x0' },
    { id: 37, name: 'Флэш киви карамбола', category: 'Энергетики', quantity: 9, photo: 'https://basket-15.wbbasket.ru/vol2293/part229383/229383957/images/big/6.webp' },
    { id: 38, name: 'Флэш черничный пончик', category: 'Энергетики', quantity: 19, photo: 'https://images-foodtech.magnit.ru/PK_ye_nG0nuoxuuChnVXFHyvcEO0IIT_l2yXUE0kycw/rs:fit:1600:1600/plain/s3://img-dostavka/catalog/uf/58f/58f40ac4f9997597dbdd3a2a7deb42db/8493fc9aa12a22cb34926bf8300e9679.jpeg@webp' },
    { id: 39, name: 'Флэш персик голубика', category: 'Энергетики', quantity: 11, photo: 'https://kalinbaza.ru/image/cache/catalog/products/energy/energy_0063-700x700.jpg' },
    { id: 40, name: 'Флэш банан', category: 'Энергетики', quantity: 9, photo: 'https://skorus.ru/media/products/79/38/7938ed13-62d3-11f0-886a-3cecef8b5b69.jpg' },
    { id: 41, name: 'Флэш маршмелоу', category: 'Энергетики', quantity: 12, photo: 'https://baltika4you.ru/images/detailed/12/=p48700.png' },
    { id: 42, name: 'Флэш Ягодный микс', category: 'Энергетики', quantity: 8, photo: 'https://goods.swnn.ru/108714.jpg' },
    { id: 43, name: 'Флэш манго ананас', category: 'Энергетики', quantity: 4, photo: 'https://baltika4you.ru/images/detailed/12/=k52700.png' },
    { id: 44, name: 'Флэш баблгам', category: 'Энергетики', quantity: 14, photo: 'https://ir.ozone.ru/s3/multimedia-1-3/wc1000/7281138675.jpg' },
    { id: 45, name: 'Флэш мятный лайм', category: 'Энергетики', quantity: 10, photo: 'https://ir.ozone.ru/s3/multimedia-1-t/wc1000/7705561889.jpg' },
    { id: 46, name: 'Флэш апельсин', category: 'Энергетики', quantity: 7, photo: 'https://tsx.x5static.net/i/1600x1600-fit/xdelivery/files/c2/2d/bdda9770ce25bc28e9e564b70ce3.jpg' },
    { id: 47, name: 'Флэш оригинальный', category: 'Энергетики', quantity: 19, photo: 'https://images-foodtech.magnit.ru/9fR42w4_2xDDP7TV_IvIhWAtCBkRH1m2QBcLOlCieJ8/rs:fit:1600:1600/plain/s3://img-dostavka/catalog/uf/0d2/0d2cea31145749fec10031d0dff0f168/0beccf2d55353f96c0008b2125fb2588.jpeg@webp' },
    { id: 48, name: 'Флэш ультра(золотой)', category: 'Энергетики', quantity: 11, photo: 'https://bliznetsy24.ru/upload/iblock/663/0taphge606d0dc5s9bxz6ndpfe03chte.jpg' },
    { id: 49, name: 'Флэш бутылка 0.5л', category: 'Энергетики', quantity: 34, photo: 'https://cdn.metro-cc.ru/ru/ru_pim_467376001001_01.png?maxwidth=460&maxheight=460&format=jpg&quality=90&width=460&height=460' },
    { id: 50, name: 'Флэш бутылка 1л', category: 'Энергетики', quantity: 11, photo: 'https://cdn.metro-cc.ru/ru/ru_pim_467387001002_02.png?maxwidth=460&maxheight=460&format=jpg&quality=90&width=460&height=460' },
    { id: 51, name: 'Флэш Лайм 1л', category: 'Энергетики', quantity: 13, photo: 'https://tsx.x5static.net/i/1600x1600-fit/xdelivery/files/c0/82/d7a6518a4d2c7cd817bc12ff31a5.jpg' },
    { id: 52, name: 'берн оригинальный', category: 'Энергетики', quantity: 13, photo: 'https://tsx.x5static.net/i/1600x1600-fit/xdelivery/files/cd/60/83a013f1efe66b3b80519c81d39f.jpg' },
    { id: 53, name: 'берн фрут панч', category: 'Энергетики', quantity: 12, photo: 'https://icf.listex.info/300x200/ee603e06-1e99-1a41-a3d9-23b6012f6a26.png' },
    { id: 54, name: 'добрый кола 0.3', category: 'Кола/Лимонады', quantity: 24, photo: 'https://s.myspar.ru/upload/img/10/1014/101410703.jpg?1763542969' },
    { id: 55, name: 'Сок любимый', category: 'Напитки', quantity: 17, photo: '🧃' },
    { id: 56, name: 'Фрэш бар', category: 'Напитки', quantity: 27, photo: 'https://tornado.shop/images/detailed/44/P1412231.jpg' },
    { id: 57, name: 'Торнадо 1л', category: 'Энергетики', quantity: 8, photo: 'https://images-foodtech.magnit.ru/C6FMmgrA_OcK9BAFmgOGrCLD-HoQ1sdKwYJER1v1mLc/rs:fit:1600:1600/plain/s3://img-dostavka/catalog/pim/goods/1000251534/image/bc7a43fb97c2d4bb406c89ebfb5ad729.jpeg@webp' },
    { id: 58, name: 'Торнадо 0,5 ж.б', category: 'Энергетики', quantity: 3, photo: 'https://ir.ozone.ru/s3/multimedia-1-7/wc1000/7334079739.jpg' },
    { id: 59, name: 'аква минерале лимон', category: 'Напитки', quantity: 36, photo: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-21/149/263/348/232/235/100036947383b0.jpg' },
    { id: 60, name: 'Липтон', category: 'Напитки', quantity: 34, photo: 'https://tornado.shop/images/detailed/40/P1400099.jpg' },
    { id: 61, name: 'Адреналин', category: 'Энергетики', quantity: 7, photo: 'https://aqua-beer.ru/wp-content/uploads/2019/08/pepsi-10.png' },
    { id: 62, name: 'маунтин дью жб', category: 'Кола/Лимонады', quantity: 11, photo: 'https://kofelot.ru/image/cache/catalog/voda-i-napitki/mauntin-dyu-mountain-dew-330ml-g-b-310281514-1000x1000.jpg' },
    { id: 63, name: 'Л. Энерджи малинакраш', category: 'Энергетики', quantity: 3, photo: 'https://ir.ozone.ru/s3/multimedia-1-i/wc1000/8023537998.jpg' },
    { id: 64, name: 'Л. Энерджи класический', category: 'Энергетики', quantity: 10, photo: 'https://ir.ozone.ru/s3/multimedia-1-m/wc1000/8339053342.jpg' },
    { id: 65, name: 'Л. Энерджи гранат', category: 'Энергетики', quantity: 5, photo: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-16/544/632/611/091/443/100071296391b0.jpg' },
    { id: 66, name: 'Л. Энерджи персик манго', category: 'Энергетики', quantity: 11, photo: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/198/729/883/582/111/22/100069832659b0.jpg' },
    { id: 67, name: 'Л. Энерджи Кола', category: 'Энергетики', quantity: 11, photo: 'https://imgproxy.kuper.ru/imgproxy/size-1646-1646/czM6Ly9zYi1vYnMtcHJvZC1jb250ZW50LWltYWdlczAxL3Byb2R1Y3RzLzQxNDEyMjc5L29yaWdpbmFsLzEvMjAyNS0wNS0xMiUyMDE1JTNBMzclM0EwMy43MTk0NDElMkIwMCUzQTAwLzQxNDEyMjc5XzEuanBn.avif' },
    { id: 68, name: 'Л. Энерджи мангококос', category: 'Энергетики', quantity: 8, photo: 'https://tsx.x5static.net/i/1600x1600-fit/xdelivery/files/ca/42/b06d1a4d393cbfb5232b95138fd5.jpg' },
    { id: 69, name: 'Л. Энерджи клубничная жвачка', category: 'Энергетики', quantity: 8, photo: 'https://ir.ozone.ru/s3/multimedia-1-1/wc1000/7849203301.jpg' },
    { id: 70, name: 'Л. Энерджи черника', category: 'Энергетики', quantity: 7, photo: 'https://ir.ozone.ru/s3/multimedia-1-8/wc1000/8339053364.jpg' },
    { id: 71, name: 'Актив 1л', category: 'Напитки', quantity: 4, photo: 'https://tsx.x5static.net/i/1600x1600-fit/xdelivery/files/d9/4a/23d693bfc492aff5cc395bdf57f9.jpg' },
    { id: 72, name: 'Ягуар оригинальный', category: 'Энергетики', quantity: 3, photo: 'https://vodovoz.ru/upload/iblock/08f/08fcab1c8a2bc706b7ae540ba42d66b4.jpg' },
    { id: 73, name: 'Ягуар тропический', category: 'Энергетики', quantity: 2, photo: 'https://tsx.x5static.net/i/1600x1600-fit/xdelivery/files/d5/db/c71ee3d8ce5e51480d0178d3084f.jpg' },
    { id: 74, name: 'Ягуар классический', category: 'Энергетики', quantity: 4, photo: 'https://ir.ozone.ru/s3/multimedia-t/wc1000/6893553269.jpg' },
    { id: 75, name: 'Вольт виноград гуава', category: 'Энергетики', quantity: 6, photo: 'https://imgproxy.kuper.ru/imgproxy/size-1646-1646/czM6Ly9zYi1vYnMtcHJvZC1jb250ZW50LWltYWdlczAxL3Byb2R1Y3RzLzQ1NzgxNjQyL29yaWdpbmFsLzEvMjAyNS0wMy0yNiUyMDE1JTNBNDQlM0E0My4yNzA4ODMlMkIwMCUzQTAwLzQ1NzgxNjQyXzEuanBn.avif' },
    { id: 76, name: 'Вольт пирог', category: 'Энергетики', quantity: 13, photo: 'https://cdn.metro-cc.ru/ru/ru_pim_326407001001_01.png?maxwidth=460&maxheight=460&format=jpg&quality=90&width=460&height=460' },
    { id: 77, name: 'Вольт ориг', category: 'Энергетики', quantity: 9, photo: 'https://images-foodtech.magnit.ru/tpPRSUuYR2yCuNyLKT_wLWWl9zpDUnfv8PKUGKy8cAA/rs:fit:1600:1600/plain/s3://img-dostavka/catalog/uf/547/547fec87b3a2c4ce81ca0a0b66de4b63/871f4986800747bab3b6f6fcf80af0a9.jpeg@webp' },
    { id: 78, name: 'Вольт голубика гранат', category: 'Энергетики', quantity: 13, photo: 'https://images-foodtech.magnit.ru/VmpvRyAHJrCOlnS9tHsy4Vv5YQw7GCJVz41Q5j241iw/rs:fit:1600:1600/plain/s3://img-dostavka/catalog/uf/27c/27ca9f64fd06230eddb53eda73326809/b8876a1bcb84c35b10fe2cc0c281245e.jpeg@webp' },
    { id: 79, name: 'Монстер блэк', category: 'Энергетики', quantity: 11, photo: 'https://basket-02.wbbasket.ru/vol176/part17619/17619250/images/big/1.webp' },
    { id: 80, name: 'Лель', category: 'Прочее', quantity: 11, photo: 'https://cdn.metro-cc.ru/ru/ru_pim_383206001001_01.png?maxwidth=460&maxheight=460&format=jpg&quality=90&width=460&height=460' },
    { id: 81, name: 'Ханкуль', category: 'Прочее', quantity: 6, photo: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-15/222/620/203/111/816/100028153404b0.jpg' },
    { id: 82, name: 'Фрешбар бутылка 1.5л', category: 'Напитки', quantity: 0, photo: 'https://tornado.shop/images/detailed/92/P1892677.PNG' },
    { id: 83, name: 'Кола банка 0.3', category: 'Кола/Лимонады', quantity: 17, photo: 'https://ir.ozone.ru/s3/multimedia-y/wc1000/6812132794.jpg' },
    { id: 84, name: 'Кола добр 1л', category: 'Кола/Лимонады', quantity: 1, photo: 'https://prosushi.ru/cache/iiko_img/7d382e09-e810-47d7-bd1f-15576480c0c0_11d61e653110d2617ba8741eb03d79dd__big__1040x715.webp' },
    { id: 85, name: 'Кола добр лесные ягоды 1л', category: 'Кола/Лимонады', quantity: 1, photo: 'https://images-foodtech.magnit.ru/yKeSdN-ci5EUnSxeL2ViXYockmZZAN_F3RhMBvhQ0vM/rs:fit:1600:1600/plain/s3://img-dostavka/catalog/uf/a92/a92663975e688181ac6cce6caa3d9390/8907434c0ac2becbfb624495452b0880.jpeg@webp' },
    { id: 86, name: 'Кола стекл 0.3', category: 'Кола/Лимонады', quantity: 26, photo: 'https://dostavkaeda.ru/rrk/wp-content/uploads/2022/12/coca-cola-033-l..jpg' },
    { id: 87, name: 'Кул кола 0,5', category: 'Кола/Лимонады', quantity: 9, photo: 'https://bliznetsy24.ru/upload/iblock/c0a/ol5f87cl8avviizlsbz5vkw4fa8wg0k2.jpeg' },
    { id: 88, name: 'Роял', category: 'Прочее', quantity: 10, photo: 'https://ir.ozone.ru/s3/multimedia-1-0/wc1000/7054657920.jpg' },
    { id: 89, name: 'Миринда', category: 'Кола/Лимонады', quantity: 6, photo: 'https://product-store.ru/upload/iblock/552/2f3d8edb-c3a0-11e3-b203-000c2933046c_2f3d8edd-c3a0-11e3-b203-000c2933046c.jpeg' },
    { id: 90, name: 'Берн красный', category: 'Энергетики', quantity: 2, photo: '⚡' },
    { id: 91, name: 'Добр сок', category: 'Напитки', quantity: 24, photo: 'https://sokovoz.ru/_sh/00/43m.jpg' },
    { id: 92, name: 'Пепси стекл 0.3', category: 'Кола/Лимонады', quantity: 5, photo: 'https://sokovoz.ru/_sh/49/4953m.jpg' },
    { id: 93, name: 'Пепси пластик 0,5', category: 'Кола/Лимонады', quantity: 1, photo: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-10/819/859/856/812/51/170756337_721413731.jpg' },
    { id: 94, name: 'Палпи', category: 'Напитки', quantity: 3, photo: 'https://img.detmir.st/eYGGgLYjGuGQUYIEfzbFtzDqfNVM5OjzFE9n7t7d3B4/rs:fit:700:875/g:sm/ex:1/bg:FFFFFF/aHR0cHM6Ly9jYXRhbG9nLWNkbi5kZXRtaXIuc3QvbWVkaWEvM2Q4eU52aFkzM0UxeVJGWC1TY083NjZocEZ4TVFWc1YxNjZtTGdGMXRsWT0ud2VicD9wcmVzZXQ9c2l0ZV9wcm9kdWN0X2dhbGxlcnlfcjE1MDA.webp' },
    { id: 95, name: 'Чебуреки', category: 'Горячее питание', quantity: 9, photo: '🌯' },
    { id: 96, name: 'Ролы', category: 'Горячее питание', quantity: 5, photo: '🌯' },
    { id: 97, name: 'Хотдокстер', category: 'Горячее питание', quantity: 1, photo: 'https://ir.ozone.ru/s3/multimedia-1-r/wc1000/7978659939.jpg' },
    { id: 98, name: 'Смайк', category: 'Горячее питание', quantity: 17, photo: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-21/722/721/662/712/29/100032481782b0.jpg' },
    { id: 99, name: 'горячая штучка', category: 'Горячее питание', quantity: 4, photo: '🌯' },
];

// ----- ПЕРЕМЕННЫЕ -----
let inventory = [];
let nextId = 101;
let saveTimeout = null;

// ----- DOM -----
const listEl = document.getElementById('inventoryList');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const totalItemsSpan = document.getElementById('totalItems');
const totalStockSpan = document.getElementById('totalStock');
const filteredBadge = document.getElementById('filteredBadge');
const saveStatus = document.getElementById('saveStatus');

// ----- СОХРАНЕНИЕ В localStorage -----
function saveToLocalStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(inventory));
        saveStatus.textContent = '💾 сохранено';
        saveStatus.style.color = '#2a7de1';
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            saveStatus.textContent = '💾 сохранено';
        }, 2000);
    } catch (e) {
        console.warn('Ошибка сохранения:', e);
        saveStatus.textContent = '⚠️ ошибка';
        saveStatus.style.color = '#d32f2f';
    }
}

// ----- ЗАГРУЗКА ИЗ localStorage -----
function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
                inventory = parsed;
                // Находим максимальный id для nextId
                const maxId = inventory.reduce((max, item) => Math.max(max, item.id || 0), 0);
                nextId = maxId + 1;
                return true;
            }
        }
    } catch (e) {
        console.warn('Ошибка загрузки:', e);
    }
    return false;
}

// ----- ФИЛЬТРАЦИЯ -----
function filterData() {
    const term = searchInput.value.trim().toLowerCase();
    const cat = categoryFilter.value;
    return inventory.filter(item => {
        const matchName = item.name.toLowerCase().includes(term);
        const matchCat = cat === 'all' || item.category === cat;
        return matchName && matchCat;
    });
}

// ----- РЕНДЕР -----
function render() {
    const filtered = filterData();
    const totalItems = inventory.length;
    const totalStock = inventory.reduce((s, i) => s + i.quantity, 0);

    totalItemsSpan.textContent = totalItems;
    totalStockSpan.textContent = totalStock;
    filteredBadge.textContent = `показано: ${filtered.length}`;

    if (filtered.length === 0) {
        listEl.innerHTML = `<div class="empty-message">📭 Ничего не найдено</div>`;
        return;
    }

    let html = '';
    filtered.forEach(item => {
        const photoContent = item.photo && item.photo.startsWith('http') 
            ? `<img src="${item.photo}" alt="${item.name}" />` 
            : (item.photo || '📦');

        html += `
            <div class="item-card" data-id="${item.id}">
                <div class="photo">
                    ${typeof photoContent === 'string' && !photoContent.startsWith('<') 
                        ? `<span style="font-size:1.8rem;">${photoContent}</span>` 
                        : photoContent}
                </div>
                <div class="info">
                    <div class="name">${item.name}</div>
                    <div class="sku-cat">
                        <span class="cat">${item.category}</span>
                        <span>#${item.id}</span>
                    </div>
                </div>
                <div class="qty-control">
                    <button class="btn-big minus" data-action="decrement" data-id="${item.id}">−</button>
                    <span class="qty" id="qty-${item.id}">${item.quantity}</span>
                    <button class="btn-big plus" data-action="increment" data-id="${item.id}">+</button>
                    <div class="action-group">
                        <button class="btn-big reset" data-action="reset" data-id="${item.id}">↺</button>
                        <button class="btn-big delete danger" data-action="delete" data-id="${item.id}">✕</button>
                    </div>
                </div>
            </div>
        `;
    });
    listEl.innerHTML = html;
}

// ----- ДЕЙСТВИЯ (с автоматическим сохранением) -----
function updateQuantity(id, delta) {
    const item = inventory.find(p => p.id === id);
    if (!item) return;
    const newQty = item.quantity + delta;
    if (newQty < 0) return;
    item.quantity = newQty;
    render();
    saveToLocalStorage();
}

function deleteItem(id) {
    if (!confirm('Удалить товар?')) return;
    const idx = inventory.findIndex(p => p.id === id);
    if (idx !== -1) inventory.splice(idx, 1);
    render();
    saveToLocalStorage();
}

function resetQuantity(id) {
    
    if (!confirm("Сбросить до 10?")) return;

    const item = inventory.find(p => p.id === id);
    if (!item) return;
    item.quantity = 10;
    render();
    saveToLocalStorage();
}

function addItem() {
    const nameInput = document.getElementById('newName');
    const catSelect = document.getElementById('newCategory');
    const qtyInput = document.getElementById('newQuantity');

    const name = nameInput.value.trim();
    const category = catSelect.value;
    const qty = parseInt(qtyInput.value, 10);

    if (!name || isNaN(qty) || qty < 0) {
        alert('Введите корректное название и количество (≥0)');
        return;
    }

    inventory.push({
        id: nextId++,
        name: name,
        category: category,
        quantity: qty,
        photo: '📦'
    });
    render();
    saveToLocalStorage();
    nameInput.value = '';
    qtyInput.value = '1';
    nameInput.focus();
}

// ----- ОБРАБОТЧИК КЛИКОВ -----
function handleClick(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const action = btn.dataset.action;
    const id = parseInt(btn.dataset.id, 10);
    if (!id) return;

    switch (action) {
        case 'increment': updateQuantity(id, 1); break;
        case 'decrement': updateQuantity(id, -1); break;
        case 'delete': deleteItem(id); break;
        case 'reset': resetQuantity(id); break;
        default: break;
    }
}

// ----- ИНИЦИАЛИЗАЦИЯ -----
function init() {
    // Загружаем данные из localStorage или используем дефолтные
    const loaded = loadFromLocalStorage();
    if (!loaded) {
        inventory = JSON.parse(JSON.stringify(defaultInventory));
        const maxId = inventory.reduce((max, item) => Math.max(max, item.id || 0), 0);
        nextId = maxId + 1;
        saveToLocalStorage();
    }

    render();
    listEl.addEventListener('click', handleClick);
    searchInput.addEventListener('input', render);
    categoryFilter.addEventListener('change', render);
    document.getElementById('addItemBtn').addEventListener('click', addItem);

    document.querySelectorAll('#newName, #newQuantity').forEach(inp => {
        inp.addEventListener('keypress', e => { if (e.key === 'Enter') addItem(); });
    });
}

init();