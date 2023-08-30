function Paginator() {
  return (
    <div className="row">
      <div className="col">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" id="prev" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" id="next" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

//all the elements
const paginationNumbers = document.getElementsByTagName("page-item");
const paginatedList = document.getElementsByClassName("pagination");
//const listItems = paginatedList.querySelectorAll("li");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

//global variables
const paginationLimit = 10;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage;


//Add Page Numbers
const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);
  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

//call the getPaginationNumbers 
//function when the web page loads using the window.load() event:
window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);
});


//Display Active Page
//Get the range for items to be shown: page 1 ---> show items 1 to 10 
const setCurrentPage = (pageNum) => {
  currentPage = pageNum;
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};



//Set Active Page Number
const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};


/////
export default Paginator;
