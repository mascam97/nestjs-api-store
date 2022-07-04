# Project definition - Nestjs API Store

## Goal

Define the business logic to justify the API logic, tools and functionalities.

## Client requirements

The grocery store "MinimalGroseryStore" needs a system to local products to customers, each customber can create product orders, where a seller can approved and an administrator manage the products.

The store hires a mobile and desktop developer for the frontend, and this store requires your services as **Backend Developer** to build an API that allows:

1. Basic Register and Login system
2. Each user can create orders and add products
3. The sellers can approved as paid each order
4. The administrator can create, update and delete products

### Feature justification

- **Guards, Roles and JWT credentials**: Manage the authentication (as API) and authorization
- **User entity**: User data for customers, sellers and administrators
- **Products entity**: Generic representation about any possible product
- **Orders entity**: Group the products to sell
