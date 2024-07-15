import { useCallback, useEffect, useState } from "react";
import { InterPost } from "../../interfaces";
import { PostCard } from "../PostCard";
import { Input } from "../Input";
import { findPosts } from "./functions/index";
import styles from './styles.module.scss';

export function PostContainer(){

    const [posts, SetPosts] = useState<InterPost[]>([]);
    const [filterPost, setFilterPost] = useState<InterPost[]>([]);
    const url = 'https://jsonplaceholder.typicode.com/posts';

    //useCallback esta ajudando a nao ter mts chamadas pra API, se tirar da erro!
    const serverFetch = useCallback(()=>{
        findPosts(url, SetPosts)
    },[]);
    useEffect(()=>{
        serverFetch();
    },[]);
    

    return (
        <div className={styles.Container}>
            <Input posts={posts} setFilterPost={setFilterPost}/>
            <PostCard filterPost={filterPost} />
        </div>
    )
}