function FeedbackOptions({ ClickBtn }) {
  const handleBtnClick = (e) => {
    const name = e.currentTarget.getAttribute("data-name");
    ClickBtn(name);
  };
  return (
    <>
      <button type="button" onClick={handleBtnClick} data-name="good">
        Good
      </button>
      <button type="button" onClick={handleBtnClick} data-name="neutral">
        Neutral
      </button>
      <button type="button" onClick={handleBtnClick} data-name="bad">
        Bad
      </button>
    </>
  );
}

export default FeedbackOptions;
