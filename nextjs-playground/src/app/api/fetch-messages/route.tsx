import mongoDbClientPromise from "@/libraries/mongodb-connect";

export async function GET() {
  const mongoDbclient = await mongoDbClientPromise;
  const contactFormDB = mongoDbclient.db("contact-form");

  const allPosts = await contactFormDB
    .collection("messages")
    .find({})
    .toArray();

  return Response.json({ status: 200, data: allPosts });
}
