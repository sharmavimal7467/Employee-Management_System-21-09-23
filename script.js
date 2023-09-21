const form = document.getElementById("form");
const tbody = document.getElementById("tbody");

const employees = [];







// it took the detail from the employee(object) from line 24 and set the data inside the tr in line 8 by the help of innerHTML propertires.
function addEmployee(employee){

    //check it employee is already present in the array

    for(let i = 0;i<employees.length;i++){
        let e = employees[i];
        if(e.no === employee.no){
            alert(" This S.No. already exists")
            return;
        }
        else if(e.email === employee.email){
            alert("This email is already exists")
            return;
        }
        else if(e.employee_id === employee.employee_id){
            alert("This employee_Id is alreay exists")
        }
    }




    const tr = document.createElement("tr");
    console.log(tr);
    tr.innerHTML = `<td>${employee.no}</td>
    <td>${employee.name}</td>
    <td>${employee.employee_id}</td>
    <td>${employee.email}</td>
    <td>${employee.department}</td>
    <td>${employee.company_name}</td>
    <td>${employee.designation}</td>
    <td>
    <button onclick = "deleteEmployee(this)" data-empid = "${employee.employee_id}">Delete</button>
    </td> 
    `;
    //WHY WE NOT CREATE THIS BUTTON BY USING CREATEELEMENT("BUTTON)
    // console.log(addEmployee["name"]);
   
      tbody.appendChild(tr);

      //after create new tr we have to push into an array (employees) for check wheater the object is present or not.
      employees.push(employee);

    //IN PLACE OF EMPLOYEE WE WRITE tr WILL IT WORK...

    form.reset();  //this will reset the input to its original like noting is written. on adding the data...0
}


function deleteEmployee(btnRef){
    let employee_id = btnRef.getAttribute("data-empid");
    //using the above employee_id delete the corresponding object in the employees array
    for(let i = 0;i<employees.length;i++){
          if(employees[i].employee_id === employee_id){
            employees.splice(i,1);
            break;
          }
    }

    //also remove the employee from the DOM tree
    let parentTd = btnRef.parentNode;
    let parentTr = parentTd.parentNode;

    //the below line remove the tag tr(<tr></tr> with is an object) from the DOM tree.
    parentTr.remove(); 
}


form.addEventListener("submit",(event) => {
    event.preventDefault();
    let employee = {
        no:event.target.serial_no.value,
        name: event.target.username.value,
        employee_id: event.target.employee_id.value,
        email:event.target.email.value,
        department:event.target.department.value,
        company_name:event.target.company_name.value,
        designation:event.target.designation.value,
       };
       console.log(employee);
       addEmployee(employee);
});


//we are not allow the user to put duplicate data .




//in edit or update button we use same button for both for edit or for save while write some js like if btnRef.innertext == "edit"{make it save button} we also change the innertext of add employee button to save upadte employee details after submisson it fill again come to same text.
