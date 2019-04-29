//Todo: Implement the class Employee here (class syntax)
class Employee {
	constructor(id, name, email, room) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.room = room;
	}

	getId() {
		return this.id;
	}

	getName() {
		return this.name;
	}

	getEmail() {
		return this.email;
	}

	getRoom() {
		return this.room;
	}

	toString() {
		return 'ID: ' + this.id + ' Name: ' + this.name + ' email: ' +
			this.email + ' room: ' + this.room;
	}
}
