import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";
import { TfiEmail } from "react-icons/tfi";
import { AiOutlineUser } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineEdit } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";

export default function contactForm() {
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
    alert();
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
        let response = await fetch("/nex-contact.php", {
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
          // router.push('/ThankYou');
          setResponseMessage(result.message);
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
    <div
      className="contact-form"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      {/* <form
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
              <Form.Control placeholder="Name" {...register("name", { required: true })} />
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
              <Form.Control placeholder="Email Address"
                {...register("email", {
                  required: "required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message:
                      "Entered value does not match email format",
                  },
                })} />
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
              <Form.Control placeholder="Phone" {...register("phone", { required: true })} />
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
              label="Subject"
              className="mb-3"
            >
              <Form.Control placeholder="Subject"  {...register("subject", { required: true })} />
              <div className="icon">
                <IoIosInformationCircleOutline />
              </div>
            </FloatingLabel>
            {errors.subject && errors.subject.type === "required" && (
              <span className="error">This field is required</span>
            )}
          </Col>
          <Col xs={12}>
            <FloatingLabel
              controlId="floatingInput"
              label="How can we help you? Feel free to get in touch!"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="How can we help you? Feel free to get in touch!"
                {...register("message", { required: true })}
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
                <input type="radio"  {...register("agree", { required: true })} />I agree that my data is collected and stored
              </label>
            </div>
            {errors.agree && errors.agree.type === "required" && (
              <span className="error">Please agree to the terms.</span>
            )}
          </Col>
          <Col xs={12} className="d-flex justify-content-end">
            <button className="btn btn-shine btn-submit" type="submit">
              <span className="btn-label">{isSubmitting ? (<div className="button-loader" id="loader-4"><span></span><span></span><span></span></div>) : ("Submit")}</span>
              <span className="btn-icon">
                <FiArrowRight />
              </span>
            </button>
          </Col>
          {responseMessage ? (<Col xs={12}><span className="error">{responseMessage}</span></Col>) : ("")}
        </Row>
      </form> */}
    </div>
  );
}
