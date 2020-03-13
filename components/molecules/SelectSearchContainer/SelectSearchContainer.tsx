import * as React from 'react';
import {Stack,Box } from '@chakra-ui/core';
import { SearchSelect} from '../../atoms/SearchSelect';

type sscontainer = {
    onSelect:(e:any)=> void;
}

const labels:Array<{content:string; value:string;}>=[
    {
        content:"help wanted",
        value:'help wanted:>2'
    },
    {
        content:"good first issue",
        value:'good-first-issue:>2'
    },
  
];

const starsOption: Array<{content:string; value:string}> = [
    {
        content:"Any",
        value:"0"
    },
    {
        content:"+1000",
        value:"1000"
    },
    {
        content:"+10000",
        value:"10000"
    }
    
];

const languages : Array<{content:string; value:string;}> = [ {content: ".NET", value: ".NET"},
 {content: "C", value: "C"},
 {content: "C#", value: "C#"},
 {content: "C++", value: "C++"},
 {content: "Clojure", value: "Clojure"},
 {content: "ClojureScript", value: "ClojureScript"},
 {content: "Dart", value: "Dart"},
 {content: "Elixir", value: "Elixir"},
 {content: "Go", value: "Go"},
 {content: "Java", value: "Java"},
 {content: "JavaScript", value: "JavaScript"},
 {content: "Julia", value: "Julia"},
 {content: "Kotlin", value: "Kotlin"},
 {content: "LaTeX", value: "LaTeX"},
 {content: "Perl", value: "Perl"},
 {content: "PHP", value: "PHP"},
 {content: "Python", value: "Python"},
 {content: "Ruby", value: "Ruby"},
 {content: "Rust", value: "Rust"},
 {content: "Scala", value: "Scala"},
 {content: "Swift", value: "Swift"},
 {content: "TypeScript", value: "TypeScript"}]

type Cbox = {
    children : React.ReactNode;
}

const CustomBox = ({children}: Cbox  )=>(
<Box p={2}>
    {children}
</Box>);

const SelectSearchContainer = ({onSelect}:sscontainer) => {
    return (
       <Stack isInline spacing={8} display="flex" alignItems="center" justifyContent="center" align="center">
        <CustomBox>
        <SearchSelect  options={starsOption} onSelect={onSelect} name="stars" placeholder="Stars"/>

        </CustomBox>
        <CustomBox>
        <SearchSelect options={labels} onSelect={onSelect} name="label" placeholder="Label"/>

        </CustomBox>
        <CustomBox>
        <SearchSelect  options={languages} onSelect={onSelect} name="language" placeholder="Languages"/>

        </CustomBox>
      </Stack>
    )
}

export default SelectSearchContainer
