import gql from 'graphql-tag';

export const QUERY_QUESTIONS = gql`
  query getQuestions($category: ID) {
    questions(category: $category) {
      _id
      question
      answer
      category {
        _id
      }
    }
  }
`;


export const QUERY_ALL_QUESTIONS = gql`
  {
    questions {
      _id
      question
      answer
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
  }
}
`;