import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardFooter } from "reactstrap";
import classNames from "classnames";
import { mapToCssModules } from "reactstrap/lib/utils";

const propTypes = {
  header: PropTypes.string,
  mainText: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  footer: PropTypes.bool,
  link: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

const defaultProps = {
  header: "$1,999.50",
  mainText: "Income",
  icon: "fa fa-cogs",
  color: "primary",
  variant: "0",
  link: "#"
};

class Income extends Component {
  render() {
    const {
      className,
      cssModule,
      header,
      mainText,
      icon,
      color,
      footer,
      link,
      children,
      variant,
      ...attributes
    } = this.props;

    // demo purposes only
    const padding =
      variant === "0"
        ? { card: "p-3", icon: "p-3", lead: "mt-2" }
        : variant === "1"
        ? {
            card: "p-0",
            icon: "p-3",
            lead: "pt-3"
          }
        : { card: "p-0", icon: "p-3 px-5", lead: "pt-3" };

    const card = { style: "clearfix", color: color, icon: icon, classes: "" };
    card.classes = mapToCssModules(
      classNames(className, card.style, padding.card),
      cssModule
    );

    const lead = { style: "h5 mb-0", color: color, classes: "" };
    lead.classes = classNames(lead.style, "text-" + card.color, padding.lead);

    const blockIcon = function(icon, right = false) {
      let bootstrapStyles = right
        ? "font-2xl ml-3 float-right"
        : "font-2xl mr-3 float-left";
      const classes = classNames(
        icon,
        "bg-" + card.color,
        padding.icon,
        bootstrapStyles,
        "text-center"
      );
      return <i className={classes} style={{ width: "3.5rem" }} />;
    };

    const cardFooter = function() {
      if (footer) {
        return (
          <CardFooter className="px-3 py-2">
            <a
              className="font-weight-bold font-xs btn-block text-muted"
              href={link}
            >
              View More
              <i className="fa fa-angle-right float-right font-lg" />
            </a>
          </CardFooter>
        );
      }
    };

    return (
      <Card
        style={{
          "margin-bottom": "0.25rem"
        }}
      >
        <CardBody className={card.classes} {...attributes}>
          {blockIcon(card.icon)}
          {blockIcon("fa fa-arrow-circle-o-right", true)}
          <div className={lead.classes}>{header}</div>
          <div className="text-muted text-uppercase font-weight-bold font-xs">
            {mainText}
          </div>
        </CardBody>
        {cardFooter()}
      </Card>
    );
  }
}

Income.propTypes = propTypes;
Income.defaultProps = defaultProps;

export default Income;
