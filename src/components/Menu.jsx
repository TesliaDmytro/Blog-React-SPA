import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink to="." end>
        Main
      </NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contacts">Contacts</NavLink>
      <NavLink to="posts">Posts</NavLink>
    </nav>
  );
};

export default Menu;
