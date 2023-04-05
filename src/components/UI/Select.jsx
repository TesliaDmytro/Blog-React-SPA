import styles from './Select.module.css';

const Select = ({ options, title, value, onChange }) => {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option disabled value="">
        {title}
      </option>
      {options.map((option) => {
        return (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
