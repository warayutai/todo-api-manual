# TODO API Manual

A REST API  using **Node.js** and **Express** with in-memory storage.

## Architecture 
- **Routes:**
  - `GET /api/v1` → Get all data
  - `GET /api/v1/:id` → Get data by index
  - `POST /api/v1` → Add a new data
  - `PUT /api/v1/:id` → Update data
  - `DELETE /api/v1/:id` → Delete data by index
- **Example Data format:**
  ```json
  {
    "name": "name1",
    "detail": "detail1"
  }
