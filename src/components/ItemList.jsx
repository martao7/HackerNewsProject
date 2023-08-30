import React, { useState, useEffect } from "react";
import Item from "./Item";

function ItemList({ hits, isLoading }) {
  return (
    <ul className="list-group" id="hits">
      {hits.length > 0 ? (
        hits.map((post, index) => <Item post={post} key={index} id={index} />)
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </ul>
  );
}

export default ItemList;
