import React from "react";
import { Div } from "../../../../parts/general";
import { P, H2 } from "../../../../parts/txt";
import { Button } from "../../../../parts/button";
import NoModulesSvg from "../../../../assets/modules/noModules.svg";
import { RiSearch2Line } from "react-icons/ri";

export default function MdNoModules() {
  return (
    <Div className="page py-5 flex-col text-center">
      <img src={NoModulesSvg} alt="proprep NoModulesSvg" />
      <br />
      <H2>Add a module</H2>
      <P className="paragraph">
        You haven’t opened any of our modules yet. To get started, search for
        your university or a topic you want to cover.
      </P>
      <Button to="/onboard" className="px-4 py-2" glow>
        <RiSearch2Line /> Search our modules
      </Button>
    </Div>
  );
}
