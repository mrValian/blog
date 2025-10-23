import styled from 'styled-components';
import { H2 } from '../../components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useServerRequest} from '../../hooks';
import { Comments, PostContent } from './components';
import { loadPostAsync } from '../../action';
import { selectPost } from '../../selectors';

const PostContainer = ({className}) => {
    const dispatch = useDispatch();
    const params = useParams();
    const post = useSelector(selectPost);
    const requestServer = useServerRequest();

    useEffect(() => {
        dispatch(loadPostAsync(requestServer, params.id));
    }, [dispatch, params.id, requestServer]);

    return (
        <div className={className}>
            <PostContent post={post} />
            <Comments comments={post.comments} postId={post.id} />
        </div>
    );
};

export const Post = styled(PostContainer)`
    margin: 40px 0;
    padding:  0 80px;
`;
