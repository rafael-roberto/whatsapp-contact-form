
var alignment = 'left'; // left or right
var phone = '5541999999999' // full number with country code e local area code, numbers only
var msg = 'Olá! Tenho interesse no seu produto.' // initial message to send
var email = 'mail@test.com' // destination mail to capture the client data
var balloon = 'Orçamento e Prazo? Pergunte aqui.'; // message show on the call-to-action balloon
var backend = 'email.php'; //set the location of the destination of the form action
var balloonHover;

var e = document.createElement('div');
htmldata = '<whatsapp-tag>'+
                '<a class="whatsapp-button" id="whatsapp-button" href="javascript:void(0);">'+
                    '<div class="whatsapp-icon '+alignment+'">'+
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="wh-messenger-svg-whatsapp wh-svg-icon">'+
                            '<path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path>'+
                        '</svg>'+
                    '</div>'+
                    '<blockquote id="whatsapp-balloon" class="whatsapp-balloon '+alignment+'"><span>'+balloon+'</span></blockquote>'+
                '</a>'+
                '<div id="whatsapp-contact-modal" class="whatsapp-contact-modal">'+
                    '<div class="whatsapp-contact-modal-content '+alignment+'">'+
                        '<div class="whatsapp-contact-modal-header">'+
                        '<span id="whatsapp-contact-modal-close" class="close">&times;</span>'+
                            '<p>Olá! Preencha os campos abaixos para iniciar a conversa no WhatsApp</p>'+
                        '</div>'+
                        '<div class="whatsapp-contact-modal-body">'+
                            '<form action="'+backend+'" method="POST" autocomplete="off" target="_blank" id="whatsapp-contact-form">'+
                                '<input type="hidden" id="wwhats" name="wwhats" value="'+phone+'">'+
                                '<input type="hidden" id="wmensagem" name="wmensagem" value="'+msg+'">'+
                                '<input type="hidden" id="wremetente" name="wremetente" value="'+email+'">'+
                                '<input type="text" id="wnome" name="wnome" placeholder="Seu nome.. *">'+
                                '<input type="email" id="wemail" name="wemail" placeholder="Seu e-mail.. *">'+
                                '<input type="text" id="wfone" name="wfone" placeholder="Seu telefone.. *">'+
                                '<input type="submit" value="Iniciar a conversa">'+
                            '</form>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</whatsapp-tag>';
e.innerHTML = htmldata;
document.getElementsByTagName("BODY")[0].appendChild(e.firstChild);

document.getElementById("whatsapp-button").addEventListener("mouseover", function( event ) {
    if(!balloonHover){
        balloonHover = true;
        document.getElementById("whatsapp-balloon").setAttribute("style", "display: none;")
    }
})

var btn = document.getElementById("whatsapp-button");
var modal = document.getElementById("whatsapp-contact-modal");
var span = document.getElementById("whatsapp-contact-modal-close");
var form = document.getElementById("whatsapp-contact-form");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

form.onsubmit = function() {
    event.preventDefault();
    modal.style.display = "none";
    form.submit();
}