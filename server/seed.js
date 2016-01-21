if (Prescriptions.find().count() === 0) {
  Prescriptions.insert({
  	"identifier": "44-291",
  	"shape": "circular",
  	"name": "Ibuprofen",
    "storage": 2,
  	"width": 9.67,
  	"height": 4.92,
  	"length": 4.92,
  	"quantity": 500
  });

  Prescriptions.insert({
  	"identifier": "B-973",
  	"shape": "elliptical",
  	"name": "Adderall",
    "storage": 1,
  	"width": 10.18,
  	"height": 8.12,
  	"length": 3.19,
  	"quantity": 9001
  });
}
