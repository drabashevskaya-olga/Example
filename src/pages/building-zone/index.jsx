import React, { useState } from "react";
import { siteMap } from "../../components/Head";
import * as Btns from "../../parts/button";
import * as Txt from "../../parts/txt";
import * as Form from "../../parts/form";
import Popup from "../../components/popup";
import SidePopup from "../../components/sidePopup";
import ParagraphGenerator from "../../components/paragraph_generator";

export default function Build() {
  return (
    <>
      <LinkTree />
      <RenderParagraph />
      <ShowForm />
      <ShowBtns />
      <ShowWelcomeExample />;
      <ShowTxts />
    </>
  );
}

function LinkTree() {
  return (
    <div className="page-100 flex-col gap-2">
      <Txt.H1>Site Map</Txt.H1>
      {Object.keys(siteMap).map((key, index) => (
        <div key={index}>
          <Txt.A href={key} target={"_blank"}>
            {siteMap[key].url_name || siteMap[key].title}
          </Txt.A>
        </div>
      ))}
    </div>
  );
}

function ShowBtns() {
  const [showModal, setShowModal] = useState(false);
  const [showSidePopup, setshowSidePopup] = useState(false);

  return (
    <div className="min-vh-100 w-25 mx-auto flex-col gap-2">
      <Popup show={showModal} onHide={() => setShowModal(false)}></Popup>
      <SidePopup
        show={showSidePopup}
        onHide={() => setshowSidePopup(false)}
        right="0px"
      >
        <br />
        <br />
        <div style={{ width: "300px" }}></div>
        text here lalallalalalalal
      </SidePopup>
      <Btns.Button onClick={() => setShowModal(true)}>Click Me</Btns.Button>
      <Btns.Button
        onClick={() => setshowSidePopup(true)}
        className="py-3 px-5"
        glow
      >
        Try This Plan
      </Btns.Button>
      <Btns.Outlined variant="success" className="py-3 px-5" glow>
        Try This Plan
      </Btns.Outlined>
      <Btns.Outlined block className="py-3 w-100">
        Click Me
      </Btns.Outlined>
      <Btns.Thick variant="success" block>
        Click Me
      </Btns.Thick>
    </div>
  );
}

function ShowForm() {
  return (
    <div className="min-vh-100 w-25 mx-auto flex-col gap-2">
      <Txt.H2>Welcome Back!</Txt.H2>
      <Txt.Span>Log In</Txt.Span>
      <Form.Input placeholder="username" />
      <Form.Input placeholder="password" />
      <Form.Textarea />
      <Form.InputFile />
      <Form.Checkbox className="flex gap-2">
        Accept terms & conditions
      </Form.Checkbox>
      <Btns.Button variant="success" className="w-100">
        Click Me
      </Btns.Button>
    </div>
  );
}

function ShowTxts() {
  return (
    <div className="h-100 flex-col my-3 w-75 mx-auto">
      <Txt.H1 className="fw-bolder">I'm bolder</Txt.H1>
      <Txt.H1 className="fw-bold">I'm bold</Txt.H1>
      <Txt.H1 className="fw-normal">I'm normal</Txt.H1>
      <Txt.H1 className="fw-light">I'm light</Txt.H1>
      <Txt.XXL>Hey! I'm Txt.XXL</Txt.XXL>
      <Txt.XL>Hey! I'm Txt.XL</Txt.XL>
      <Txt.H1>Hey! I'm Txt.H1</Txt.H1>
      <Txt.H2>Hey! I'm Txt.H2</Txt.H2>
      <Txt.H3>Hey! I'm Txt.H3</Txt.H3>
      <Txt.H4>Hey! I'm Txt.H4</Txt.H4>
      <Txt.H5>Hey! I'm Txt.H5</Txt.H5>
      <Txt.H6>Hey! I'm Txt.H6</Txt.H6>
      <Txt.P className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
        cumque, alias voluptas tenetur distinctio commodi! Eos, voluptas
        laudantium magnam perferendis ad tempora hic dolore dolorem quisquam,
        optio sequi, vel debitis!
      </Txt.P>
      <Txt.A href="#">Hey! I'm Txt.A</Txt.A>
      <Txt.I>Hey! I'm Txt.I</Txt.I>
    </div>
  );
}

function ShowWelcomeExample() {
  return (
    <div className={`min-vh-100 flex-col w-50 mx-auto`}>
      <Txt.H1>Welcome Home!</Txt.H1>
      <Txt.P className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quasi
        dolorem inventore in, <Txt.A to="/">go there</Txt.A> soluta iure, vel
        voluptates ipsam ducimus voluptatem asperiores repudiandae placeat iusto
        molestias. Aspernatur{" "}
        <Txt.A to="/" className="link-success">
          or go there
        </Txt.A>{" "}
        error quo ea fugiat.
      </Txt.P>
      <Btns.Outlined className="w-100" glow>
        Click Me
      </Btns.Outlined>
    </div>
  );
}

function RenderParagraph() {
  return (
    <div className="page-100 py-5">
      <ParagraphGenerator
        json={[
          {
            type: "h1",
            content: "Headline 1",
          },
          {
            type: "p",
            content:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, sit atque architecto placeat ipsam est molestias fuga perspiciatis laboriosam sapiente hic eos nisi similique ea facere maiores, explicabo expedita! Aperiam!",
          },
          {
            type: "list",
            content: ["List item 1", "List item 2"],
          },
        ]}
      />
    </div>
  );
}
