"use strict";

/**
 * call-request router.
 */

module.exports = {
  routes: [
    {
      method: "PUT",
      path: "/call-requests/:id/done",
      handler: "call-request.done",
    },
  ],
};
