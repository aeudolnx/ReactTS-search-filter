import { InterPost } from "../../../interfaces";

export function GetPostRequested(search:string, posts:InterPost[], setFilterPost:React.Dispatch<React.SetStateAction<InterPost[]>>){
    
    if(posts.length === 0) {
        setFilterPost(posts)
    }else{
        const lowerCasedQuery = search.toLocaleLowerCase();
        setFilterPost(
            posts.filter((dados)=> dados.title.includes(lowerCasedQuery))
        )
    }
}