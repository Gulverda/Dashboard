// components/SideMenu.tsx

import styled from 'styled-components';

const MenuWrapper = styled.ul`
  list-style-type: none; /* Removes default list styles */
  padding: 0; /* Removes default padding */
`;

const MenuItem = styled.li`
  padding: 15px 20px; /* Add padding around menu items */
  font-size: 1rem; /* Adjust font size as needed */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0; /* Light gray background on hover */
  }
`;

const SideMenu: React.FC = () => {
  return (
    <MenuWrapper>
      <MenuItem>Settings</MenuItem>
      <MenuItem>Analytics</MenuItem>
      <MenuItem>Profile</MenuItem>
    </MenuWrapper>
  );
};

export default SideMenu;
