import styles from "../../styles/pages/login.register.module.css";

function InputForm(props) {
  const { type, idName, placeholder, onChange } = props;
  return (
    <input
      type={type}
      id={idName}
      name={idName}
      placeholder={placeholder}
      className={styles.input}
      onChange={onChange}
    />
  );
}

export default InputForm;
