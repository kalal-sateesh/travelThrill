import { Button, Nav, Navbar } from "react-bootstrap";
import styles from "../AppHeader/AppHeader.module.css";
import route from "../../routes/route.json";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const AppHeader = () => {
  const { isAuth, logoutHandler } = useContext(AuthContext);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={styles.navbar}
      style={{ position: "fixed", top: "5px", left: "2.5%", right: "2.5%" }}
    >
      <Navbar.Brand className={`fs-2 p-4 ${styles.TT}`}>
        TravelThrill
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"></Nav>
        <Nav className="me-auto">
          <NavLink to={route.HOME} className={styles.navLink}>
            <Button variant="none" className={styles.button}>
              HOME
            </Button>
          </NavLink>
          <NavLink to={route.ABOUT} className={styles.navLink}>
            <Button variant="none" className={styles.button}>
              ABOUT
            </Button>
          </NavLink>
          <NavLink to={route.SERVICES} className={styles.navLink}>
            <Button variant="none" className={styles.button}>
              SERVICES
            </Button>
          </NavLink>
          <NavLink to={route.CONTACT_US} className={styles.navLink}>
            <Button variant="none" className={styles.button}>
              CONTACT
            </Button>
          </NavLink>
          <NavLink to={route.LOGIN} className={styles.navLink}>
            {!isAuth && (
              <Button variant="secondary" className={styles.button}>
                LOGIN
              </Button>
            )}
            {isAuth && (
              <Button
                variant="secondary"
                className={styles.button}
                onClick={logoutHandler}
              >
                LOGOUT
              </Button>
            )}
          </NavLink>
          <NavLink to={route.SIGNUP} className={styles.navLink}>
            <Button variant="secondary" className={styles.button}>
              SIGNUP
            </Button>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default AppHeader;
