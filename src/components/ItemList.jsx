import Item from "./Item";

function ItemList({ hits, isLoading }) {
  return (
    <ul className="list-group" id="hits">
      {!isLoading ? (
        hits.map((hit, index) => <Item hit={hit} key={index} id={index} />)
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </ul>
  );



}

export default ItemList;
