import InputR from "./InputR";

const ExampleForm = ({ person }) => {
  const { pName } = person;
  const { surname } = person;
  const { age } = person;

  return (
    <div className="r_container r_mt-3">
      <div className="r_form_control ">
        {pName && <InputR inputP={pName} />}
        {surname && <InputR inputP={surname} />}
        {age && <InputR inputP={age} />}
      </div>
    </div>
  );
};

export default ExampleForm;
