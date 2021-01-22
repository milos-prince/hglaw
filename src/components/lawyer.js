import React from "react"

const lawyer = ({name, email, photo}) => (
<div className="lawyerCard">
  <img src={photo} />
  <h1>{name}</h1>
  <a href={"mailto:"+email}><p>{email}</p></a>
</div>
)

export default lawyer
