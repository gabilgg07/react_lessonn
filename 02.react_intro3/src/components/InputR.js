const InputR = ({ inputP }) => {
  const { type } = inputP;
  const { iName } = inputP;
  const { id } = inputP;
  return (
    <>
      <label htmlFor={id}>
        {(iName && iName.toString().toUpperCase() + ":") || "Label:"}
      </label>
      <input type={type} name={iName} id={id} />
    </>
  );
};

export default InputR;
