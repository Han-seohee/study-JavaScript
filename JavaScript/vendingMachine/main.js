//처음 돈 상태
cash = 0;
//cash창
let inputCash = document.querySelector(".cashWrap");
inputCash.addEventListener("click", clickCash);
//coin창
let inputCoin = document.querySelector(".coin");
inputCoin.addEventListener("click", clickCoin);
//금액 표시창
// let amount = document.querySelector(".won").innerHTML = cash + "원";
let amount = document.querySelector(".won");
//거스름돈
let spin = document.querySelector(".spin");
spin.addEventListener("click", clickSpin);

//자판기의 각 버튼에 클릭 이벤트
let burger = document.getElementById("burgerBtn");
burger.addEventListener("click", clickBurger);
let pizza = document.getElementById("pizzaBtn");
pizza.addEventListener("click", clickPizza);
let hotdog = document.getElementById("hotdogBtn");
hotdog.addEventListener("click", clickHotdog);
let taco = document.getElementById("tacoBtn");
taco.addEventListener("click", clickTaco);
let fries = document.getElementById("friesBtn");
fries.addEventListener("click", clickFries);
let chicken = document.getElementById("chickenBtn");
chicken.addEventListener("click", clickChicken);
let sandwich = document.getElementById("sandwichBtn");
sandwich.addEventListener("click", clickSandwich);
let popcorn = document.getElementById("popcornBtn");
popcorn.addEventListener("click", clickPopcorn);
let hamburger = document.getElementById("hamburgerBtn");
hamburger.addEventListener("click", clickHamburger);

//cash창 클릭 후 금액 받기
function clickCash(){
    cash = Number(prompt("얼마를 투입하시겠습니까? - 숫자만 입력하세요!", "10000"));
    amount.innerHTML = (cash + "원");

    //금액제한
    if(cash>50000) {
        alert("과도한 폭식은 건강 이상을 초래합니다. 😔");
        damount.innerHTML = (0 + "원");
    } 
    if(cash<100) {
        alert("100원 이상 투입 가능합니다.");
        amount.innerHTML = (0 + "원");
    }

    if(!Number(cash)) {
        alert("숫자만 입력하세요!");
        amount.innerHTML = (0 + "원");
    }
}
//coin창 클릭
function clickCoin(){
    cash = Number(prompt("얼마를 투입하시겠습니까? - 숫자만 입력하세요!", "10000"));
    amount.innerHTML = (cash + "원");

    //금액제한
    if(cash>50000) {
        alert("과도한 폭식은 건강 이상을 초래합니다. 😔");
        damount.innerHTML = (0 + "원");
    } 
    if(cash<100) {
        alert("100원 이상 투입 가능합니다.");
        amount.innerHTML = (0 + "원");
    }

    if(!Number(cash)) {
        alert("숫자만 입력하세요!");
        amount.innerHTML = (0 + "원");
    }
}


//버튼 클릭후 계산
function clickBurger(){
    if(cash < 4500){
        alert("금액이 부족합니다!");
    } else {
        cash -= 4500;
        alert("햄버거🍔 맛있게 드세요.");
        amount.innerHTML = cash + "원";
    }
}
function clickPizza(){
    if(cash < 3500){
        alert("금액이 부족합니다!");
    } else {
        cash -= 3500;
        alert("피자🍕 맛있게 드세요.");
        amount.innerHTML = cash + "원";
    }
}
function clickHotdog(){
    if(cash < 2000){
        alert("금액이 부족합니다!");
    } else {
        cash -= 2000;
        alert("핫도그🌭 맛있게 드세요.");
        amount.innerHTML = cash + "원";
    }
}
function clickTaco(){
    if(cash < 3000){
        alert("금액이 부족합니다!");
    } else {
        cash -= 3000;
        alert("타코🌮 맛있게 드세요.");
        amount.innerHTML = cash + "원";
    }
}
function clickFries(){
    if(cash < 2000){
        alert("금액이 부족합니다!");
    } else {
        cash -= 2000;
        alert("감자튀김🍟 맛있게 드세요.");
        amount.innerHTML = cash + "원";
    }
}
function clickChicken(){
    if(cash < 3500){
        alert("금액이 부족합니다!");
    } else {
        cash -= 3500;
        alert("치킨🍗 맛있게 드세요.");
        amount.innerHTML = cash + "원";
    }
}
function clickSandwich(){
    if(cash < 1500){
        alert("금액이 부족합니다!");
    } else {
        cash -= 1500;
        alert("샌드위치🥪 맛있게 드세요.");
        amount.innerHTML = cash + "원";
    }
}
function clickPopcorn(){
    if(cash < 2500){
        alert("금액이 부족합니다!");
    } else {
        cash -= 2500;
        alert("치킨팝🍗 맛있게 드세요.");
        amount.innerHTML = cash + "원";
    }
}
function clickHamburger(){
    if(cash < 4500){
        alert("금액이 부족합니다!");
    } else {
        cash -= 4500;
        alert("햄버거🍔 맛있게 드세요.");
        amount.innerHTML = cash + "원";
    }
}

//거스름돈 받기
function clickSpin() {
    if(cash>0){
        amount.innerHTML = 0 + "원";
        alert("거스름돈 " + cash + "원을 받으세요.");
    }
}