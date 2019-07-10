//Todo: Implement this file as a module according to the revealing module pattern
var employeeDatabase = (function() {
	var id = 0;
	var employees = [];

	function createEmployee(name, email, room) {
		var newEmployee = new Employee(id, name, email, room);
		employees.push(newEmployee);
		id++;
		return newEmployee;
	}

	function updateEmployee(id, name, email, room) {
		var index = employees.findIndex(function (employee) {
			return employee.id === id;
		});

		if (index === -1) {
			console.log('Invalid ID (' + id + '). Cannot update Employee.');
			return undefined;
		}

		var newEmployee = new Employee(id, name, email, room);
		employees[index] = newEmployee;

		return newEmployee;
	}

	return {
		createEmployee: createEmployee,
		updateEmployee: updateEmployee,
	}
})();
