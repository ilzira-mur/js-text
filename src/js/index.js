

// Получаем видимую часть слайда
let viewport = document.getElementById("viewport").offsetWidth;
// Получаем кнопку вперёд
let btnNext = document.getElementById("next");
// Получаем кнопку назад
let btnPrev = document.getElementById("prev");
// Получаем элемент со всеми слайдами
let slider = document.querySelector("div.slider");
// Получаем элементы показа слайда
let viewSliders = document.querySelectorAll(".viewSlide");
// Объявляем переменную номера слайда
let viewSlide = 0;
 
// Назначаем цвет индикатор слайда зелёный
viewSliders[0].style.backgroundColor = "green";
 
// Обработка клика на кнопку вперёд
btnNext.addEventListener("click", function () {
    // Делаем индикатор слайда красный
    viewSliders[viewSlide].style.backgroundColor = "red";
    // Условие, если номер слайда меньше четырёх
    if (viewSlide < 4) { // Если верно то
        // Увеличиваем номер слайда на один
        viewSlide++;
    } else { // Иначе
        // Номер слайда равен нулю
        viewSlide = 0;
    }
    // Закрашиваем индикатор слайда в зелёный
    viewSliders[viewSlide].style.backgroundColor = "green";
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});
 
// Обработка клика на кнопку назад
btnPrev.addEventListener("click", function () {
    // Делаем индикатор слайда красный
    viewSliders[viewSlide].style.backgroundColor = "red";
    // Условие, если номер слайда больше нуля
    if (viewSlide > 0) { // Если верно то
        // Уменьшаем номер слайда
        viewSlide--; 
    } else { // Иначе
        // Номер слайда равен четырём
        viewSlide = 4; 
    }
    // Закрашиваем индикатор слайда в зелёный
    viewSliders[viewSlide].style.backgroundColor = "green";
    // Меняем позицию всего слайда
    slider.style.left = -viewSlide * viewport + "px";
});

const one = '{"img": "https://i0.wp.com/theverybesttop10.com/wp-content/uploads/2014/10/Top-10-Images-of-Angry-Wet-Cats-6.jpg?fit=586%2C404&ssl=1", "info": "Новость", "title": "Минобороны: ВКС России уничтожили крупный арсенал украинских войск в Кривом Роге"}'
const obj = JSON.parse(one)

document.getElementById('demo1').setAttribute('src', obj.img);
document.getElementById("demo").innerHTML = obj.info;
document.getElementById("demo2").innerHTML = obj.title;

const two = '{"img": "https://www.boredpanda.com/blog/wp-content/uploads/2014/02/funny-wet-cats-1.jpg","info": "Новость","title": "Билл Гейтс спрогнозировал новую пандемию в следующие 20 лет с вероятностью 50%"}'
const objtwo = JSON.parse(two)

document.getElementById('demoimg').setAttribute('src', objtwo.img);
document.getElementById("demoinfo").innerHTML = objtwo.info;
document.getElementById("demotitile").innerHTML = objtwo.title;

const three = '{"img": "https://i.ytimg.com/vi/AsVQVKmI8pA/maxresdefault.jpg","info": "Новость","title": "Представитель МИД Захарова назвала заявления Шольца про многополярный мир плагиатом"}'
const objthree = JSON.parse(three)

document.getElementById('demoimgthree').setAttribute('src', objthree.img);
document.getElementById("demoinfothree").innerHTML = objthree.info;
document.getElementById("demotitilethree").innerHTML = objthree.title;

const  four = '{"img": "https://cdn.shopify.com/s/files/1/0344/6469/files/Screen_Shot_2019-01-04_at_5.07.33_PM.png?v=1546639679", "info": "Новость","title": "19FortyFive: НАТО столкнулось с трудностями при организации военных учений в Швеции"}'
const objfour = JSON.parse(four)

document.getElementById('demoimgfour').setAttribute('src', objfour.img);
document.getElementById("demoinfofour").innerHTML = objfour.info;
document.getElementById("demotitilefour").innerHTML = objfour.title;

const  five = '{"img": "https://i.ytimg.com/vi/317jz-PU7Mg/maxresdefault.jpg", "info": "Новость", "title": "Экс-командующий ВДВ генерал-полковник Шпак: США запретили Польше вводить войска на Украину"}'
const objfive = JSON.parse(five)

