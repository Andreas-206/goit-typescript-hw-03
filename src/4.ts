// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

// export {};

class Key {
	private signature: number

	constructor() {
		this.signature = Math.random()
	}

	getSignature(): number {
		return this.signature
	}
}

class Person {
	private key: Key

	constructor(key: Key) {
		this.key = key
	}

	getKey(): Key {
		return this.key
	}
}

abstract class House {
	protected door: boolean
	protected key: Key
	protected tenants: Person[]

	constructor(key: Key) {
		this.door = false
		this.key = key
		this.tenants = []
	}

	abstract openDoor(key: Key): void

	comeIn(person: Person): void {
		if (this.door) {
			this.tenants.push(person)
			console.log(`${person.getKey()} entered the house.`)
		} else {
			console.log('The door is closed. Nobody can come in.')
		}
	}
}

class MyHouse extends House {
	openDoor(key: Key): void {
		if (key.getSignature() === this.key.getSignature()) {
			this.door = true
			console.log('The door is now open.')
		} else {
			console.log('You cannot open the door with this key.')
		}
	}
}

const key = new Key()
const house = new MyHouse(key)
const person = new Person(key)

house.openDoor(person.getKey())
house.comeIn(person)
