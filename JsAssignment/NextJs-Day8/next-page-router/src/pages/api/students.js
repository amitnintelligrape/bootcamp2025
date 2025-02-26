const students = {
    "students": [
      { "id": 1, "first_name": "Arjun", "last_name": "Mishra", "grade": "A", "email": "arjun.mishra@example.com", "age": 16, "teacherId": 5 },
      { "id": 2, "first_name": "Riya", "last_name": "Gupta", "grade": "B", "email": "riya.gupta@example.com", "age": 17, "teacherId": 1 },
      { "id": 3, "first_name": "Ishaan", "last_name": "Mehta", "grade": "A", "email": "ishaan.mehta@example.com", "age": 15, "teacherId": 2 },
      { "id": 4, "first_name": "Diya", "last_name": "Sharma", "grade": "B", "email": "diya.sharma@example.com", "age": 16, "teacherId": 5 },
      { "id": 5, "first_name": "Vihan", "last_name": "Raj", "grade": "A", "email": "vihan.raj@example.com", "age": 15, "teacherId": 2 },
      { "id": 6, "first_name": "Aarya", "last_name": "Yadav", "grade": "C", "email": "aarya.yadav@example.com", "age": 17, "teacherId": 5 },
      { "id": 7, "first_name": "Kabir", "last_name": "Nair", "grade": "B", "email": "kabir.nair@example.com", "age": 16, "teacherId": 1 },
      { "id": 8, "first_name": "Pooja", "last_name": "Patel", "grade": "A", "email": "pooja.patel@example.com", "age": 16, "teacherId": 2 },
      { "id": 9, "first_name": "Yash", "last_name": "Singh", "grade": "B", "email": "yash.singh@example.com", "age": 17, "teacherId": 1 },
      { "id": 10, "first_name": "Simran", "last_name": "Kaur", "grade": "C", "email": "simran.kaur@example.com", "age": 15, "teacherId": 4 },
      { "id": 11, "first_name": "Reyansh", "last_name": "Reddy", "grade": "B", "email": "reyansh.reddy@example.com", "age": 16, "teacherId": 1 },
      { "id": 12, "first_name": "Maya", "last_name": "Bhatia", "grade": "A", "email": "maya.bhatia@example.com", "age": 17, "teacherId": 5 },
      { "id": 13, "first_name": "Shaurya", "last_name": "Kumar", "grade": "C", "email": "shaurya.kumar@example.com", "age": 15, "teacherId": 2 },
      { "id": 14, "first_name": "Siddharth", "last_name": "Shukla", "grade": "A", "email": "siddharth.shukla@example.com", "age": 16, "teacherId": 4 },
      { "id": 15, "first_name": "Aarohi", "last_name": "Desai", "grade": "B", "email": "aarohi.desai@example.com", "age": 16, "teacherId": 3 },
      { "id": 16, "first_name": "Kritika", "last_name": "Verma", "grade": "C", "email": "kritika.verma@example.com", "age": 17, "teacherId": 4 },
      { "id": 17, "first_name": "Kunal", "last_name": "Chaudhary", "grade": "A", "email": "kunal.chaudhary@example.com", "age": 15, "teacherId": 4 },
      { "id": 18, "first_name": "Saanvi", "last_name": "Sharma", "grade": "B", "email": "saanvi.sharma@example.com", "age": 16, "teacherId": 5 },
      { "id": 19, "first_name": "Vihaan", "last_name": "Thakur", "grade": "A", "email": "vihaan.thakur@example.com", "age": 17, "teacherId": 1 },
      { "id": 20, "first_name": "Krishna", "last_name": "Verma", "grade": "B", "email": "krishna.verma@example.com", "age": 16, "teacherId": 2 },
      { "id": 21, "first_name": "Aditya", "last_name": "Gupta", "grade": "C", "email": "aditya.gupta@example.com", "age": 15, "teacherId": 2 },
      { "id": 22, "first_name": "Ritika", "last_name": "Chawla", "grade": "A", "email": "ritika.chawla@example.com", "age": 17, "teacherId": 3 },
      { "id": 23, "first_name": "Aryan", "last_name": "Joshi", "grade": "B", "email": "aryan.joshi@example.com", "age": 16, "teacherId": 5 },
      { "id": 24, "first_name": "Siddhi", "last_name": "Patel", "grade": "A", "email": "siddhi.patel@example.com", "age": 15, "teacherId": 4 },
      { "id": 25, "first_name": "Veda", "last_name": "Singh", "grade": "B", "email": "veda.singh@example.com", "age": 16, "teacherId": 1 },
      { "id": 26, "first_name": "Tejas", "last_name": "Kamat", "grade": "C", "email": "tejas.kamat@example.com", "age": 17, "teacherId": 4 },
      { "id": 27, "first_name": "Siddharth", "last_name": "Patil", "grade": "A", "email": "siddharth.patil@example.com", "age": 15, "teacherId": 2 },
      { "id": 28, "first_name": "Lavanya", "last_name": "Raj", "grade": "B", "email": "lavanya.raj@example.com", "age": 16, "teacherId": 5 },
      { "id": 29, "first_name": "Aditi", "last_name": "Rao", "grade": "C", "email": "aditi.rao@example.com", "age": 17, "teacherId": 4 },
      { "id": 30, "first_name": "Nikhil", "last_name": "Sharma", "grade": "A", "email": "nikhil.sharma@example.com", "age": 15, "teacherId": 3 }
    ]
  } 
  
  export default function handler(req, res) {
      res.status(200).json(students);
  }
    