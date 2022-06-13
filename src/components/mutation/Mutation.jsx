import { gql } from "@apollo/client";

const UPDATECUSTOMER = gql`
mutation updateCustomers($customer: UpdateCustomer) {
  updateCustomer(customer: $customer) {
    _id
    Name
    Lastname
    Age
    Phonenumber
    Email
    city
  }
}
`;
const MUTATIONCUSTOMER = gql`
  mutation createCustomer($customer: CreateCustomer) {
    createCustomer(customer: $customer) {
      _id
      Name
      Lastname
      Age
      Phonenumber
      Email
      password
      city
    }
  }
`;

const CREATEORDER = gql`
mutation CreateOrder($order: CreateOrder) {
  createOrder(order: $order) {
    NumberOfClient
    dataOfOrder
  }
}
`;

const DELETEORDER = gql`
mutation deleteOrder($order: DeleteOrder) {
  deleteOrder(order: $order)
}
`;

const CREATEPRODUCTS = gql`
  mutation CreateProducts($producto: CreateProducts) {
    createProducts(producto: $producto) {
      _id
      Imagen
      Name
      Ingredients
      Price
      Barcode
    }
  }
`;

const DELETEPRODUCTS = gql`
  mutation deleteProducts($producto: DeleteProducts) {
  deleteProducts(producto: $producto)
}
`;

export {UPDATECUSTOMER, MUTATIONCUSTOMER, CREATEORDER, DELETEORDER, CREATEPRODUCTS, DELETEPRODUCTS};

//revisar que esta funcionando bien.