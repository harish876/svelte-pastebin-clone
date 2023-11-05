import { getPaste } from "../../lib/dataStore";
import { error, json } from "@sveltejs/kit";
import { checkPassword, decryptData } from "../../lib/encryptUtil";

/** @type {import('./$types').RequestHandler} */

export async function POST({ request }) {
  const formData = await request.formData();
  const userPassword = formData.get("password");
  const id = formData.get("id");

  const paste = await getPaste(id);

  if (!paste) {
    throw error(404, "Not Found");
  }

  console.log(paste.password);
  const isMatched = await checkPassword(userPassword, paste.password);
  if (!isMatched) {
    return json({
      status: 403,
      data: null
    })
  }

  let text = paste.text;
  if (paste.encrypted) {
    text = decryptData(paste.text);
  }
  return json({
    status: 200,
    data: {
      ...paste,
      text,
    },
  });
}
