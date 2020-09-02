import React from 'react';
import Button from "@material-ui/core/Button";

function UploadButton({ text, variant, color }) {
  return (
    <div>
      <Button variant={variant} color={color} component={"label"}>
        {text}
        <input type={"file"} style={{ display: "none" }}/>
      </Button>
    </div>
  );
}

export default UploadButton;
