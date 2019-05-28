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
        console.log(popupCloseTag1);

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
        if(target == popupClose[0] || target == popupClose[1] || target == popupCloseTag || target == popupCloseTag1 || target == popupEngineer || target == popup){
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
    //sendForm(form);
//tab
// let glazing_slider = document.querySelector('.glazing_slider'),
// tree_link = glazing_slider.querySelector('.tree_link'),
// aluminum_link = glazing_slider.querySelector('.aluminum_link'),
// plastic_link = glazing_slider.querySelector('.plastic_link'),
// french_link = glazing_slider.querySelector('.french_link'),
// rise_link = glazing_slider.querySelector('.rise_link'),

// tree = document.querySelector('.tree'),
// aluminum = document.querySelector('.aluminum'),
// plastic = document.querySelector('.plastic'),
// french = document.querySelector('.french'),
// rise = document.querySelector('.rise');

// //Activating tabs 
// const tabActive = (a) => {
// a.classList.add('active');
// };

// //Deactivating tabs
// const tabDeactive = (d) => {
// d.classList.remove('active');
// };

// //Displaing content
// const contDisplay = (e) => {
// e.style.display = 'block';
// };

// //Hiding content
// const contDisplayNone = (n) => {
// n.style.display = 'none';
// };

// glazing_slider.addEventListener('click', function (e) {
// let target = e.target;

// //tree active
// if (target.classList.contains('tree_link')) {
//     //link active/deactive
//     tabActive(tree_link);

//     tabDeactive(aluminum_link);
//     tabDeactive(plastic_link);
//     tabDeactive(french_link);
//     tabDeactive(rise_link);
//     //end

//     //content display/none
//     contDisplay(tree);

//     contDisplayNone(aluminum);
//     contDisplayNone(plastic);
//     contDisplayNone(french);
//     contDisplayNone(rise);
//     //end
// }

// //aluminum active
// if (target.classList.contains('aluminum_link')) {
//     //link active/deactive
//     tabActive(aluminum_link);

//     tabDeactive(tree_link);
//     tabDeactive(plastic_link);
//     tabDeactive(french_link);
//     tabDeactive(rise_link);
//     //end

//     //content display/none
//     contDisplay(aluminum);

//     contDisplayNone(tree);
//     contDisplayNone(plastic);
//     contDisplayNone(french);
//     contDisplayNone(rise);
//     //end
// }

// //plastic active
// if (target.classList.contains('plastic_link')) {
//     //link active/deactive
//     tabActive(plastic_link);

//     tabDeactive(tree_link);
//     tabDeactive(aluminum_link);
//     tabDeactive(french_link);
//     tabDeactive(rise_link);
//     //end

//     //content display/none
//     contDisplay(plastic);

//     contDisplayNone(tree);
//     contDisplayNone(aluminum);
//     contDisplayNone(french);
//     contDisplayNone(rise);
//     //end
// }

// //french active
// if (target.classList.contains('french_link')) {
//     //link active/deactive
//     tabActive(french_link);

//     tabDeactive(tree_link);
//     tabDeactive(aluminum_link);
//     tabDeactive(plastic_link);
//     tabDeactive(rise_link);
//     //end

//     //content display/none
//     contDisplay(french);

//     contDisplayNone(tree);
//     contDisplayNone(aluminum);
//     contDisplayNone(plastic);
//     contDisplayNone(rise);
//     //end
// }

// //rise active
// if (target.classList.contains('rise_link')) {
//     //link active/deactive
//     tabActive(rise_link);

//     tabDeactive(tree_link);
//     tabDeactive(aluminum_link);
//     tabDeactive(plastic_link);
//     tabDeactive(french_link);
//     //end

//     //content display/none
//     contDisplay(rise);

//     contDisplayNone(tree);
//     contDisplayNone(aluminum);
//     contDisplayNone(plastic);
//     contDisplayNone(french);
//     //end
// }
// });


let tab = document.querySelectorAll('.glazing_block a'),
tabwrap = document.querySelectorAll('.glazing_block'),
info = document.querySelector('.glazing_slider'),
tabContent = document.querySelectorAll('#tab_content');

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
            'days' : ('0' + days).slice(-2),
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