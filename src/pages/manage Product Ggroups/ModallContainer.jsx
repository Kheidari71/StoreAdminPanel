import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addCategoryService } from "../../services/category";
import { Alert } from "../../components/Alert";

const Modalcontainer = ({ isModalOpen, handleModalClose, parentId }) => {
 

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      is_active: true,
      show_in_menu: true,
      image: null
  }
  })
 
  const onSubmit = (data) => {
    console.log('Form submitted with data:', data);
    handleAddCategory(data);
  };

  console.log(parentId);

  const location = useLocation();
  console.log(location);


  const handleAddCategory = async (data) => {
    try {
      console.log('Sending data:', data);

      const formattedData = {
        ...data,
        is_active: data.is_active ? 1 : 0,
        show_in_menu: data.show_in_menu ? 1 : 0,
      };
      if (parentId) formattedData.parent_id = parentId;

      console.log('Formatted data:', formattedData);

      const res = await addCategoryService(formattedData);
      
      console.log('API Response:', res);

      if (res.status === 200 || res.status === 201) {
        console.log('Category data:', res.data.data);
        console.log(res.status);
        Alert("Record has successfully added", "success");
        
        handleModalClose();
        // Refresh data here
      } else {
        console.log('Non-200 status:', res.status);
        Alert("Failed to add category", "error");
      }
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  // {parentId? location.state.data.title : "No parent"}

  if (!isModalOpen) return null; // Don't render anything if modal is not open

  return (
    <div
      className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleModalClose}
    >
      <form
        className="bg-white p-6 rounded-xl shadow-lg w-96 dark:bg-gray-600"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-lg font-semibold text-card&table dark:text-gray-200">
            Add Product Category
          </h2>
          <button
            onClick={handleModalClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            X
          </button>
        </div>
        <div className="modal-body ">
          {/* Parent Category Field */}
          <div className="mb-4">
            <p className="dark:bg-transparent block text-sm text-card&table dark:text-gray-200 mb-2">
              Parent category :
            </p>
            <div className="text-gray-500 dark:bg-transparent  dark:text-gray-300 w-full rounded-lg">
              {!parentId ? (
                <p>No Parent</p>
              ) : (
                <p> {location.state.data.title}</p>
              )}
            </div>
          </div>

          {/* Category Title Field */}
          <div className="mb-4">
            <label className="dark:bg-transparent dark:text-gray-300 block text-sm text-card&table  mb-2">
              Category Title
            </label>
            {/* <input
              type="text"
              className="dark:bg-transparent dark:text-gray-300 w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter category title"
            /> */}
             <input
            type="text"
            {...register("title", { required: "Category title is required" })}
            className="dark:bg-transparent dark:text-gray-300 w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter category title"
          />
           {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
          </div>

          {/* Description Field */}
          <div className="mb-4 dark:bg-transparent dark:text-gray-300">
            <label className="block text-sm text-card&table dark:text-gray-200 mb-2">
              Description
            </label>
            <textarea
            {...register ("description")}
              className="dark:bg-transparent dark:text-gray-300 w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* File Upload Field */}
          <div className="mb-4 ">
            <label className="block text-sm text-card&table  mb-2">Image</label>
            <input
             type="file"
            {...register("image")}
              className="text-gray-300 dark:bg-transparent dark:text-gray-300 w-full p-2 border border-gray-300 rounded-lg"
            />
            <span className="text-gray-500 dark:bg-transparent dark:text-gray-300">
              No file chosen
            </span>
          </div>

          {/* Status Field */}
          <div className="mb-4">
            <label className="dark:bg-transparent dark:text-gray-300 block text-sm text-card&table mb-2">
              Status
            </label>
            <select
{...register("is_active")}
             className="text-gray-300 dark:bg-transparent dark:text-gray-300 w-full p-2 border border-gray-300 rounded-lg">
              <option
                value="active"
              >
                Active
              </option>
              <option
                value="inactive"
              >
                Not Active
              </option>
              
              {/* Add other status options here */}
            </select>
          </div>

          {/* Show in Menu Field */}
          <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            {...register("show_in_menu")}
            className="mr-2"
          />
            <label className="text-sm text-card&table dark:text-gray-200">
              Show in menu
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
onClick={handleModalClose}
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
        
              type="submit"
              className="bg-icon_orange text-white px-6 py-2 rounded-lg"
              onClick={handleSubmit(onSubmit)}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Modalcontainer;
// Example usage of the modal
