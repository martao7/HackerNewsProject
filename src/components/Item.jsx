import moment from "moment/moment";
import React from "react";

function Item({ post, id }) {
  function getDomain(url, subdomain) {
    subdomain = subdomain || false;
    url = url.replace(/(https?:\/\/)?(www.)?/i, "");
    if (!subdomain) {
      url = url.split(".");
      url = url.slice(url.length - 2).join(".");
    }
    if (url.indexOf("/") !== -1) {
      return url.split("/")[0];
    }
    return url;
  }
  const ago = moment().diff(post.created_at, "hours");
  //console.log(props);
  return (
    <li className="list-group-item">
      <div id="title text-truncate">
        <span class="badge rounded-pill text-bg-secondary">{id + 1}</span>
        <div className="d-inline">
          {ago < 12 ? (
            <span class="badge text-bg-danger mx-2">New</span>
          ) : (
            <span className="mx-1"></span>
          )}
          {post.url ? (
            <>
              <span>
                <a href={post.url} target="new">
                  {post.title}
                </a>
              </span>
              <small className="px-3">({getDomain(post.url)})</small>
            </>
          ) : (
            <span>{post.title} </span>
          )}
        </div>
      </div>
      <small className="fw-lighter mx-2 ps-4">
        {post.points} points by {post.author}
      </small>
      <div class="vr"></div>
      <small className="fw-lighter px-3">
        {moment(post.created_at).fromNow()}
      </small>
      <div class="vr"></div>
      <small className="fw-lighter px-3">{post.num_comments} comments</small>
    </li>
  );
}

export default Item;
