
import styles from "./dropdownunit.module.scss";

const DropdownOptionUnit = ({text, fileLink = '', callback, id}: {text: string, fileLink?: string, callback: (e: React.MouseEvent) => void, id?: number}) => {
  return (
    <div className={styles.dropdown_unit} onClick={callback} unit-id={id ?? -1}>
      {fileLink && <img src={fileLink} alt="" />}
      <a href="">{text}</a>
    </div>
  )
}

export default DropdownOptionUnit