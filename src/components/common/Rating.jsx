import React, { useState } from "react";
import { Rate } from 'antd';
import { FaStar } from "react-icons/fa";

const Rating = ({ readonly=false }) => {
  const [value, setValue] = useState(readonly ? 0 : 4);

  return (
    <span>
      <Rate
        allowHalf 
        onChange={setValue} 
        value={value}
        disabled={readonly}
      />
    </span>
  );
};

export default Rating;
