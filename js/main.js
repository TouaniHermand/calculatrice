const submitButton = document.querySelector('#btn_submit');
const buttonList = document.querySelectorAll('.calc_button');
const field = document.getElementById('name');



const addToText=(digit)=>{
    field.value +=digit
}

const showResult = ()=>{
    const result = eval(field.value)
    //eval() permet d'evaluer une expression en Javascript
    field.value = result
    //on formate la zone de texte
}

//On ajoute l'evennement sur chaque element de notre liste
buttonList.forEach((element)=>{
    element.addEventListener('click',()=>{
        addToText(element.innerHTML);
    })
})


submitButton.addEventListener('click',showResult)
submitButton.style.backgroundColor='green';
submitButton.style.fontWeight='bolder';

 

//le setTimeout() Permet d'executer une action apres un certain nombre de tepms
setTimeout(()=>{
    console.log('Me voila !')
},5000)

//le setInterval() permet d'executer une ou plusierus instructions de maniere repetee en 
//commencant apres l'intervalle de temps,puis a chaque intervalle de temps

setInterval(()=>{
    console.log("Je me dois sous peine")
},1000)