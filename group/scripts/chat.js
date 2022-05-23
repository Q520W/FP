const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const chat = document.getElementById('chat');
form.addEventListener('submit', submitEvent);
function submitEvent(event){
    event.preventDefault();
    if (input.value) {
       socket.emit('chat message', input.value);
       input.value = '';
    }
}
socket.on('chat message', appendMessage);
function appendMessage(message){
 var Words = document.getElementById("words");
            var Who = document.getElementById("who");
            var Input = document.getElementById("input");
            var Talk1 = document.getElementById("talk1");
            
                
                if(Who.value == 0){
	                
                    str = '<div class="atalk"><span>A says :' + message +'</span></div>';
                }
                else{
                    str = '<div class="btalk"><span>B says :' + message +'</span></div>' ;  
                }
                Words.innerHTML = Words.innerHTML + str;

}