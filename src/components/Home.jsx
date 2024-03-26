import { useState } from "react";
import "./home.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

function Home() {
  const [greeting] = useState("HELLO ORRIN");

  return (
    <div>
      <h1>{greeting}</h1>
      <Formik>
        <Form>
          <Field name="name" component="div" />
          <ErrorMessage>Error</ErrorMessage>
        </Form>
      </Formik>
    </div>
  );
}

export default Home;
