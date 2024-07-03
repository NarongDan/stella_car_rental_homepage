import { useEffect } from "react";

export default function Modal({
  width = 50,
  title = "title",
  children,
  open,
  onClose,
}) {
  useEffect(() => {
    const handlePressEsc = (e) => {
      if (e.keyCode === 27) {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handlePressEsc);

    return () => {
      document.removeEventListener("keydown", handlePressEsc);
    };
  }, [onClose]);

  return (
    <>
      {open ? (
        <>
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-30"></div>
          <div
            className="fixed inset-0 z-40 flex items-center justify-center"
            onMouseDown={onClose}
          >
            <div
              className="bg-[#f0f2f5] rounded-lg shadow-lg sm:min-w-sm md:max-w-2xl  lg:max-w-4xl pb-4 mx-4 sm:mx-auto transition-transform transform scale-100 sm:scale-105 hover:scale-110"
              style={{ width: `${width}rem` }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-400 bg-secondary-color shadow-md">
                <span className="invisible"></span>
                <h5 className="text-2xl font-medium text-white ">{title}</h5>
                <button
                  onClick={onClose}
                  className="text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
                >
                  &times;
                </button>
              </div>
              <div className="p-4">{children}</div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
