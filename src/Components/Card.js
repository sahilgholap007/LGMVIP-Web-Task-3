import React from "react";

function Card(props) {
  return (
    <tr>
      <td>
        <h3>{props.name}</h3>
        <p>{props.email}</p>
        <a href={`http://`+props.website}>{props.website}</a>
        <p>{props.gender}</p>
        <p>{props.skills.map((skill)=>{
          return <span> {skill},</span>
        })}</p>
      </td>
      <td>
        <img height={150} width={150}
          src={props.image}
          alt="student"
        />
        </td>
    </tr>
  );
}

export default Card;
