import React, { useState, useEffect } from "react";
import Item from "./Item";

function ItemList({ posts }) {
  return (
    <ul className="list-group" id="hits">
      {posts.length > 0
        ? posts.map((post, index) => (
            <Item post={post} key={index} id={index} />
          ))
        : "...loading"}
    </ul>
  );
}

export default ItemList;
