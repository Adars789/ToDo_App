import React from "react";

export default function Alert(props) {
    const cap=(word)=>{   // for capital letter
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
//     <div className="alert alert-success d-flex align-items-center" role="alert">
//     <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
//       <use xlinkHref="#check-circle-fill"></use>
//     </svg>
//     <div>{props.alert}</div>
//   </div>
    
    props.alert && <div class={`alert alert-success alert-dismissible fade show width="24" height="24"`} role="alert" aria-label="Success:">
        <strong>{cap(props.alert.type)}</strong>: {props.alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  );
}
