import React, { useState } from "react";
import {
  Container,
  InputGroup,
  Form,
  Button,
  ListGroup,
} from "react-bootstrap";
import { useCopyClipboard } from "../hooks/hooks";

import API from "../api/api";

const Shrtcode = () => {
  const [links, setLinks] = useState([]);
  const [linkInput, setLinkInput] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [linksInfo, setLinksInfo] = useState([]);
  const [copyClipboard, isCopied] = useCopyClipboard();

  const handleChangedInput = (value) => {
    console.log(value);
    setLinkInput(value);
  };

  const handleShortenBtn = () => {
    if (linkInput.trim().length < 1) {
      setIsEmpty(true);
      return;
    } else {
      setIsEmpty(false);
    }
    const getShortenLink = async () => {
      const { data } = await API.get(`shorten?url=${linkInput}`);

      if (data.ok) {
        setLinks([...links, data.result.short_link]);
        setLinksInfo([...linksInfo, data.result]);
      } else {
        alert("tapilmadi");
      }
    };

    getShortenLink();
    setLinkInput("");
  };

  const handleCopyBtnClick = (link) => {
    if (Object.keys(link).length < 1) return;
    if (link.full_short_link.length < 1) return;
    copyClipboard(link.full_short_link);
    setLinkInput("");
  };

  return (
    <div className="shorten_link my-4">
      <Container>
        <InputGroup className="mb-3 ">
          <Form.Control
            placeholder="Shorten  link here..."
            type="text"
            name="link"
            value={linkInput}
            onChange={(e) => handleChangedInput(e.target.value)}
          />
          <Form.Control.Feedback
            type="invalid"
            className={isEmpty ? " d-inline-block" : ""}
          >
            Please add a link
          </Form.Control.Feedback>
          <Button onClick={handleShortenBtn} variant="outline-secondary">
            Shorten It!
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <ListGroup>
          {Boolean(linksInfo) &&
            linksInfo.map((linkInfo, index) => (
              <ListGroup.Item
                key={linkInfo.code}
                className="d-flex justify-content-between align-items-center"
              >
                {linkInfo.original_link}
                <div className="short_link_box">
                  <a
                    href={linkInfo.full_short_link}
                    target="_blank"
                    rel="noreferrer"
                    className="short_link"
                  >
                    {linkInfo.short_link}
                  </a>
                  <Button
                    className={isCopied ? "is_copied" : ""}
                    onClick={() => handleCopyBtnClick(linkInfo)}
                  >
                    {isCopied ? "Copied!" : "Copy"}
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default Shrtcode;
