import React from "react"

const ColofulMessage = (props) => {
  const {color, children} = props
  const contentStyle = {
    fontSize: "20px",
    backgroundColor: color
  }
  return <p style={contentStyle}>{children}</p>
}

export default ColofulMessage;