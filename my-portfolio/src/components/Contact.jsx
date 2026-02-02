import React from "react";

const Contact = () => {
  return (
    <div className="main-contact bg-fuchsia-900 w-screen h-screen">
      contact
      <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        {/* <!-- Card --> */}
        <div class="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 space-y-6">
          {/* <!-- Top bar --> */}
          <div class="h-10 w-full border-2 border-dashed border-gray-300 rounded-md">
            Name
          </div>

          {/* <!-- Main content --> */}
          <div class="h-64 sm:h-72 md:h-80 w-full border-2 border-dashed border-gray-300 rounded-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            sapiente, dolorem doloremque nostrum saepe alias quas nemo
            consequuntur voluptatibus soluta porro facilis dicta architecto,
            doloribus, itaque iste deleniti incidunt rerum.
          </div>

          {/* <!-- Bottom bar --> */}
          <div class="h-10 w-full border-2 border-dashed border-gray-300 rounded-md">
            credit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
