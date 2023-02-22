export default function CommentForm({ onSubmitHandler, slug }) {
  function handleSubmit(event) {
    event.preventDefault();
    const comment = event.target.comment.value;
    onSubmitHandler(slug, comment);
    event.target.reset();
    event.target.elements.comment.focus();
  }

  return (
    <>

    <form className="form__comment" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="comment">leave a comment </label>
      <input className="form__input" type="text" name="comment" id="comment"></input>
      <button className="form__button"type="submit">submit</button>
    </form>
    </>
  );
}
