import React, { useState } from "react";
import "./Training.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemButton,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/Training_data";

const Training = () => {
  return (
    <section className="a-wrapper">
      <div className="paddings innerWidth flexCenter a-container">
        {/* left side */}
        <div className="flexColStart a-right">
          <span className="orangeText">Training</span>
          <span className="primaryText">Renewable never make you down</span>
          <span className="secondaryText">
            We understand the importance of knowledge and expertise in the solar
            industry. That's why we offer comprehensive training programs
            designed to equip individuals with the skills and knowledge needed
            to succeed in the solar energy field.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);
              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <div className="secondaryText text_align">
                      {item.detail}
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/*  right */}
        <div className="flexCenter a-left flexCenter-img">
          <div className="image-container shift-left">
            <img src="./training2.png" alt="landing_image" height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
