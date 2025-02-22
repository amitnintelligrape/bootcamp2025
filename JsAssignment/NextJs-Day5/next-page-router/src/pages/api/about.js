const about = {
    "about": {
      "companyName": "Tech Innovations Ltd.",
      "established": 2010,
      "mission": "To create cutting-edge technology solutions that drive business growth and innovation.",
      "vision": "To be a global leader in tech innovation, empowering businesses through smart, scalable solutions.",
      "coreValues": [
        "Innovation",
        "Integrity",
        "Collaboration",
        "Excellence"
      ],
      "services": [
        "Software Development",
        "Cloud Solutions",
        "IT Consulting",
        "Cybersecurity"
      ],
      "headquarters": {
        "address": "123 Tech Avenue, Silicon Valley, CA, USA",
        "contactNumber": "+1 800-123-4567",
        "email": "info@techinnovations.com"
      },
      "employees": [
        {
          "employeeID": "E001",
          "firstName": "John",
          "lastName": "Doe",
          "position": "Software Engineer",
          "department": "Development",
          "dateOfJoining": "2020-01-15",
          "email": "john.doe@techinnovations.com",
          "phone": "+1 555-1234",
          "salary": 85000,
          "skills": [
            "JavaScript",
            "Node.js",
            "React"
          ],
          "manager": {
            "employeeID": "E005",
            "firstName": "Sarah",
            "lastName": "Lee",
            "position": "Engineering Manager"
          }
        },
        {
          "employeeID": "E002",
          "firstName": "Emily",
          "lastName": "Clark",
          "position": "Product Manager",
          "department": "Product",
          "dateOfJoining": "2018-05-20",
          "email": "emily.clark@techinnovations.com",
          "phone": "+1 555-5678",
          "salary": 95000,
          "skills": [
            "Product Strategy",
            "Market Research",
            "Agile Methodologies"
          ],
          "manager": {
            "employeeID": "E003",
            "firstName": "Mark",
            "lastName": "Taylor",
            "position": "VP of Product"
          }
        }
      ]
    }
  }  
export default function handler(req, res) {
    res.status(200).json(about);
}
  