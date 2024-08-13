import React from 'react'

import styles from "./NavigationField.module.scss";
import { useNavigate } from 'react-router-dom';

interface INavgiationUnit {
  title: string,
  path: string,
}

const configNavigationSection: INavgiationUnit[] = [
  {
    title: "App",
    path: "/app",
  }
]

const NavigationSection = () => {
  const navigator = useNavigate()

  const navigateToApp = (e: React.MouseEvent, path: string) => {
    e.preventDefault()
    navigator(path)
  }

  return (
    <section className={styles.navbar_pages}>
      {configNavigationSection.map((unit, indx) => (
        <a key={indx} onClick={e => navigateToApp(e, unit.path)}>{unit.title}</a>
      ))}
    </section>
  )
}

export default NavigationSection