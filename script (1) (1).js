let nameIp=document.getElementById("nameIp");
let ageIp=document.getElementById("ageIp");
let msg=document.getElementById("msg");
let form=document.getElementById("form");
let list=document.getElementById("list");
    form.addEventListener("submit",function(e)
        {
          e.preventDefault();
          validation();
        }
    );
let validation=function()
{
    if(nameIp.value ==="" || ageIp.value ==="")
    {
     msg.innerHTML="*Fill all the fields";
    }
    else
    {
        msg.innerHTML="";
        inputData();
        document.querySelector('.modal').style.display="none";
    }
};
/* [] array,{}obj,()func*/
let data=[{}];
let inputData= function()
{
    data.push(
        {
        name: nameIp.value,
        age: ageIp.value,
       
    });
    localStorage.setItem("data",JSON.stringify(data));
    listDisplay();
}; 

let listDisplay=function()
{
    list.innerHTML="";
    //x-obj y-index 
    data.map( (x,y) =>
    {
      return (list.innerHTML+=`
    <div id=${y}>
      <p>${x.name}</p>
      <p>${x.age}</p>
      <span class="options">
      <i onclick="editList(this)"class="fa-solid fa-pen-to-square"></i>
      <i onclick="deleteList(this)" class="fa-solid fa-trash-can"></i>
      </span>
    </div>
    `);
    });
 resetList();
};

let deleteList=function(e)
{
   e.parentElement.parentElement.remove();
   data.splice(e.parentElement.parentElement.id,1);
   localStorage.setItem("data",JSON.stringify(data));
}
let editList=function(e)
{
  let selectedTask=e.parentElement.parentElement;
  nameIp.value=selectedTask.children[0].innerHTML;
  ageIp.value=selectedTask.children[1].innerHTML;
  document.querySelector('.modal').style.display="flex";
  deleteList(e);
  
}
let resetList=function()
{
    nameIp.value="";
    ageIp.value="";
   
};
//immediate invoke functional expression
(()=>
    {
    data=JSON.parse(localStorage.getItem("data")) || [];
    listDisplay();
    }
)(); 


document.getElementById('modal-btn').addEventListener('click',function()
{
 document.querySelector('.modal').style.display="flex";
});

document.querySelector('.close').addEventListener('click',function()
{
 document.querySelector('.modal').style.display="none";
});

