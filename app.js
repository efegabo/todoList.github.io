 

class Tasks{ 
 constructor(description, id){
 	this.description= description;
 		
 }
}


class listUI{

	insertTask(task){
		const list = document.getElementById('listTask');
		const listT= document.createElement('div');

		listT.innerHTML=`
			<div class=" card-add">
			<div class="desc"> 
			<textarea id="texto" name="texto" class="taskDescription"  disabled maxlength="100">${task.description}
            </textarea><br>
			 
			<div class="btns">  
			<a href="#" class="btn-delete " name="delete">X</a>
			 <a href="#" class="btn-complete " name="complete">Complete</a>
            </div>	
			</div>
			</div>



		`;

		list.appendChild(listT);
	}

	completeTask(element, task){
		console.log("hola")
		 if (element.name ==="complete") {
		 	const taskCompletes = document.getElementById('taskCompletes');
		 	  const description = element.parentElement.parentElement.querySelector('.taskDescription').textContent;
		 	//const descrip= document.getElementById('description' + idO );
		 	const listC= document.createElement('div');

		listC.innerHTML=`
			<div >
			<div class="compl" > 
			   
			<i class="bi bi-check2-circle">    </i><p> ${description}</p> 
			</div>
			</div>


		`;
		taskCompletes.appendChild(listC);
			element.parentElement.parentElement.parentElement.remove();
		 

		}

		  
		}
	 

	deleteTask(element){
		if (element.name ==="delete") {
			element.parentElement.parentElement.parentElement.remove();
		}
	}

	messagee(messages, classCss){
		const div = document.createElement('div');
		div.className=`alert ${classCss}`
		div.appendChild(document.createTextNode(messages))

		const container= document.querySelector('#container');
        const app= document.querySelector('.app');
		 container.insertBefore(div, app)

		 setTimeout(function(){
			document.querySelector('.alert').remove();
		}, 2000);
	}


}



document.getElementById('form').addEventListener('submit', function(e) {
	const descrip = document.getElementById('description').value;

     if (descrip === "") {
     	const lista = new listUI();
     	lista.messagee("Insert a Task", "danger")
     	 
     }else{
     	const task = new Tasks(descrip);
	console.log(task)
	const lista = new listUI();

	lista.insertTask(task);
	 
     	lista.messagee("success", "sucess")
	e.preventDefault();
     }
	 
})






document.getElementById('listTask').addEventListener('click', function(e){
	const lista = new listUI();
	lista.deleteTask(e.target )
});





document.getElementById('listTask').addEventListener('click', function(e){
 const descript = document.getElementById('description').value;
  const task = new Tasks(descript);
   const lista = new listUI();
	 
	lista.completeTask(e.target, task)
	 
})

 