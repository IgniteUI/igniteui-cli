const flatDS =  [
	{ "employeeID": 0, "PID": -1, "firstName": "Andrew", "lastName": "Fuller", "reportsTo": null },
	{ "employeeID": 1, "PID": -1, "firstName": "Jonathan", "lastName": "Smith", "reportsTo": null },
	{ "employeeID": 2, "PID": -1, "firstName": "Nancy", "lastName": "Davolio", "reportsTo": null },
	{ "employeeID": 3, "PID": -1, "firstName": "Steven", "lastName": "Buchanan", "reportsTo": null },
					// sub of ID 1
	{ "employeeID": 4, "PID": 0, "firstName": "Janet", "lastName": "Leverling", "reportsTo": 0 },
	{ "employeeID": 5, "PID": 0, "firstName": "Laura", "lastName": "Callahan", "reportsTo": 0 },
	{ "employeeID": 6, "PID": 0, "firstName": "Margaret", "lastName": "Peacock", "reportsTo": 0 },
	{ "employeeID": 7, "PID": 0, "firstName": "Michael", "lastName": "Suyama", "reportsTo": 0 },
					// sub of ID 4
	{ "employeeID": 8, "PID": 4, "firstName": "Anne", "lastName": "Dodsworth", "reportsTo": 4 },
	{ "employeeID": 9, "PID": 4, "firstName": "Danielle", "lastName": "Davis", "reportsTo": 4 },
	{ "employeeID": 10, "PID": 4, "firstName": "Robert", "lastName": "King", "reportsTo": 4 },
					// sub of ID 2
	{ "employeeID": 11, "PID": 2, "firstName": "Peter", "lastName": "Lewis", "reportsTo": 2 },
	{ "employeeID": 12, "PID": 2, "firstName": "Ryder", "lastName": "Zenaida", "reportsTo": 2 },
	{ "employeeID": 13, "PID": 2, "firstName": "Wang", "lastName": "Mercedes", "reportsTo": 2 },
					// sub of ID 3
	{ "employeeID": 14, "PID": 3, "firstName": "Theodore", "lastName": "Zia", "reportsTo": 3 },
	{ "employeeID": 15, "PID": 3, "firstName": "Lacota", "lastName": "Mufutau", "reportsTo": 3 },
					// sub of ID 16
	{ "employeeID": 16, "PID": 15, "firstName": "Jin", "lastName": "Elliott", "reportsTo": 16 },
	{ "employeeID": 17, "PID": 15, "firstName": "Armand", "lastName": "Ross", "reportsTo": 16 },
	{ "employeeID": 18, "PID": 15, "firstName": "Dane", "lastName": "Rodriquez", "reportsTo": 16 },
					// sub of ID 19
	{ "employeeID": 19, "PID": 18, "firstName": "Declan", "lastName": "Lester", "reportsTo": 19 },
	{ "employeeID": 20, "PID": 18, "firstName": "Bernard", "lastName": "Jarvis", "reportsTo": 19 },
					// sub of ID 20
	{ "employeeID": 21, "PID": 20, "firstName": "Jeremy", "lastName": "Donaldson", "reportsTo": 2 }
];

export { flatDS };
