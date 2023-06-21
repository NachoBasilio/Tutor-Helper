export default function Selector({ setPreEntrega }) {


  const handleChange = (event) => {
    setPreEntrega(Number(event.target.value));
  };


  return (
    <form>
      <select value="" onChange={handleChange}>
        <option value="" disabled>
          Elija su pre entrega
        </option>
        <option value="1">PreEntrega 1</option>
        <option value="2">PreEntrega 2</option>
        <option value="3">PreEntrega 3</option>
      </select>
    </form>
  );
}
