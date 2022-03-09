import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getUserInfo } from "../../actions";
import { Form, Result } from "../../components";

function Home() {
  const dispatch = useDispatch();

  const result = useSelector((state) => state.result);
  const username = useSelector((state) => state.username);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    console.log(result);
  }, [result]);

  const search = (username) => dispatch(getUserInfo(username));

  const renderResult = () =>
    loading ? <p>Loading . . .</p> : <Result results={result} />;

  return (
    <>
      {username || <Form getUserInfo={search} />}
      {error ? <p role="alert">There has been an error!</p> : renderResult()}
    </>
  );
}

export default Home;
