import axios from "axios";
import { InterPost } from "../../../interfaces/index";

export async function findPosts(url:string, SetPosts:React.Dispatch<React.SetStateAction<InterPost[]>>){
    const link = url;
    const dados = await axios.get(link);
    SetPosts(dados.data);
};