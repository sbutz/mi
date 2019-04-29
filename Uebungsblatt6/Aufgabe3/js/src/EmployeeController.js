var employeeController = (function() {
    
    function publicInit() {
        setClickHandlers();
    }
    
    function setClickHandlers() {
        var employeeAddButton = document.querySelector(".add-employee");
        employeeAddButton.addEventListener("click", addEmployee);
    }
    
    function addEmployee() {
        var employeeName = document.getElementById("employee_name_input").value;
        var employeeEMail = document.getElementById("employee_email_input").value;
        var employeeRoom = document.getElementById("employee_room_input").value;
        
        var employee = employeeDatabase.createEmployee(employeeName, employeeEMail, employeeRoom);
        addEmployeeToView(employee);
        
    }
    
    function addEmployeeToView(employee) {
        if (typeof(employee) != undefined) {
            var employeeID = employee.getId();
            var employeeEMail = employee.getEmail();
            var employeeName = employee.getName();
            var employeeRoom = employee.getRoom();
        }
        node = Node.fromString("<li class='employee' user-id='" + employeeID + "'>\
        <img class='employee-picture' src='res/images/user.png' />\
        <span class='employee-id'>" + employeeID + "</span>\
        <input class='employee-name first-input' value='" + employeeName + "' placeholder='name'>\
        <input class='employee-email' value='" + employeeEMail + "' placeholder='email'>\
        <input class='employee-room' value='" + employeeRoom + "' placeholder='room'></li>");
        
        var employeesList = document.getElementById("employees");
        employeesList.appendChild(node);
    }
    
    return {
        init: publicInit
    };
})();
