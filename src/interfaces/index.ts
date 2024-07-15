export interface InterPost{
    userId:number;
    id:number;
    title:string;
    body:string;
    posts?:InterPost[];
}

export interface PostCardProps {
    filterPost: InterPost[];
}

export interface InputProps{
    posts:InterPost[];
    setFilterPost:React.Dispatch<React.SetStateAction<InterPost[]>>;
}


