import React from 'react';
import './Post.css';

const Post = () => {
    return (
        <div className="post">
      <img
        className="postImg"
        src='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg'
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            Music
          </span>
          <span className="postCat">
            Life
          </span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
    );
};

export default Post;