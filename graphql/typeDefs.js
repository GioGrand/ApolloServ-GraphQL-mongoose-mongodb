const { gql } = require("apollo-server");

module.exports = gql`
  type Person {
    id: ID!
    name: String!
    age: Int!
    stories: [Story]!
  }
  type Story {
    id: ID!
    author: Person!
    title: String!
    fans: [Person]!
  }
  type Post {
    id: ID!
    body: String!
    createdAt: String!
    lastName: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    commentCount: Int!
  }
  type Comment {
    id: ID!
    createdAt: String!
    lastName: String!
    body: String!
  }
  type Like {
    id: ID!
    createdAt: String!
    lastName: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    createdAt: String!
    firstName: String!
    lastName: String!
  }
  input RegisterInput {
    firstName: String!
    lastName: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getPosts: [Post]
    getPost(postId: ID!): Post
    getPersons: [Person]
    getPerson(personId: ID!): Person
    getStories: [Story]
    getStory(storyId: ID!): Story
  }
  type Mutation {
    createPerson(name: String!, age: Int!): Person!
    createStory(authorId: ID!, title: String!): Story
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
    createPost(body: String!): Post!
    deletePost(postId: ID!): String!
    createComment(postId: String!, body: String!): Post!
    deleteComment(postId: ID!, commentId: ID!): Post!
    likePost(postId: ID!): Post!
  }
  type Subscription {
    newPost: Post!
  }
`;
