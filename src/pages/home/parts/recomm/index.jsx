import * as Txt from "../../../../parts/txt";
import RecommCards from "./cards";

export default function RecommPage(props) {
  return (
    <div className="page-100 bg-light flex-col gap-3 py-5">
      <Txt.H2 className="mt-5">What students are saying</Txt.H2>

      <br />
      <br />
      <RecommCards small={props.small} />
      <br />
      <br />
    </div>
  );
}
