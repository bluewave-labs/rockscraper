const RightTitle = () => {
  return (
    <div className="flex gap-2 md:gap-0 flex-col md:flex-row justify-between md:items-center md:mb-6">
      <h2 className="text-xl text-gray-20">Run your query</h2>
      <p className="flex gap-2 md:gap-4 md:justify-center items-center">
        <span className="text-sm md:text-base font-medium text-gray-30">Cost</span>
        <span className="bg-gray-0/12 px-2 py-1 rounded-lg block text-gray-30">0.002 UPT ($0.02)</span>
      </p>
    </div>
  );
};

export default RightTitle;
