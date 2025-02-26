const teachers = {
  "teachers": [
    {
      "id": 1,
      "first_name": "Aarav",
      "last_name": "Patel",
      "subject": "Mathematics",
      "email": "aarav.patel@example.com",
      "phone": "+1234567890"
    },
    {
      "id": 2,
      "first_name": "Priya",
      "last_name": "Sharma",
      "subject": "Science",
      "email": "priya.sharma@example.com",
      "phone": "+1234567891"
    },
    {
      "id": 3,
      "first_name": "Ananya",
      "last_name": "Verma",
      "subject": "English",
      "email": "ananya.verma@example.com",
      "phone": "+1234567892"
    },
    {
      "id": 4,
      "first_name": "Ravi",
      "last_name": "Kumar",
      "subject": "History",
      "email": "ravi.kumar@example.com",
      "phone": "+1234567893"
    },
    {
      "id": 5,
      "first_name": "Sanya",
      "last_name": "Singh",
      "subject": "Art",
      "email": "sanya.singh@example.com",
      "phone": "+1234567894"
    }
  ]
} 

export default function handler(req, res) {
    res.status(200).json(teachers);
}
  