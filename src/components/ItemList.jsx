function ItemList({ hits, isLoading }) {
  return (
    <ul className="list-group" id="hits">
      {!isLoading ? (
        hits.map((hit, id) => (
          <li className="list-group-item" key={id}>
            {hit.title}
            {hit.created_at}
          </li>
        ))
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </ul>
  );
}

export default ItemList;
