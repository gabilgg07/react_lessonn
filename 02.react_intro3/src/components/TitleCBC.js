import React from "react";

class TitleCBC extends React.Component {
  render() {
    const { title, desc, icon } = this.props;

    return (
      <div className="title_cbc r_container r_mt-4">
        <h2>
          {title} <span className="r_to_center">{icon}</span>
        </h2>
        <p className="r_mt-3">{desc}</p>
      </div>
    );
  }
}

export default TitleCBC;
