const pass = document.querySelectorAll('input[type="password"]');
const incorrect = document.querySelector('.incorrect');
pass.forEach((p)=>{
	p.addEventListener("input",()=>{
		if(pass[0].value!=pass[1].value){
		pass[0].classList.add("error");
		pass[1].classList.add("error");
		incorrect.classList.remove("hidden");
		}
		else{
			pass[0].classList.remove("error");
			pass[1].classList.remove("error");
			incorrect.classList.add("hidden");
		}
	})
});