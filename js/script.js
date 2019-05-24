window.addEventListener('DOMContentLoaded', function(){
    //modal
    let popupEngineer = document.querySelector('.popup_engineer'),
        callBtn = document.querySelector('.popup_engineer_btn'),
        close = document.querySelectorAll('.popup_close'),
        contactUs = document.querySelector('.contact_us_wrap');

    function openModal() {
            popupEngineer.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        setTimeout(openModal, 61000);

    callBtn.addEventListener('click', function() {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    for(let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function() {
            
                popupEngineer.style.display = 'none';
                document.body.style.overflow = '';
        
        });
    }
    contactUs.addEventListener('click', function() {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    //form
    let message = {
        loading: 'Идет отправка...',
        success: 'Отправлено! Скоро мы с вами свяжемся!',
        failure: 'Ошибка...' 
    };
    let form = document.querySelectorAll('.form')[7],
        input = document.getElementsByClassName('input'),
        statusMessage = document.createElement('div');
        console.log(form);
    
    statusMessage.classList.add('status');
    //for(let i = 0; i < form.length; i++) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    let formData = new FormData(form);
    
    let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
    let json = JSON.stringify(obj);

    request.send(json);
    request.addEventListener('readystatechange', function(){
        if(request.readyState < 4) {
            statusMessage.innerHTML = message.loading; 
        }else if(request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
        }else{
            statusMessage.innerHTML = message.failure;
        }
    });


    });


});
