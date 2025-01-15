
// Dropdown Component
const Dropdown = ({ items }) => (
    <ul
      tabIndex={0}
      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
    >
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.title}</a>
        </li>
      ))}
    </ul>
  );

  export default Dropdown;