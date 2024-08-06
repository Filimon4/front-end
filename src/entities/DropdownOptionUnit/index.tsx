
import styles from "./dropdownunit.module.scss";

const DropdownOptionUnit = ({text, fileLink = '', callback, id}: {text: string, fileLink?: string, callback: (e: React.MouseEvent, id: number) => void, id?: number}) => {
  return (
    <div className={styles.dropdown_unit} onClick={e => callback(e, id!)}>
      {fileLink && <img src={fileLink} alt="" />}
      <a href="">{text}</a>
    </div>
  )
}

export default DropdownOptionUnit