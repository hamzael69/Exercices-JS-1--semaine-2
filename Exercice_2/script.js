let dialogue = document.querySelector('#lastname')

dialogue.onblur = dialogueBlur;

function dialogueBlur(){
    alert(dialogue.value = "Merci de votre participation");
}