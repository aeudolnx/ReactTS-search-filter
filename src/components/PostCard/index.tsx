import { PostCardProps } from "../../interfaces";
import styles from './styles.module.scss';

export function PostCard({filterPost}: PostCardProps){
    
    return(

        <main className={styles.Posts}>
            
            {filterPost.map((post=>(
                
                <ul className={styles.Posts} key={post.id}>   
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                
                </ul>
            )))}

        </main>
    )

}