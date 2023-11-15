import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();
  console.error(err);
  return (
    <div id="error-page">
      <h1>Page Not Found</h1>
      <p>Please hit the back arrow or refresh</p>
    </div>
  );
}
