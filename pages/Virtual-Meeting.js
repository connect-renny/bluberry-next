import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { FiArrowRight } from "react-icons/fi";

import { MdOutlinePhonelinkRing } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { RxShare1 } from "react-icons/rx";

import { AiOutlineUser } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsCalendar4Week } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";

import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";

export default function VirtualMeeting() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);
  const recaptchaRef = useRef(null);
  const formRef = useRef();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    getValues,
  } = useForm();
  const onSubmit = (data) => {
    recaptchaRef.current.execute();
  };

  const onReCAPTCHAChange = async (captchaCode) => {
    if (!captchaCode) {
      return;
    }
    try {
      setIsSubmitting(true);
      setResponseMessage(false);
      let data = getValues();
      data.recaptcha = recaptchaRef?.current?.getValue();
      if (data.recaptcha) {
        let response = await fetch("/next-contact.php", {
          method: "POST", // or 'PUT'
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          reset();
          router.push("/ThankYou");
          // let result = await response.json();
          // setResponseMessage(result.message);
        } else {
          let result = await response.json();
          setResponseMessage(result.error);
        }
        recaptchaRef.current.reset();
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
        setResponseMessage("Captcha Field is Required.");
        recaptchaRef.current.execute();
      }
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      setResponseMessage("Error!!!");
      recaptchaRef.current.reset();
    }
  };
  return (
    <>
      <Head>
        <link rel="canonical" href="https://thebblabs.com" />
        <script type="application/ld+json">
          {`{
            "@context": "http://www.schema.org",
            "@type": "WebSite",
            "name": "The blue berry labs",
            "alternateName": "bblabs",
            "url": "https://thebblabs.com/Virtual-Meeting"
          }`}
        </script>
      </Head>

      <section className="ins-slider-img-sec">
        <Container fluid="xxl">
          <div className="ins-slider">
            <Image
              src="/images/ins-slider-contact.jpg"
              alt="Slider"
              layout="intrinsic"
              width={1320}
              height={350}
            />
          </div>
        </Container>
      </section>

      <section className="ins-slider-hd-sec">
        <Container fluid="xxl">
          <Row>
            <Col xs={12}>
              <div className="ins-slider-hd">
                <h6>Virtual Meeting</h6>
                <h1>Let's meet</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-sec py-4 py-lg-5 py-xl-6" data-aos="fadeIn">
        <Container fluid="xxl">
          <Row className="d-flex justify-content-center">
            <Col lg={6} xs={12}>
              <div
                className="contact-form"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                <div className="con-add-hd">
                  <h3>Hello.</h3>
                  <h4>
                    Or better yet, let&apos;s meet. We would love to talk to
                    you!
                  </h4>
                </div>
                <form
                  reference={formRef}
                  onSubmit={handleSubmit(onSubmit)}
                  className="assessmentForm"
                >
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    onChange={onReCAPTCHAChange}
                  />
                  <Row>
                    <Col md={6}>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                      >
                        <Form.Control
                          placeholder="Name"
                          {...register("name", { required: true })}
                        />
                        <div className="icon">
                          <AiOutlineUser />
                        </div>
                      </FloatingLabel>
                      {errors.name && errors.name.type === "required" && (
                        <span className="error">This field is required</span>
                      )}
                    </Col>
                    <Col md={6}>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email Address"
                        className="mb-3"
                      >
                        <Form.Control
                          placeholder="Email Address"
                          {...register("email", {
                            required: "required",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message:
                                "Entered value does not match email format",
                            },
                          })}
                        />
                        <div className="icon">
                          <TfiEmail />
                        </div>
                      </FloatingLabel>
                      {errors.email && errors.email.type === "required" && (
                        <span className="error">This field is required</span>
                      )}
                    </Col>
                    <Col md={6}>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Phone"
                        className="mb-3"
                      >
                        <Form.Control
                          placeholder="Phone"
                          {...register("phone", { required: true })}
                        />
                        <div className="icon">
                          <FiPhoneCall />
                        </div>
                      </FloatingLabel>
                      {errors.phone && errors.phone.type === "required" && (
                        <span className="error">This field is required</span>
                      )}
                    </Col>
                    <Col md={6}>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Date"
                        className="mb-3"
                      >
                        <Form.Control
                          type="date"
                          placeholder="Date"
                          {...register("date", { date: true })}
                        />
                        <div className="icon">
                          <BsCalendar4Week />
                        </div>
                      </FloatingLabel>
                      {errors.date && errors.date.type === "required" && (
                        <span className="error">This field is required</span>
                      )}
                    </Col>
                    <Col xs={12}>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Message"
                        className="mb-3"
                      >
                        <Form.Control
                          as="textarea"
                          {...register("message", { required: true })}
                          placeholder="Message"
                        />
                        <div className="icon">
                          <MdOutlineEdit />
                        </div>
                      </FloatingLabel>
                      {errors.message && errors.message.type === "required" && (
                        <span className="error">This field is required</span>
                      )}
                    </Col>
                    <Col xs={12}>
                      <div className="con-agree mb-4">
                        <label>
                          <input
                            type="radio"
                            {...register("agree", { required: true })}
                          />
                          I agree that my data is collected and stored
                        </label>
                      </div>
                      {errors.agree && errors.agree.type === "required" && (
                        <span className="error">
                          Please agree to the terms.
                        </span>
                      )}
                    </Col>
                    <Col xs={12} className="d-flex justify-content-end">
                      <button
                        className="btn btn-shine btn-submit"
                        type="submit"
                      >
                        <span className="btn-label">
                          {isSubmitting ? (
                            <div className="button-loader" id="loader-4">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                          ) : (
                            "Submit"
                          )}
                        </span>
                        <span className="btn-icon">
                          <FiArrowRight />
                        </span>
                      </button>
                    </Col>
                    {responseMessage ? (
                      <Col xs={12}>
                        <span className="error">{responseMessage}</span>
                      </Col>
                    ) : (
                      ""
                    )}
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
