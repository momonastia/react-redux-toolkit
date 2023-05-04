const InputField = ({ text, handleSubmit, handleInput }) => {
  return (
    <label>
      <input value={text} onChange={(e) => handleInput(e.target.value)} />
      <button onClick={handleSubmit}>Add todo</button>
    </label>
  );
};

export default InputField;
