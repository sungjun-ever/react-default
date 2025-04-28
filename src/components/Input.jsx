import {memo} from "react";

function Input({ label, type, name, value, onChange, error, ref }) {
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} type={type} name={name} value={value} onChange={onChange} />
      {error && <span>{error}</span>}
    </div>
  )
}

export default memo(Input);