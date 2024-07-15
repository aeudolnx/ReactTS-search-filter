import { useState, useEffect } from "react";
import { InputProps } from "../../interfaces";
import styles from './styles.module.scss';
import { GetPostRequested } from "./functions/index";

export function Input({posts, setFilterPost}:InputProps){

    const [search, SetSearch] = useState('');
    
    useEffect(()=>{
        GetPostRequested(search, posts, setFilterPost);
    },[search, posts])
    

    return (
        <input className={styles.Input} value={search} onChange={(e)=> SetSearch(e.target.value)} type="search" placeholder="Digite aqui..."/>
    )
}