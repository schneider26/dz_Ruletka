let credits = 1000;


function generateRandomNumber(){
   	bet = Math.round(Math.random() * 36);
  	color = Math.round(Math.random());
}

 while(credits>0){

	let betNumber = prompt('Делайте ставки от 0 до 36 или введите "quit" для выхода из игры');
   	if(betNumber == 'quit')
      break;
	let betColor = confirm('Если Вы ставите на красное - нажмите OK, если на черное - ОТМЕНА');
	let payment = prompt ('Введите сумму кредита или введите "quit" для выхода из игры');
   	if(payment == 'quit')
      break;
  	if(payment >credits){
      confirm('Недостаточно средств!');
      payment = 0;
    }
	credits = credits - payment;
  	
	
	generateRandomNumber();
	console.log(bet);

	if(bet==betNumber)
	{
  	  credits = credits + (payment*35);
 	  console.log('Джекпот!!!');
	}

	if(color==1 && betColor){
  	    credits =  credits + (payment*2);
        console.log('Подравляю!');
	}
	if(color==0 && !betColor){
  	    credits =  credits + (payment*2);
        console.log('Подравляю!');
	} 
	console.log("Ваш счет: " + credits);
  
}
