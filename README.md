# devtoolbox-api

## Simple API using Node, Express, and MongoDB
  - Download or clone
  - npm install
  - Start local mongo server
  - npm start  to run server
  - curl or postman to test methods (CRUD)

## Schema
** All required ** 
 - ``` Category: String ``` - [project, design, development, security, marketing]
 - ``` Image: String ``` - Image URL
 - ``` Title: String ``` - Tool Title 
 - ``` Description: String``` - Description about tool 
 - ``` Tags: Array ``` - Array of tags for sorting purposes 
 - ``` Visit_url: String ``` - URL pointing to tool's homepage
 - ``` Heart_count: Number ``` - Vote count to track upvoting

## To do
- [ ] Secure API
  * [ ] Authorization 
  * [ ] Validation
- [ ] Link to React frontend
- [ ] Get ready for production
