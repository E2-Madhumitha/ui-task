const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');


modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);


function openModal() {
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none'; 
}
function closeForm(){
  document.getElementById('formContainer').reset();
}
var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["studentName"] = document.getElementById("studentName").value;
    formData["studentAge"] = document.getElementById("studentAge").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.studentAge;
   
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<i onClick="onEdit(this)"class="fa-solid fa-pen-to-square"></i>
                       <i onClick="onDelete(this)"class="fa-solid fa-trash-can"></i>`;
}

  

function resetForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("studentAge").value = "";
   
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("studentAge").value = selectedRow.cells[1].innerHTML;
    modal.style.display='flex';
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.studentName;
    selectedRow.cells[1].innerHTML = formData.studentAge;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("studentName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}
function errorMessage() {
    
    var uname = document.getElementById("error")
    if ((document.getElementById("studentName").value==""))
    {
        uname.textContent = "Enter student name"
       
    } else {
        uname.textContent = ""
    }
  

}

function errorMsg(){

    var upass = document.getElementById("error1")
    if ((document.getElementById("studentAge").value==""))
    {
        upass.textContent = "Enter student age"
      
    }
    else {
        upass.textContent = ""
    } 

}
