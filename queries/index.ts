import gql from 'graphql-tag';


export const Search = gql`
query Search($query:String!,$type:SearchType!){ 
  search(type:$type,query:$query,first:10){
    nodes{ 
      ... on Repository{
        description,
        url,
        name,
       
      }
      ... on RepositoryInfo{
          openGraphImageUrl
        },
        issues(states:OPEN){
          totalCount
        },
        stargazers{
          totalCount
        }
        labels(first:5){
          totalCount,
          nodes{
            
            color,
            name,
            url
          }
        }
    }
  }
}`;