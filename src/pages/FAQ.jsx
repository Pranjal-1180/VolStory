import React, { useState, useEffect } from "react";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/users/get-faqs",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("eyJhbGciOiJIUzI1NiJ9.amQ1MWhTc2xYNlhZR1YyZUVrQ1NKeFNKR0I2Mw.s71yIGRZBZMS3kZ1QIYj0-g1XnQehuFp8bvyftdJXWE")}`,
            },
          }
        );
        const data = await response.json();
        setFaqs(data.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFaqs();
  }, []);

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
