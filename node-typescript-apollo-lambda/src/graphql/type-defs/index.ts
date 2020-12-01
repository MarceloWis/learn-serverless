
import { gql } from 'apollo-server-lambda';
import DummyInput from './inputs/DummyInputs';
// Objects
import DummyObject from './objects/DummyObject';
// Root types
import Mutation from './root/Mutations'; // tslint:disable-line ordered-imports
import Query from './root/Queries'; // tslint:disable-line ordered-imports

const typeDefStrings = [
    DummyInput,
    DummyObject,
    Mutation,
    Query
];

const typeDefs = typeDefStrings.map(typeDef => gql(typeDef));

export default typeDefs;