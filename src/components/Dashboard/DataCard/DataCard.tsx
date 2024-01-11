import { Paper } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export type DataCardProps = {
  title: string;
  value: string;
  description: string;
  titleStyle?: React.CSSProperties;
  cardStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
};

const DataCard = (props: DataCardProps) => {
  const {
    title,
    value,
    description,
    titleStyle,
    cardStyle,
    descriptionStyle,
    valueStyle,
  } = props;

  const titleContainerStyle: React.CSSProperties = {
    ...titleStyle,
  };

  const defaultCardStyle: React.CSSProperties = {
    width: "250px",
    height: "150px",
    background: "#252525",
    ...cardStyle,
  };

  const defaultDescriptionStyle: React.CSSProperties = {
    fontSize: "14px",
    color: "#9e3055", // Default color for description
    ...descriptionStyle,
  };

  const defaultValueStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#f5f5f5", // Default color for value
    ...valueStyle,
  };

  return (
    <Paper style={defaultCardStyle}>
      <div style={titleContainerStyle}>
        <Typography variant="h6" color="lightslategrey" style={{ ...titleStyle, fontSize: "1.25rem" }}>
          {title}
        </Typography>
        <Tooltip title={<Typography fontSize={16}>{`${description} which is ${value}`}</Typography>}>
          <IconButton >
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Typography variant="h4" style={defaultValueStyle}>
        {value}
      </Typography>
      <Typography style={defaultDescriptionStyle}>
        {description}
      </Typography>
    </Paper>
  );
};

export default DataCard;
