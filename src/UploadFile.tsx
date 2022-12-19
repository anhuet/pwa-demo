import AWS from "aws-sdk";
import { useRef, useState } from "react";

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
const REGION = process.env.REACT_APP_REGION;

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const UploadImageToS3WithNativeSdk = () => {
  const [progress, setProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const ref = useRef<HTMLInputElement>(null);

  const handleFileInput = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadFile = (file: any) => {
    setProgress(0);

    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: file.name,
    };

    myBucket
      .putObject(params as any)
      .on("httpUploadProgress", (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .send((err) => {
        if (err) console.log(err);
        else {
          if (ref.current && ref.current.value) ref.current.value = "";
          setSelectedFile(null);
        }
      });
  };

  return (
    <div className="mt-5">
      <div>Native SDK File Upload Progress is {progress}%</div>
      <input type="file" onChange={handleFileInput} ref={ref} />
      <button className="mt-5" onClick={() => uploadFile(selectedFile)}>
        {" "}
        Upload to S3
      </button>
    </div>
  );
};

export default UploadImageToS3WithNativeSdk;
