import "./Form.css";

export default function Form({ onAddMovie }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("daten aus dem Formular: ", data);

    onAddMovie(data);

    // Alternativer Weg, um an die Daten zu kommen:

    // const name = event.target.elements.name.value
    // const isLiked = event.target.elements.isLiked.checked
    // const data = { name: name, isLiked: isLiked }
    // onAddMovie(data)

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a new movie</h2>
      <div className="form__fields">
        <div className="form__field">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            id="name"
            type="text"
            name="name"
            placeholder="Dr. Strange"
            required
          />
        </div>
        <div className="form__field">
          <label className="form__label" htmlFor="isLiked">
            Like
          </label>
          <input
            className="form__checkbox"
            id="isLiked"
            type="checkbox"
            name="isLiked"
          />
        </div>
        <button type="submit" className="form__button">
          Add
        </button>
      </div>
    </form>
  );
}
