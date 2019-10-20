import React from 'react';
import { PropTypes } from 'prop-types';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';

const PostsList = ({ post }) => (
  <div>
    <section className="posts-list">
      <article className="post-summary">
        <SmallTitle>{post.title}</SmallTitle>
        <HtmlBox>{post.content}</HtmlBox>
        <p>Author: {post.author}</p>
      </article>
    </section>
  </div>
);

PostsList.propTypes = {
  post: PropTypes.shape({
<<<<<<< HEAD
    id: PropTypes.string,
    author: PropTypes.string,
=======
    id: PropTypes.string.isRequired,
>>>>>>> task-30-8
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  })
};

export default PostsList;
