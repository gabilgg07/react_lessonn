import React, { useState, useEffect } from "react";
import API from "../api";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const CountryDetails = () => {
  const [country, setCountry] = useState({});
  const [nativeName, setNativeName] = useState("");

  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      const { data } = await API.get(`/name/${name}`);

      setCountry(data[0]);
      const nn = Object.values(data[0].name.nativeName)[0];
      setNativeName(nn.common);
    };

    getCountry();
  }, [name]);

  return (
    <main className="country-main main-bg">
      <Container>
        <Row className="between-center relative-z-1">
          <Col md={5}>
            <button className="to-back-btn" onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left-long"></i>
              <span className="to-back-btn-text">Back</span>
            </button>
          </Col>
        </Row>
        {Object.keys(country).length > 0 && (
          <Row className="mt-5">
            <Col md={6}>
              <div
                className="country-img-box"
                style={{ backgroundImage: `url(${country.flags.svg})` }}
              ></div>
            </Col>
            <Col md={6}>
              <div className="country-text-wrapper">
                <h2 className="country-name">{country.name.common}</h2>
                <div className="country-info-wrapper">
                  <Row>
                    <Col>
                      <p>
                        <span>Native Name:</span>
                        {nativeName}
                      </p>
                      <p>
                        <span>Papulation:</span>
                        {country.population}
                      </p>
                      <p>
                        <span>Region:</span>
                        {country.region}
                      </p>
                      <p>
                        <span>Sub Region:</span>
                        {country.subregion}
                      </p>
                      <p>
                        <span>Capital:</span>
                        {country.capital}
                      </p>
                    </Col>
                    <Col>
                      <p>
                        <span>Top Level Domain:</span>
                        {country.tld}
                      </p>
                      <p>
                        <span>Currencies:</span>
                        {Object.values(country.currencies).map((c) => (
                          <span key={c.name}>{c.name}</span>
                        ))}
                      </p>
                      <p>
                        <span>Languages:</span>
                        {Object.values(country.languages).map((l) => (
                          <span key={l}>{l}</span>
                        ))}
                      </p>
                    </Col>
                  </Row>
                </div>
                <div className="border-countries">
                  <span>Border Countries:</span>
                  <ul>
                    <li>France</li>
                    <li>Germany</li>
                    <li>Netherlands</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </main>
  );
};

export default CountryDetails;
