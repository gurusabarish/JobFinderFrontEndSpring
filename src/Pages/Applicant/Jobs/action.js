import React from "react";
import { Menu, IconButton, MenuItem } from "@mui/material";

import { DotsVertical } from 'tabler-icons-react';

export default function Action({ data, deleteitem, updateData }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUpdate = (data) => {
    updateData(data);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <DotsVertical />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          style={{ color: "green" }}
          onClick={() => {
            handleUpdate(data);
          }}
        >
          Apply
        </MenuItem>
      </Menu>
    </div>
  );
}
