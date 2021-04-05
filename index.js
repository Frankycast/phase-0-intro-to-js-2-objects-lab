// Write your solution in this fi
const employee =  {
  names: ['Angel'],
  streetAddress: ['12th street']
}
    
function  updateEmployeeWithKeyAndValue(employee, key, value){
 let newEmployee = [... employee]
  newEmployee.names='Sam';
  return employee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
  
}
function deleteFromEmployeeByKey(obj,key,value){
  let newEmployee = nondestructivelyUpdateObject()
  return Object.assign({}, obj,{[key]:value });
}
function destructivelyDeleteFromEmployeeByKey(){

}