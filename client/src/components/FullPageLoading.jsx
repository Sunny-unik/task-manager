const FullPageLoader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black opacity-75 z-50">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-solid border-white rounded-full"></div>
    </div>
  );
};

export default FullPageLoader;
