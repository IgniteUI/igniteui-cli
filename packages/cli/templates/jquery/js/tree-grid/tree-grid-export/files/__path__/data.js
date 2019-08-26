var flatDS = [
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

var hierarchicalDS = [
	{
		"id": 0, "tasks": "Project Plan", "start": "6/2/2014", "finish": "8/22/2014", "duration": "60d", "progress": "32%", "products": [
			{ "id": 1, "tasks": "Planning", "start": "6/2/2014", "finish": "6/4/2014", "duration": "3d", "progress": "100%" },
			{ "id": 2, "tasks": "Write a specification", "start": "6/5/2014", "finish": "6/6/2014", "duration": "2d", "progress": "100%" },
			{ "id": 3, "tasks": "Create a demo application", "start": "6/9/2014", "finish": "6/11/2014", "duration": "3d", "progress": "100%" },
			{ "id": 4, "tasks": "Collect a feedback", "start": "6/12/2014", "finish": "6/12/2014", "duration": "1d", "progress": "100%" },
			{
				"id": 5, "tasks": "Design", "start": "6/13/2014", "finish": "6/19/2014", "duration": "5d", "progress": "60%", "products": [
					{ "id": 8, "tasks": "Conceptual Design", "start": "6/13/2014", "finish": "6/16/2014", "duration": "2d", "progress": "100%" },
					{ "id": 9, "tasks": "Preliminary Design", "start": "6/17/2014", "finish": "6/18/2014", "duration": "2d", "progress": "65%" },
					{ "id": 10, "tasks": "Final Design", "start": "6/19/2014", "finish": "6/19/2014", "duration": "1d", "progress": "15%" }
				]
			},
			{
				"id": 6, "tasks": "Development", "start": "6/20/2014", "finish": "8/20/2014", "duration": "44d", "progress": "5%", "products": [
					{ "id": 11, "tasks": "Implementation", "start": "6/20/2014", "finish": "7/17/2014", "duration": "20d", "progress": "5%" },
					{ "id": 12, "tasks": "Testing", "start": "7/18/2014", "finish": "7/31/2014", "duration": "10d", "progress": "0%" },
					{ "id": 13, "tasks": "Bug fixing", "start": "8/1/2014", "finish": "8/14/2014", "duration": "10d", "progress": "0%" },
					{ "id": 14, "tasks": "Documenting", "start": "8/15/2014", "finish": "8/20/2014", "duration": "4d", "progress": "0%" }
				]
			},
			{ "id": 7, "tasks": "Project Complete", "start": "8/21/2014", "finish": "8/22/2014", "duration": "2d", "progress": "0%" }
		]
	}
];