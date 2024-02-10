
// eslint-disable-next-line react/prop-types
const Input = ({label, placeholder,rest}) => {
  return (
    <div className="text-left">
    <label htmlFor="fname" className="whitespace-nowrap">
      {label} :
    </label>
    <input
      className="border-2 p-1 rounded-md w-full mt-1"
      {...rest}
      placeholder={placeholder}
    />
  </div>
  )
}

export default Input