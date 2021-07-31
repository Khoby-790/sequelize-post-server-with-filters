import { gql } from "apollo-server-core";


const rootSchema = gql`
scalar Money
  scalar Date
  scalar DateTime
  enum SortOrder {
    ascending
    descending
  }
  input Pagination {
    offset: Int
    limit: Int
  }
  input BooleanOperator {
    eq: Boolean
  }
  input DateOperator {
    eq: DateTime
    before: DateTime
    after: DateTime
    between: DateRange
  }
  input DateRange {
    start: DateTime!
    end: DateTime!
  }
  input IdOperator {
    eq: ID
    in: [ID!]
    notIn: [ID!]
  }
  input NumberOperator {
    eq: Float
    lt: Float
    lte: Float
    gt: Float
    gte: Float
    between: NumberRange
  }
  input NumberRange {
    start: Float!
    end: Float!
  }
  
  input StringOperator {
    eq: String
    notEq: String
    contains: String
    notContains: String
    in: [String!]
    notIn: [String!]
    regex: String
  }

  input MoneyOperator {
    eq: Money
    lt: Money
    lte: Money
    gt: Money
    gte: Money
    between: MoneyRange
  }

  input MoneyRange {
    start: Money!
    end: Money!
  }
    type Root {
        name: String!
    }
    type Query {
        _:Boolean
    }
    type Mutation {
        _:Boolean
    }
`;