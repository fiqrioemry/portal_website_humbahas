import toast from "react-hot-toast";

const useToastMessage = () => {
  const handleShowToast = () => {
    toast.success("Sorry Features is not available yet");
  };

  return {
    handleShowToast,
  };
};

export default useToastMessage;
