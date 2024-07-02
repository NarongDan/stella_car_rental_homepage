import { useEffect } from "react";

export default function Modal({
  width = 30,
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
              className="bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 sm:mx-auto transition-transform transform scale-100 sm:scale-105 hover:scale-110"
              style={{ width: `${width}rem` }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <span className="invisible"></span>
                <h5 className="text-2xl font-medium text-gray-800">{title}</h5>
                <button
                  onClick={onClose}
                  className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded"
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
