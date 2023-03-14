import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoders } from "../actions";
import Coder from "./Coder";

const Coders = () => {
  const dispatch = useDispatch();
  const { coders } = useSelector((state) => state.coders);

  useEffect(() => {
    dispatch(fetchCoders());

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Container className="mt-5">
        <h2 className="text-center text-secondary mb-3">Coders</h2>
        <Row>
          {coders.map((coder) => (
            <Coder key={coder.id} coder={coder} />
          ))}
        </Row>
        <hr />
      </Container>
    </div>
  );
};

export default Coders;
