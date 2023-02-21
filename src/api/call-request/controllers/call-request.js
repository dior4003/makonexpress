"use strict";

/**
 *  call-request controller
 */

const axios = require("axios");
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::call-request.call-request",
  ({ strapi }) => ({
    async done(ctx) {
      const { data, meta } = await super.update(ctx, {
        populate: "*",
      });

      const request = await strapi.db
        .query("api::call-request.call-request")
        .findOne({
          where: { id: data.id },
          populate: true,
        });

      try {
        const params = ctx.request.body.params;

        const text = `***New request  #${request.id}***\n\n***Driver:***  ${
          request.user.name
        }\n***Phone:***  ${"```"}${
          request.phoneNumber
        }${"```"}\n\n***Problem:***  ${request.problem}${
          request.status == "rejected"
            ? `\n***Rejection reason:***  ${request.rejection_reason}`
            : ""
        }\n***Status:***  #${request.status}`;

        await axios.post(
          "https://api.telegram.org/bot5517665879:AAEOGNypYw6EYK_21OlvZUTLl2siA1cTEyg/editMessageText",
          {
            chat_id: params.chat_id,
            message_id: params.message_id,
            parse_mode: "markdown",
            text,
          }
        );

        await axios.post(
          "https://api.telegram.org/bot5517665879:AAEOGNypYw6EYK_21OlvZUTLl2siA1cTEyg/editMessageText",
          {
            chat_id: params.group_id,
            message_id: params.group_message_id,
            parse_mode: "markdown",
            text,
          }
        );
      } catch (error) {
        console.log(error);
      }

      return { data, meta };
    },
  })
);
