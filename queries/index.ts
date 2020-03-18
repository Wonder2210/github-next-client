import gql from 'graphql-tag';


export const Search = gql`
query Search($query:String!,$first:Int!){ 
  search(type:REPOSITORY,query:$query,first:$first){
    
      repositoryCount
    nodes{
      ... on Repository{
        description,
        url,
        name,
        ... on RepositoryInfo{
          openGraphImageUrl
        },
        
      }
    }
  }
}
`;