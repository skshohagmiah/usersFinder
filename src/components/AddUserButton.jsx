
import { useModalState } from "../context/ModalContext";


const AddUserButton = () => {
  const {openModal} = useModalState()


  return (
    <>
    <button onClick={openModal} className="py-2 px-6 rounded-md whitespace-nowrap bg-slate-300 hover:bg-slate-400 transition text-lg">Add User</button>
    </>
  )
}

export default AddUserButton