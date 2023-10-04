let passInput =document.querySelector('#pass-input');
let passStrength=document.getElementById('password-strength');
let poor =document.querySelector('#poor');
let weak =document.querySelector('#weak');
let strong =document.getElementById('strong');
let passwordInfo=document.querySelector('#password-info');

let poorRegExp=/[a-z]/;
let weakRegExp=/[A-Z]/;
let strongRegExp=/($#@!)/;

let poorPass= poorRegExp.test(passInput.value);
let weakPass= weakRegExp.test(passInput.value);
let strongPass= strongRegExp.test(passInput.value);



if(passInput.value==='')
{
passwordInfo.innerHTML = `The passoword is weak`;
}