import React, { useEffect, useState } from "react";
import { PlaidLink } from "react-plaid-link";

export default function Link() {
  const [linkToken, setLinkToken] = useState("");
  const [publicToken, setPublicToken] = useState("");

  useEffect(() => {
    //getToken()
  }, []);
  const handleOnSuccess = (public_token, metadata) => {
    // send token to client server
    console.log({ public_token });
    setPublicToken(public_token);
  };

  const handleChange = (e) => {
    setLinkToken(e.target.value);
  };
  return (
    <>
      <form>
        <label>
          Link Token
          <input type="text" name="link" onChange={handleChange} />
        </label>
        <br />
      </form>
      <br />
      <PlaidLink
        clientName="React Plaid Setup"
        env="sandbox"
        product={["transactions"]}
        token={linkToken}
        onSuccess={handleOnSuccess}
        className="test"
      >
        Open Link and connect your bank!
      </PlaidLink>
      <br />

      {publicToken && (
        <>
          <h4>Public Token: </h4>
          <h5>{publicToken}</h5>
        </>
      )}
    </>
  );
}
