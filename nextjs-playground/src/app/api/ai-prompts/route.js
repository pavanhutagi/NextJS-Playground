export async function GET(request) {
  const data = [
    { id: 1, name: "foo" },
    { id: 2, name: "bar" },
  ];

  return new Response(JSON.stringify(data));
}
