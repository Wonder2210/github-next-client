import * as React from 'react';
import { Stack, Grid,Button } from "@chakra-ui/core";
import { Card } from '../components/organisms/Card';
import { Search } from '../components/organisms/Search';
import LoadingSpinner from '../components/LoadingSpinner';

import ReactPaginate from 'react-paginate';


const { Component } = React;
type SearchNodes = {
    description: string;
    url: string;
    name: string;
    openGraphImageUrl: string;
}
type SearchData = { 
    repositoryCount?: number; 
    nodes?: readonly [SearchNodes] 
};

type props = {
  data?:{search:SearchData};
  onInput : (e: React.FormEvent<HTMLInputElement>)=>void;
  onSelect : (e: React.FormEvent<HTMLInputElement>)=>void;
  input:string;
  loading:boolean;
  loadMore:(number:number)=> void ;
  repositoryCount?:number;
  reposOnScreen : number ;
}

class MainContainer extends Component<props,{}> {
    
   loadMore = ()=>{
       const {repositoryCount,reposOnScreen,loadMore} = this.props;
       const number = reposOnScreen > reposOnScreen ? reposOnScreen : reposOnScreen + 10;
        loadMore(number);
   }
    render() {
      const results = this.props.data?.search.nodes?.map((item, index) => {
         
        return (
            <Card
                key={index}
                body={item.description?.length > 300 ? (item.description.slice(0,300)).concat("...")  : item.description}
                name={item.name}
                header={item.url}
                image={item.openGraphImageUrl}
            />
        );
    })
        return (
            <Stack>
                {/* Boton de log out */}
                <Stack padding={2} justifyContent="center" alignItems="center" flexGrow={1}>
                    <Search
                        input={this.props.onInput}
                        select={this.props.onSelect}
                        submit={()=>{
                          return ()=>{console.log("here")
                        }}}
                        value={this.props.input}
                    />
                </Stack>
                <Grid templateColumns=" repeat(auto-fill,minmax(470px,1fr))" gap={4} justifyContent="center">
               {this.props.loading?<LoadingSpinner/>:results}
                </Grid>
               <Button onClick={this.loadMore} isDisabled={this.props.reposOnScreen > this.props.reposOnScreen } alignSelf="center"> Load More</Button>
            </Stack>
        );
    }
};

export default MainContainer;

