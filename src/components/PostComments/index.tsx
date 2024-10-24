import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';

import Comment from '../../models/Comment';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (tempComment.trim()) { 
            const newComment = new Comment(comments.length, tempComment);
            setComments([...comments, newComment]);
            setTempComment(''); 
        }
    }

    return (
        <div>
            <ul className={styles['post-comments']}>
                {comments.map(({ comment, id }) => (
                    <li 
                        data-testid="comment-element" 
                        className={styles['post-comment']} 
                        key={id}
                    >
                        <p className={styles['post-comment-content']}>
                            {comment}
                        </p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddComment} className={styles['post-comments-form']}>
                <textarea 
                    data-testid="comment-textarea" 
                    value={tempComment} 
                    onChange={e => setTempComment(e.target.value)} 
                    required 
                    className={styles['post-comments-form-textarea']} 
                    placeholder="Escreva seu comentário aqui..." 
                />
                <button 
                    data-testid="comment-button" 
                    type="submit" 
                    className={styles['post-comments-form-button']}
                >
                    Comentar
                </button>
            </form>
        </div>
    );
}

export default Post;
