import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_NEWQUESTION = gql`
  mutation newquestion($question: String!, $answer: String!) {
    newquestion(question: $question, answer: $answer) {
      token
      user {
        _id
      }
      category {
        name
      } 
    }
  }
`;