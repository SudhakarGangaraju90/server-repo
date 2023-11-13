const {ApolloServer, gql} = require('apollo-server');

const customer = {
    name:'Martha Wayne',
    tierTag:'Pearl',
    id:'#9201931',
    email:'marthawayne@gmail.com',
    phone:'+57 (320) 962-9672'
  }

const typeDefs = gql`

type CustomerInfoType {
    name: String!
    tierTag:String!
    id:String!
    email:String!
    phone:String!
  
  }
    type Query {
        getCustomerInfo: CustomerInfoType
    }
`;

const resolvers = {
Query : {
    getCusomterInfo: () => customer
}
}

const server = new ApolloServer({
    typeDefs, 
    resolvers
})


server.listen({port: 4000}).then(({url}) => {
    console.log(`Server is listening on port ${url}`)
})