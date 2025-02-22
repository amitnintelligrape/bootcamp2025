const product = {
    "products": [
      {
        "productID": "P12345",
        "name": "Smartphone X1000",
        "category": "Electronics",
        "brand": "Tech Innovators",
        "price": 799.99,
        "currency": "USD",
        "availability": true,
        "stockQuantity": 150,
        "description": "A powerful laptop with high performance.",
        "ratings": {
          "averageRating": 4.5,
          "numberOfReviews": 1200
        }
      },
      {
        "productID": "P12346",
        "name": "Wireless Earbuds Pro",
        "category": "Electronics",
        "brand": "SoundMaster",
        "price": 149.99,
        "currency": "USD",
        "availability": true,
        "stockQuantity": 250,
        "description": "A powerful laptop with high performance.",
        "ratings": {
          "averageRating": 4.7,
          "numberOfReviews": 850
        }
      },
      {
        "productID": "P12347",
        "name": "Laptop UltraBook 15",
        "category": "Electronics",
        "brand": "Tech Innovators",
        "price": 1299.99,
        "currency": "USD",
        "availability": true,
        "stockQuantity": 80,
        "description": "A powerful laptop with high performance.",
        "ratings": {
          "averageRating": 4.8,
          "numberOfReviews": 600
        }
      },
      {
        "productID": "P12348",
        "name": "Smartwatch V2",
        "category": "Wearables",
        "brand": "FitTrack",
        "price": 199.99,
        "currency": "USD",
        "availability": false,
        "stockQuantity": 0,
        "description": "A powerful laptop with high performance.",
        "ratings": {
          "averageRating": 4.3,
          "numberOfReviews": 420
        }
      },
      {
        "productID": "P12349",
        "name": "Gaming Mouse Pro X",
        "category": "Accessories",
        "brand": "GameGear",
        "price": 59.99,
        "currency": "USD",
        "availability": true,
        "stockQuantity": 300,
        "description": "A powerful laptop with high performance.",
        "ratings": {
          "averageRating": 4.6,
          "numberOfReviews": 1500
        }
      }
    ]
  }

  export default function handler(req, res) {
    res.status(200).json(product);
  }