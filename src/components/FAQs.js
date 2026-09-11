import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FAQs.css";

const faqs = [
  {
    question: "When is the wedding?",
    answer:
      "We can't wait to celebrate this special day with you. Please check the invitation for the wedding date and details.",
  },
  {
    question: "Where will the wedding be held?",
    answer:
      "The ceremony and reception venue details will be provided in your invitation.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "We recommend arriving at least 30 minutes before the ceremony begins so you have plenty of time to settle in.",
  },
  {
    question: "What should I wear?",
    answer:
      "We'd love for everyone to dress elegantly and comfortably. Please refer to the dress code indicated on the invitation.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "We kindly ask that guests bring only the guests indicated on their invitation.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes. Parking information and directions will be shared with the final wedding details.",
  },
  {
    question: "Do I need to RSVP?",
    answer:
      "Yes, please RSVP by the date indicated on your invitation so we can prepare for your attendance.",
  },
  {
    question: "What if I have dietary restrictions?",
    answer:
      "Please let us know about any dietary restrictions when you RSVP, and we'll do our best to accommodate you.",
  },
];

export default function FAQs() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className="faqs-section">
      <Container maxWidth="md">
        <Box className="faqs-container">

          <Typography className="faqs-label">
            Good to know
          </Typography>

          <Typography
            component="h2"
            className="faqs-title"
          >
            Frequently Asked
            <br />
            <em>Questions</em>
          </Typography>

          <Box className="faqs-list">
            {faqs.map((faq, index) => (
              <Accordion
                key={faq.question}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                className="faq-item"
                disableGutters
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  className="faq-question"
                >
                  <Typography>
                    {faq.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails className="faq-answer">
                  <Typography>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
