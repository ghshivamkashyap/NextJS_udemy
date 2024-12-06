export function GET(req) {
  let data = { data: "hellol from the API!" };
  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
