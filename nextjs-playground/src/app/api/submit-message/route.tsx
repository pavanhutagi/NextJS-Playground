import mongoDbClientPromise from "@/libraries/mongodb-connect";

export async function POST(req: Request) {
  const mongoDbclient = await mongoDbClientPromise;
  const contactFormDB = mongoDbclient.db("contact-form");

  let bodyObject = await req.json();

  console.log("bodyObject - ", bodyObject);

  let response = await contactFormDB
    .collection("messages")
    .insertOne(bodyObject);

  return Response.json(response);
}
