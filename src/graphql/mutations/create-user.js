export default `
  mutation createUser($email: String!, $password: String!, $name: String!) {
    createUser(email: $email, password: $password, name: $name) {
      id
      email
      name
      jwt
    }
  }
`;
