import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useModalState } from "../context/ModalContext";
import { IoIosClose } from "react-icons/io";
import ImageUpload from "./ImageUpload";
import Input from "./Input";

// eslint-disable-next-line react/prop-types
const UserFormModal = ({addUser}) => {
  const [image,setImage] = useState('')
  const modalRef = useRef();
  const { modalToggle, closeModal } = useModalState();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:{
      firstName:'',
      lastName:'',
      company:'',
      email:'',
      city:'',
      address:''
    }
  });

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && modalRef.current === e.target) {
        closeModal();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => window.removeEventListener("click", handleOutsideClick);
  }, [closeModal, modalToggle]);

  const onSubmit = (data) => {
    addUser({
      id:Date.now(),
      firstName:data.firstName,
      lastName:data.lastName,
      company:{name:data.company},
      address:{city:data.city, address:data.address},
      image:image,
      email:data.email
    })
    reset()
    closeModal()
  };

  if (modalToggle) {
    return (
      <div
        ref={modalRef}
        className="absolute inset-0 z-50 flex items-center justify-center h-screen bg-black/20 w-full"
      >
        <div className="w-full max-w-[30rem] m-2 bg-white rounded-md shadow-md text-center">
          <div className="flex items-center justify-between p-4 md:px-8 border-b-2">
            <h2 className="text-xl">Fill Up This Form To Add User</h2>
            <IoIosClose onClick={closeModal} className="w-6 h-6 cursor-pointer" />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <Input
                label="First Name"
                placeholder="Enter First Name"               
                rest={register("firstName", {
                  required: "First Name is required",
                })}
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}
            </div>
            <div>
              <Input
                label="Last Name"
                placeholder="Enter Last Name"
                rest={register("lastName", { required: "Last Name is required" })}
              />
              {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}
            </div>

            <div>
              <Input
                label="Company Name"
                placeholder="Enter Company Name"
                rest={register("company", {
                  required: "Company Name is required",
                })}
              />
              {errors.company && (
                <span className="text-red-500">{errors.company.message}</span>
              )}
            </div>

            <div>
              <Input
                label="Email"
                placeholder="Enter Your Email"
                rest={register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div>
              <Input
                label="City"
                placeholder="Enter Your City"
                rest={register("city", { required: "City Name is required" })}
              />
              {errors.city && (
                <span className="text-red-500">{errors.city.message}</span>
              )}
            </div>

            <div>
              <Input
                label="Address"
                placeholder="Enter Your Address"
                rest={register("address", {
                  required: "Address Name is required",
                })}
              />
              {errors.address && (
                <span className="text-red-500">{errors.address.message}</span>
              )}
            </div>
            {/* Add more input fields as needed */}
            <ImageUpload setImage={setImage} />
            {/* Add image upload component with register prop */}

            <button
              type="submit"
              className="w-fit ml-auto md:w-full md:col-span-2 py-2 px-6 bg-slate-300 text-xl rounded-md hover:bg-slate-400 transition"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    );
  }

  return null;
};

export default UserFormModal;
