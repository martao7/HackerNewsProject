import React, { useState, useEffect } from "react";

function ItemList({ posts }) {
  return (
    <ul className="list-group" id="hits">
      {posts.length
        ? posts.map((post, id) => (
            <li className="list-group-item" key={id}>
              {post.title}
              {post.created_at}
            </li>
          ))
        : "...loading"}
    </ul>
  );



}

export default ItemList;
