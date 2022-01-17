import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../css/menu.css";
function SearchBar() {
  let foodInput = "";
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    let foodName = foodInput.value;
    let path = `/search?q=${foodName}`;
    history.push(path);
  };
  return (
    <>
      <div className="hideSearch">
        <Form onSubmit={handleSubmit}>
          <div id="search">
            <input
              type="text"
              className="search_input"
              ref={(input) => (foodInput = input)}
              aria-label="search"
              placeholder=" Хайх"
            />
            <button className="search_submit" aria-label="submit search">
              {" "}
              <img
                className="uu"
                src="/icons/searchButton.svg"
                alt=""
                width={20}
                height={25}
              />
            </button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default SearchBar;
