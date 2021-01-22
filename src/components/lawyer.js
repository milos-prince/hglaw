import React from "react"

const lawyer = ({name, email, photo}) => (
<div className="lawyerCard">
  <img src={photo} />
  <h1>{name}</h1>
  <h2>{email}</h2>
</div>
)

export default lawyer
