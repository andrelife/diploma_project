window.addEventListener('DOMContentLoaded', function(){
    //modal
    let popupEngineer = document.querySelectorAll('.popup_engineer')[0],
        callBtn = document.querySelectorAll('.popup_engineer_btn')[0],
        close = document.querySelector('.popup_close');
        console.log(close);
        callBtn.addEventListener('click', function() {
            popupEngineer.style.display = 'block';
        });
        // close.addEventListener('click', function() {
        //     popupEngineer.style.display = 'none';
        // });

});
