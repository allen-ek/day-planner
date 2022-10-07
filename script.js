var d = new Date();
var hour=d.getHours();
var today = moment();

$("#currentDay").text(today.format("MMM Do YYYY"));


$('textarea').each(function(){
    var currHour=d.getHours();
    var current=$(this).attr('id');
    if(current<currHour){
        $(this).css("background-color","silver");
    }
    else if(current>currHour){
        $(this).css("background-color","MediumSeaGreen");
    }
    else{
        $(this).css("background-color","Tomato");
    }    
});

renderLast();
var textInput=document.querySelector('div.form-control');
var saveBtn= document.querySelector('.saveBtn');
function renderLast(){
    var textarea11=localStorage.getItem("div.form-control");
    if(!textInput){
        return;
    }
    textInput.textContent=textarea11;
}

saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var input11=document.querySelector('.form-control').value;
    console.log(input11);
    localStorage.setItem('11.form-control',input11);
    renderLast();
});






