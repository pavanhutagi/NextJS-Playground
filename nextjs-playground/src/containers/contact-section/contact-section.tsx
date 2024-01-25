"use client";

import styles from "./styles.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function ContactSection() {
  const validationSchema = Yup.object({
    name: Yup.string().required(
      "Come on, how will I recognize you without your name"
    ),
    email: Yup.string()
      .email("Really? Is that how an Email ID looks like?")
      .required("Well, I need your Email ID to be able to connect with you"),
    message: Yup.string().required(
      "I'm sure you are here to tell me something, go ahead and spit it out"
    ),
  });

  const onSubmit = async (values: any, { setSubmitting }: any) => {
    console.log(values);

    let response = await fetch("http://localhost:3000/api/submit-message", {
      method: "POST",
      body: JSON.stringify(values),
    });

    response = await response.json();

    console.log("response - ", response);

    setSubmitting(false);
  };

  return (
    <>
      <div className={styles["contact-section-container"]}>
        <div className={styles["title"]}>Wanna collaborate? Hit me up!</div>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles["contact-form-container"]}>
              <div className={styles["name-text-input"]}>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="p" />
              </div>

              <div className={styles["email-text-input"]}>
                <label htmlFor="email">Email ID</label>
                <Field type="text" name="email" />
                <ErrorMessage name="email" component="p" />
              </div>

              <div className={styles["message-text-area"]}>
                <label htmlFor="message">Message</label>
                <Field as="textarea" name="message" rows={10} />
                <ErrorMessage name="message" component="p" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={styles["send-button"]}
              >
                Send
              </button>
            </Form>
          )}
        </Formik>

        <div className={styles["notification"]}>Message Sent!</div>
      </div>
    </>
  );
}
