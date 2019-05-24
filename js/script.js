window.addEventListener('DOMContentLoaded', function(){
    //modal
    let popupEngineer = document.getElementsByClassName('popup_engineer'),
        callBtn = document.getElementsByClassName('popup_engineer_btn'),
        close = document.querySelector('popup_close');
        console.log(popupEngineer);
        callBtn.addEventListener('click', function(){
            popupEngineer.style.display = 'block';
        });

});
