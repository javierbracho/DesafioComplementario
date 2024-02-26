const socket = io ()

let user; 
const chatbox = document.getElementById("chatbox")

Swal.fire ({
    title: "Ingresa tu nombre",
    input: "text",
    text: "Identificate para acceder al chat",
    icon: "question",
    allowOutsideClick: false,
    preConfirm: (value)=>{
        if(!value) {
            Swal.showValidationMessage("Tu nombre es requerido para acceder")
            return value
        }
    } 
}).then (result => {
    user = result.value
})

chatbox.addEventListener("keyup", (event)=> {
    if(event.key === "Enter"){
        if(chatbox.value.trim().length > 0){
            socket.emit("message", {user: user, message: chatbox.value });
            chatbox.value = ""
        }
    }
})

socket.on("messages", (data) => {
    let log = document.getElementById("mensajes");
    let messages = "";
  
    data.forEach((message) => {
      messages += `${message.user} dice: ${message.message} <br>`;
    });
  
    log.innerHTML = messages;
  });
  