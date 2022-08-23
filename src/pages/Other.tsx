import { useParams } from "react-router-dom";

export default function Other() {
  const params = useParams();
  console.log(params)
  return (
    <section>
      <h1 className="text-center mb-4">Other</h1>
    </section>
  );
}
