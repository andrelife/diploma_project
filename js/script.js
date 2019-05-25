window.addEventListener('DOMContentLoaded', function(){
    //modal
    let popupEngineer = document.querySelector('.popup_engineer'),
        popup = document.querySelector('#pup'),
        callBtn = document.querySelector('.popup_engineer_btn'),
        close = document.querySelectorAll('.popup_close'),
        contactUs = document.querySelector('.contact_us_wrap');
        //console.log(close);

    function openModal() {
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        setTimeout(openModal, 61000);

    callBtn.addEventListener('click', function() {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    popup.addEventListener('click', function(event){
        let target = event.target;
        if(target || target.classList.contains('popup_close')){
            for(let i = 0; i < close.length; i++) {
                if(target == close[i]){
                popupEngineer.style.display = 'none';
                        document.body.style.overflow = '';
                }
            }
        }
    });
    
    for(let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function() {
                popup.style.display = 'none';
                popupEngineer.style.display = 'none';
                document.body.style.overflow = '';
        
        });
    }
    contactUs.addEventListener('click', function() {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

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
        break;
    }
    sendForm(form);
    
    console.log(form);




});
