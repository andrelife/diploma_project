window.addEventListener('DOMContentLoaded', function(){
    //modal
    let popupEngineer = document.querySelector('.popup_engineer'),
        popup = document.querySelector('#pup'),
        bodyTag = document.getElementsByTagName('body')[0],
        phoneLink = document.querySelectorAll('.phone_link'),
        popupEngineerBtn = document.querySelector('.popup_engineer_btn'),
        popupClose = document.querySelectorAll('.popup_close'),
        popupCloseTag = document.querySelector('.popup strong'),
        popupCloseTag1 = document.querySelector('.popup_engineer strong'),
        contactUs = document.querySelector('.contact_us_wrap a');
        //console.log('hello');

    function openModal(elem) {
            elem.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        // setTimeout(openModal(popup), 5000);
        setTimeout(function () {
            openModal(popup);
        }, 61000);
    
        function closeModal(elem) {
            elem.style.display = 'none';
            document.body.style.overflow = '';
        }

    // callBtn.addEventListener('click', function() {
    //     popupEngineer.style.display = 'block';
    //     document.body.style.overflow = 'hidden';
    // });
    bodyTag.addEventListener('click', function(event){
        let target = event.target;
        if(target == popupEngineerBtn){
            openModal(popupEngineer);
        }
        if(target == phoneLink[0] || target == phoneLink[1] || target == contactUs){
            event.preventDefault();
            openModal(popup);
        }
        if( target == popupCloseTag || target == popupCloseTag1 || target == popupEngineer || target == popup){
            closeModal(popupEngineer);
            closeModal(popup);  
        }
        
    });
     
    //if(target || target.classList.contains('popup_close')){
        //     for(let i = 0; i < close.length; i++) {
        //         if(target == close[i]){
        //         popupEngineer.style.display = 'none';
        //                 document.body.style.overflow = '';
        //         }
        //     }
        // }8ы
    
    //     close[i].addEventListener('click', function() {
    //             popup.style.display = 'none';
    //             popupEngineer.style.display = 'none';
    //             document.body.style.overflow = '';
        
    //     });
    // }
    // contactUs.addEventListener('click', function() {
    //     popup.style.display = 'block';
    //     document.body.style.overflow = 'hidden';
    // });

    //form
    let message = {
        loading: 'Идет отправка...',
        success: 'Отправлено! Скоро мы с вами свяжемся!',
        failure: 'Ошибка...' 
    };
    let form = document.getElementsByClassName('form'),
        input = document.getElementsByTagName('input'),
        formMain = document.querySelectorAll('.main_form'),
        statusMessage = document.createElement('div');
        //console.log(inputNamePhone);
    
    statusMessage.classList.add('status');
    const sendForm = (elem) => {
        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);
                
            function posData(data) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type',
                        'application/json; charset=utf-8');

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status === 200 && request.status < 3) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    };
                    let obj = {};
                    formData.forEach((value, key) => {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    request.send(json);
                });
            }
            const clearInput = () => {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            };
            posData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    };
    for(let i = 0; i < form.length; i++){
        sendForm(form[i]); 
    }
    let phoneMask = document.querySelectorAll('.mask');
    phoneMask.forEach((item) => {
        item.addEventListener('keyup', function(){
            //console.log(this.value);
            this.value = '+' + this.value.replace(/[^\d]/g, '').slice(0, 11);
        });
    })
    
//tab

let tab = document.querySelectorAll('.glazing_block a'),//ссылки на табы
    info = document.querySelector('.glazing_slider'),//родитель 
    tabContent = document.querySelectorAll('#tab_content'),// контент
    tabwrap = document.querySelectorAll('.glazing_block img');// картинки над табами
    console.log(tabwrap);

    function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }
}

hideTabContent(1);

function showTabContent(b) {
if (tabContent[b].classList.contains('hide')) {
tabContent[b].classList.remove('hide');
tabContent[b].classList.add('show');
}
}

function linkdesactive(a) {
for (let i = a; i < tab.length; i++) {
    tab[i].classList.remove('active');
}
}

linkdesactive(1);

function linkactive(b) {
tab[b].classList.add('active');
} 

info.addEventListener('click', function (event) {
let target = event.target;

if (target) {
    for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
           linkdesactive(0);
           linkactive(i);
           hideTabContent(0);
           showTabContent(i);
           
           break;
        }
    }
}
});    


// Timer
let deadline = '2019-05-29';
function getTimeRemaining(endtime){
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/1000/60/60) % 24),
        days = Math.floor((t/(1000*60*60*24)));
        return {
            'total' : t,
            'days' : days,
            'hours' : ('0' + hours).slice(-2),
            'minutes' :('0' + minutes).slice(-2),
            'seconds' : ('0' + seconds).slice(-2)

        };
}
function setClock(id, endtime) {
    let timer = document.getElementById('id'),
        days = document.querySelector('#days'),
        hours = document.querySelector('#hours'),
        minutes = document.querySelector('#minutes'),
        seconds = document.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
    function updateClock(){
        let t = getTimeRemaining(endtime);
            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
            
    }
    
}
setClock('timer', deadline); 

//image
// let image = document.querySelector('.lupa');
//     console.log(image);

// image.addEventListener(click, function() {
//   image.classList.toggle('show');
// });

 });