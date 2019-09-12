!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

var _playOrPause = true;
    lvl = 1;
    mobOrDesk = true;
    result_test = [0,0,0,0];
    result_item = 0;
    data = null;
    indexBackground = 1;
    timer = null;

    if (parseInt(window.outerWidth) < 900 ) {
        document.getElementById('video').src = "video/alfa_mob.gif";
        mobOrDesk = false;}
  
$.ajaxSetup({
        async: false
    });

    function bgc() {        
        if (indexBackground>3) indexBackground=1;{      
        document.getElementById('preview').style.backgroundImage = `url(img/back-prv-${ indexBackground }.jpg)`;            
        indexBackground++;              
        }  
        (function() {
            [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
                new SelectFx(el);
            } );
        })();  
        timer = setTimeout(bgc, 4000);  
    }

 // bgc();
        
        

    function stopBackground(){                           
       // clearTimeout(timer);                            
    }


$.getJSON('data/data.json', function(result){
        if(result){
           data = result;        
        } else{
            console.error(result.error());
        }
    });
    $.ajaxSetup({
        async: true
    });

    function indexOfMax(arr) {
        if (arr.length === 0) {
            return -1;
        }
    
        var max = arr[0];
        var maxIndex = 0;
    
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
    
        return maxIndex;
    }
    
function output_resul(index){
    console.log(result_test);
    console.log(index);
    switch(index){
        case 0:
            if(mobOrDesk){
                    document.getElementById('final-video').src = 'video/belcanto_romantic.mp4';
            } else {
                    document.getElementById('final-video').src = 'video/belcanto_romantic_mob.mp4';
            }
        document.getElementById('final-modal-block').style.backgroundColor = "#000";
        document.getElementById('final-title').innerHTML = '<span class="text-white">Вы — настоящий романтик!</span>';
        document.getElementById('final-description').innerHTML = '<span class="text-white">Вы очень эмоциональны и чувственны! Вы бы отлично сошлись с Густавом Климтом, Микеланджело и Антонио Вивальди. Не верится? Приходите на «Звучащие полотна» Фонда Бельканто и убедитесь сами.</span>';
        document.getElementById('mail').classList.add('email-white');
        break;  

        case 1: 
            if(mobOrDesk){
                    document.getElementById('final-video').src = 'video/belcanto_philosopher.mp4';
            } else {
                    document.getElementById('final-video').src = 'video/belcanto_philosopher_mob.mp4';
            }
        document.getElementById('final-modal-block').style.backgroundColor = "#e4dece";
        document.getElementById('final-title').innerHTML = 'Вы — настоящий философ!';
        document.getElementById('dropdown').style.color = "#fff";
        document.getElementById('dropdown').style.backgroundColor = "#000";
        document.getElementById('mail').style.border = "2px solid #000";
        document.getElementById('mail').style.color = "#000";
        document.getElementById('mail').classList.add('email-black');
        document.getElementById('final-btn').style.color = "#fff";
        document.getElementById('final-btn').style.backgroundColor = "#000";
        document.getElementById('icon-button-i-1').style.color = "#fff";
        document.getElementById('icon-button-1').style.backgroundColor = "#000";
        document.getElementById('icon-button-i-2').style.color = "#fff";
        document.getElementById('icon-button-2').style.backgroundColor = "#000";
        document.getElementById('final-description').innerHTML = 'Вы цените чёткие формы и почти всегда мыслите рационально. Такими же были Иоганн Себастьян Бах, Морис Равель и Леонардо да Винчи. Познакомьтесь с их творчеством ближе на мероприятиях «Звучащие полотна» от Фонда Бельканто.';
        break;     
        
        case 2:    
            if(mobOrDesk){              
                document.getElementById('final-video').src = 'video/belcanto_dreamer.mp4';
            } else {
                document.getElementById('final-video').src = 'video/belcanto_dreamer_mob.mp4';
            }
        document.getElementById('final-modal-block').style.backgroundColor = "#fff";       
        document.getElementById('final-title').innerHTML = 'Вы — настоящий мечтатель!';
        document.getElementById('final-description').innerHTML = 'С трепетной душой и открытым сердцем! Вашими друзьями охотно стали бы Клод Моне, Фредерик Шопен и Николай Рерих. Убедитесь сами — приходите на концерты «Звучащие полотна» от Фонда Бельканто.';
        document.getElementById('dropdown').style.color = "#fff";
        document.getElementById('dropdown').style.backgroundColor = "#000";
        document.getElementById('mail').style.border = "2px solid #000";
        document.getElementById('mail').style.color = "#000";
        document.getElementById('mail').classList.add('email-black');
        document.getElementById('final-btn').style.color = "#fff";
        document.getElementById('final-btn').style.backgroundColor = "#000";
        document.getElementById('icon-button-i-1').style.color = "#fff";
        document.getElementById('icon-button-1').style.backgroundColor = "#000";
        document.getElementById('icon-button-i-2').style.color = "#fff";
        document.getElementById('icon-button-2').style.backgroundColor = "#000";
        break;  

        case 3:
            if(mobOrDesk){   
                document.getElementById('final-video').src = 'video/belcanto_rebel.mp4';
            } else {
                document.getElementById('final-video').src = 'video/belcanto_rebel_mob.mp4';
            }
        document.getElementById('final-modal-block').style.backgroundColor = "#000";
        document.getElementById('final-title').innerHTML = '<span class="text-white">Вы — настоящий бунтарь!</span>';
        document.getElementById('final-description').innerHTML = '<span class="text-white">Прохожим стоит быть аккуратнее: стены и другие преграды рискуют обрушиться под вашим напором. Носителями такого революционного духа были Эдгар Дега, Винсент Ван Гог, Камиль Сен-Санс. Оцените творчество родственных душ на мероприятиях «Звучащие полотна» Фонда Бельканто.</span>';
        document.getElementById('mail').classList.add('email-white');
        break;  
    }
}
 
  /**
   * Аудиоплеер
   */


function playOrPause(e){
    let audio = document.getElementById('audio-mpe3-'+e);
    let audioButton = document.getElementById('audio-button-'+e);
    if(_playOrPause){  
        
        for(i=1; i<5; i++){
            if(i!=e) {                
                document.getElementById('audio-mpe3-'+i).pause();
                if(!mobOrDesk){
                    document.getElementById('audio-button-'+i).style.backgroundImage = 'url(./img/play-mob.png)';
                }else{
                    document.getElementById('audio-button-'+i).style.backgroundImage = 'url(./img/play.png)';
                }    
            }
        }  
        audio.play();
        if(!mobOrDesk){
            audioButton.style.backgroundImage = 'url(./img/pause-mob.png)';
        }else{
            audioButton.style.backgroundImage = 'url(./img/pause.svg)';
        }     
        
        audio.addEventListener('progress-'+e, function() {
            var duration =  audio.duration;
            if (duration > 0) {
              for (var i = 0; i < audio.buffered.length; i++) {
                    if (audio.buffered.start(audio.buffered.length - 1 - i) < audio.currentTime) {
                        document.getElementById("buffered-amount").style.width = (audio.buffered.end(audio.buffered.length - 1 - i) / duration) * 100 + "%";
                        break;
                    }
                }
            }
          });
        
          audio.addEventListener('timeupdate', function() {
            var duration =  audio.duration;
            if (duration > 0) {                
              document.getElementById('progress-amount-'+e).style.width = ((audio.currentTime / duration)*100) + "%";
            }
          });

    } else {
        audio.pause();        
        if(!mobOrDesk){
            audioButton.style.backgroundImage = 'url(./img/play-mob.png)';
        }else{
            audioButton.style.backgroundImage = 'url(./img/play.png)';
        }     
    }
    _playOrPause = !_playOrPause;
}

function next_test(item){
    if(item == 'mobil'){
        item = parseInt($(".owl-item.active").children('.item-mob').attr('data-id'));  
        if(lvl == '7'){    
            document.getElementById('btn-next-mob').innerHTML = `<div href="#" id="btn" onClick="next_test('mobil')" class="test-next-mob js-open-modal" data-modal="2">Завершить</div>`;
        }
    } else{        
        item = $(`#${item}`).attr("data-id");
    }
    result_test[item]++;
    
    
    if (lvl < 8){
        visible_item(data[lvl]);
        lvl++;    
    } 

    if (lvl == 8) {
        output_resul(indexOfMax(result_test));
    }
}

function visible_item(item){    
    document.getElementById('top-title').innerHTML = item.title;
        
    if(!mobOrDesk){
        document.getElementById('round').style.display = 'none';
        document.getElementById('top-left').style.width = '100vw';
        document.getElementById('main-center').style.display = 'none';
        document.getElementById('main-center-mob').style.display = 'flex';
        
        if (item.type == 'audio'){        
            item.items.map(function(option){
                document.getElementById('mob-'+option.id).setAttribute('data-id', option.id_test)
                document.getElementById('mob-'+option.id).innerHTML = `
                <div id="item-${option.id}-title" class="item-title-mob">${option.titel} <br> <span class="item-text-bold">${option.name}</span></div>
                <div class="item-mob-center-play">
                <img src="img/person/test-${item.id}/person-id-${option.id}.jpg" class="item-img-mob"/>
                <div id='audio-button-${option.id}' class='bottom-play-or-pause-mob' onclick='playOrPause(${option.id})'></div>
                </div>
                <audio id='audio-mpe3-${option.id}' class='audio-style' src='audio/test-${item.id}/audio-${option.id}.mp3' crossorigin>Your browser does not support the audio element.</audio>
                
                <div id="item-${option.id}-description" class="item-description-mob">${option.description}</div>
                `
            });
        } else{
            item.items.map(function(option){
                document.getElementById('mob-'+option.id).setAttribute('data-id', option.id_test)
                document.getElementById('mob-'+option.id).innerHTML = `                
                <div id="item-${option.id}-title" class="item-title-mob">${option.titel} <br> <span class="item-text-bold">${option.name}</span></div>
                <img src="img/back-video/test-${item.id}/pick-${option.id}.jpg" class="item-img-mob item-img-two"/>
                <div id="item-${option.id}-description" class="item-description-mob">${option.description}</div>
                `
            });
            }       
      
    }
    else 
    {
        
        document.getElementById('round').style.display = 'flex';
        document.getElementById('top-left').style.width = "76vw";
        document.getElementById('round').innerHTML = item.id+"/8";
        document.getElementById('main-center-mob').style.display = 'none';
        document.getElementById('main-center').style.display = 'flex';
        if (item.type == 'audio'){             
            item.items.map(function(option){ 
            document.getElementById(option.id).setAttribute('data-id', option.id_test)
            document.getElementById(option.id).classList.add('items-audio');            
            document.getElementById(option.id).innerHTML = `
        <div id='item-${option.id}-top' class='item-top'>
            <div class='item-img'>
                <img id='item-${option.id}-img' class='img-person'  src='img/person/test-${item.id}/person-id-${option.id}.jpg'/>
            </div>
            <div class='item-text'>
                <p id='item-${option.id}-title' class='item-title'> ${option.titel}</p>
                <p id='item-${option.id}-name' class='item-name'> ${option.name}</p>
                <p id='item-${option.id}-description' class='item-description'>${option.description}</p>
            </div>
        </div>
        <div id='item-${option.id}-bottom' class='item-bottom'>
            <div id='item-${option.id}-check-audio' class='item-bottom-audio'>
                <div id='audio-button-${option.id}' class='bottom-play-or-pause' onclick='playOrPause(${option.id})'></div>
                <div class='buffered buffered-${option.id}'>
                <span id='buffered-amount'></span>
                </div>
                <div class='progress buffered-${option.id}'>
                <span id='progress-amount-${option.id}'></span>
                </div><audio id='audio-mpe3-${option.id}' class='audio-style' src='audio/test-${item.id}/audio-${option.id}.mp3' crossorigin>Your browser does not support the audio element.</audio>
            </div>
            <div id='check-${option.id}' class='item-cheking'>
            </div>
        </div>`;
            });
        } else{
            item.items.map(function(option){     
                document.getElementById(option.id).setAttribute('data-id', option.id_test) 
                document.getElementById(option.id).classList.remove('items-audio');                 
                document.getElementById(option.id).innerHTML = `
                <div id="item-background-${option.id}" class="item-background"></div>
                <div class="item-background-main">
                    <div id="item-${option.id}-text" class="item-background-text">
                        <p class="item-text-title">${option.titel} <br> <span class="item-text-bold">${option.name}</span></p>
                        <p class="item-text-description">${option.description}</p>
                        <div id="check-${option.id}" class="item-cheking item-check-img"></div>
                    </div>
                   
                </div>`; 
                document.getElementById(`item-background-${option.id}`).style.backgroundImage = `url('img/back-video/test-${item.id}/desk-pick-${option.id}.jpg')`;           
                });       
        }  
    }  
}


document.addEventListener('DOMContentLoaded', function() {
      
    /* Записываем в переменные массив элементов-кнопок и подложку.
        Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');
        round = document.querySelector('#round');
        

        $("#owl-demo").owlCarousel({
 
            navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true,
            touchDrag: false,
            addClassActive: true,
            pagination: false,
       
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
       
        });
                
        if (data){            
            visible_item(data[0]);
        }
    
        window.onresize = () => {            
            
                if (parseInt(window.outerWidth) < 900 ){
                    mobOrDesk = false; 
                    document.getElementById('video').src = "video/alfa_mob.gif";
                    visible_item(data[lvl-1]);                                                            
                } else{                               
                    mobOrDesk = true; 
                    document.getElementById('video').src = "video/alfa.gif";
                    visible_item(data[lvl-1]);                           
                }

        }


    $(".main-body").on('click', '.items', function(e){                     
                let index = e.currentTarget.id;
                if(result_item == 0 ){
                    
                }else{                    
                    let check_old = document.getElementById('check-'+result_item);
                    check_old.style.backgroundColor = '#000';
                    check_old.innerHTML = '';
                }             
                let check = document.getElementById('check-'+index);
                check.style.backgroundColor = '#fff';  
                check.innerHTML = '<img src="./img/check.png" class="item-check"/>';            
                result_item = index;
                if(lvl < 8){
                    round.innerHTML = '<img onClick="next_test('+result_item+')" src="img/test-next.svg" class="test-next"/>';
                }else{
                    round.innerHTML = '<img id="btn" src="img/test-next.png" class="test-next js-open-modal" data-modal="2"/>'
                }                           
            });            
 
   

    document.addEventListener("click", function(e){
        if(e.target && e.target.id== 'btn'){         
            var modalId = e.target.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

                if(modalId == "1") { stopBackground(); }

                modalElem.classList.add('active');
            overlay.classList.add('active');
        }
    });

    

        document.body.addEventListener('keyup', function (e) {
            var key = e.keyCode;

            if (key == 27) {

                document.querySelector('.modal.active').classList.remove('active');
                document.querySelector('.overlay').classList.remove('active');
            };
        }, false);


        overlay.addEventListener('click', function() {
            document.querySelector('.modal.active').classList.remove('active');
            this.classList.remove('active');
        });
     
}); // end ready



// Действия раскрывающегося списка

/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
  msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 