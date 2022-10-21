import { renderProps } from "../../functions";
import { Light, A } from "../../txt";
import { useRef, useEffect, useState } from "react";
import { VscClose } from "react-icons/vsc";
import styles from "./style.module.scss";
import { ImAttachment } from "react-icons/im";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import If from "../../../components/renderIf";

/**
 * @param onChange function that triggers when the user uploads a file.
 * @returns jsx element
 */

export default function InputFile(props) {
  const [files, setFiles] = useState([]);
  const inpRef = useRef(null);

  const stopProccess = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFiles(e.dataTransfer.files);
  };

  const handleDel = () => {
    setFiles([]);
    inpRef.current.value = "";
  };

  const handleChange = (e) => {
    setFiles(e.target.files);
  };

  useEffect(() => {
    if (typeof props.onChange === "function") {
      props.onChange(files);
    }
  }, [files]);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={stopProccess}
      onDragEnter={stopProccess}
      onDragLeave={stopProccess}
      className={`form-control text-center ${props.className || ""}`}
    >
      <div className={styles.Text}>
        <If cond={files.length}>
          <div className={styles.FileName}>
            <Light>
              <BsFileEarmarkTextFill /> {files[0]?.name}
            </Light>
            <Light onClick={handleDel}>
              <VscClose />
            </Light>
          </div>
        </If>
        <If cond={!files.length}>
          <Light>
            <ImAttachment />
            <A onClick={() => inpRef.current.click()}>Add file</A> or drop file
            here
          </Light>
        </If>
      </div>
      <input
        {...renderProps(props, ["className"])}
        type="file"
        hidden
        ref={inpRef}
        onChange={handleChange}
      />
    </div>
  );
}
