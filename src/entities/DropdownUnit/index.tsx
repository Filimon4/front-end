
import styles from "./dropdownunit.module.scss";

const DropdownUnit = ({text, fileLink = '', callback}: {text: string, fileLink?: string, callback: (e: React.MouseEvent) => void}) => {
  return (
    <div className={styles.dropdown_unit} onClick={callback}>
      {fileLink && <img src={fileLink} alt="" />}
      <a href="">{text}</a>
    </div>
  )
}

export default DropdownUnit