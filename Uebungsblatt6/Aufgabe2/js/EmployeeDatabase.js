//Todo: Implement this file as a module according to the revealing module pattern
var employeeDatabase = (function () {
	var employees = [];
	var counter = 0;

	var createEmployee = (name, email, room) => {
		var e = new Employee(counter, name, email, room);

		employees.push(e);
		counter++;

		return e;
	};

	var updateEmployee = (id, name, email, room) => {
		var e = employees.find((el) => { return el.id == id });
		if (!e) {
			console.log('Invalid ID (' + id + '). Cannot update Person');
			return undefined;
		}

		e.name = name;
		e.email = email;
		e.room = room;

		console.log(employees);

		return e;
	};

	var deleteEmployee = (id) => {
		var index = employees.findIndex((el) => { return el.id == id });

		if (index == -1) {
			console.log('Invalid ID (' + id + '). Cannot delete Person');
			return undefined;
		}

		employees.splice(index, 1);
	};

	return {
		createEmployee: createEmployee,
		updateEmployee: updateEmployee,
	};
})();
