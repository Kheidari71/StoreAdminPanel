
import { useForm } from "react-hook-form";
import { Alert } from "../../components/Alert";
import TextInput from "../../form/TextInput";
import TextArea from "../../form/TextArea";
import FileInput from "../../form/FileInput";
import Button from "../../form/Button";
import { addBrandService } from "../../services/brands";


const Modalcontainer = ({ isModalOpen, handleModalClose,setForceRender}) => {


    const {
        register,
        handleSubmit,
    reset,
        formState: { errors }
      } = useForm({
        defaultValues: {
          original_name: "",
          persian_name: "",
          description: "",
          logo: null
        }
      })

  const onSubmit = (data) => {
    console.log('Form submitted with data:', data);
    handleAddBrand(data);
  };

  const handleAddBrand = async (data) => {
    try {
      console.log('Sending data:', data);


      const res = await addBrandService(data);

      console.log('API Response:', res);

      if (res.status === 200 || res.status === 202 || res.status === 201) {
        console.log('Category data:', res.data.data);
        console.log(res.status);
        Alert("Record has successfully added", "success");

        handleModalClose();
        reset();
        setForceRender((prev) => prev + 1);
        // Refresh data here
      } else {
        console.log('Non-200 status:', res.status);
        Alert("Failed to add brand", "error");
      }
    } catch (error) {
      console.error('Error adding brand:', error);
    }
  };

  //or >>>>>

//   const onSubmit = async (data) => {
//     try {
//       console.log('Sending data:', data);

//       const formattedData = {
//         ...data,
//         is_active: data.is_active === "active" ? 1 : 0,
//         show_in_menu: data.show_in_menu ? 1 : 0,
//       };
//       if (parentId) formattedData.parent_id = parentId;

//       console.log('Formatted data:', formattedData);

//       const res = await addCategoryService(formattedData);

//       console.log('API Response:', res);

//       if (res.status === 200 || res.status === 202 || res.status === 201) {
//         console.log('Category data:', res.data.data);
//         console.log(res.status);
//         Alert("Record has successfully added", "success");

//         handleModalClose();
//         reset();
//         setForceRender((prev) => prev + 1);
       
//         // Refresh data here
//       } else {
//         console.log('Non-200 status:', res.status);
//         Alert("Failed to add category", "error");
//       }
//     } catch (error) {
//       console.error('Error adding category:', error);
//     }
//   };

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
            Add Brand
          </h2>
          <Button
            type="button"
            onClick={handleModalClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            X
          </Button>

        </div>
        <div className="modal-body ">
          {/* Parent Category Field */}
    

          {/* Category Title Field */}
          <TextInput
            label="Brand name"
            register={register}
            name="original_name"
            placeholder="Enter category title"
            validation={{ required: "Category title is required" }}
            errors={errors}
          />
  <TextInput
            label="Persian brand name"
            register={register}
            name="persian_name"
            placeholder="Enter persian name"
            validation={{ required: "Category title is required" }}
            errors={errors}
          />

          <TextArea
            label="Description"
            register={register}
            name="description"
            placeholder="Enter description"
           
          />
          <FileInput
            label="Brand image"
            register={register}
            name="logo"
            className="dark:bg-transparent dark:text-gray-300"
            placeholder="No file chosen"
          />

          {/* Show in Menu Field */}


          {/* Action Buttons */}
          <div className="flex justify-between">

            <Button
              type="button"
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg"
              onClick={handleModalClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-icon_orange text-white px-6 py-2 rounded-lg"
            >
              Save
            </Button>

          </div>
        </div>
      </form>
    </div>
  );
};
export default Modalcontainer;
// Example usage of the modal
