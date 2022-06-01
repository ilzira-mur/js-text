// Создание графика
let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {

type: 'bar',
 

data: {
    
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    
    datasets: [{
        label: '',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2] // Данные каждой точки графика
    }]
}
});

// слайдер
let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let slider = document.querySelector("div.slider");
let viewSliders = document.querySelectorAll(".viewSlide");
let viewSlide = 0;
 

viewSliders[0].style.backgroundColor = "green";
 

btnNext.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = "red";
    if (viewSlide < 6) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }
    viewSliders[viewSlide].style.backgroundColor = "green";
    slider.style.left = -viewSlide * viewport + "px";
    console.log(slider.style.left)
});
 
btnPrev.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = "red";
    if (viewSlide > 0) { 
        viewSlide--; 
    } else {
        viewSlide = 6; 
    }
    viewSliders[viewSlide].style.backgroundColor = "green";
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

document.getElementById('demoimgfive').setAttribute('src', objfive.img);
document.getElementById("demoinfofive").innerHTML = objfive.info;
document.getElementById("demotitileffive").innerHTML = objfive.title;

const  six = '{"img": "https://i.ytimg.com/vi/YSHDBB6id4A/maxresdefault.jpg", "info": "Новость", "title": "Bloomberg: Еврокомиссия предложила отложить запрет на поставки нефти по «Дружбе»"}'
const objfsix = JSON.parse(five)

document.getElementById('demoimgsix').setAttribute('src', objfsix.img);
document.getElementById("demoinfosix").innerHTML = objfsix.info;
document.getElementById("demotitilefsix").innerHTML = objfsix.title;

const  seven = '{"img": "https://preview.redd.it/7aydec8cp6m41.jpg?width=640&crop=smart&auto=webp&s=22d2b330801f064094184eda733e2e6880c58809","info": "Новость","title": "Росавиация продлила ограничение полетов в южные аэропорты до 6 июня"}'
const objseven= JSON.parse(five)

document.getElementById('demoimgseven').setAttribute('src', objseven.img);
document.getElementById("demoinfosseven").innerHTML = objseven.info;
document.getElementById("demotitilefseven").innerHTML = objseven.title;