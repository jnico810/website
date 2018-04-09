import React from "react";
import "./NavBar.less";

const NavItem = ({ text }) => <li>{text}</li>;

export default () => (
  <ul>
    <NavItem text="The Couple" />
    <NavItem text="The Wedding" />
    <NavItem text="Accomodations" />
    <NavItem text="RSVP" />
  </ul>
);
