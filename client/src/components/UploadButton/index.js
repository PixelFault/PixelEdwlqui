import React from 'react';
import Button from "@material-ui/core/Button";

function UploadButton({ text, variant, color, uploadExtractor }) {
  const [data, setData] = React.useState(null);
  const handleUpload = (event) => {
    event.preventDefault();
    setData(null);

    const reader = new window.FileReader();
    const file = event.target.files[0];

    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      setData(Buffer(reader.result));
    };
  };

  React.useEffect(() => {
    uploadExtractor(data);
  }, [uploadExtractor, data]);

  return (
    <div>
      <Button variant={variant} color={color} component={"label"}>
        {text}
        <input type="file" style={{ display: "none" }} onChange={handleUpload}/>
      </Button>
    </div>
  );
}

export default UploadButton;
